import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import Donation from './models/Donation.js';
import User from './models/User.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_fallback_secret';

app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.warn('WARNING: MONGODB_URI is not defined in .env. Falling back to local MongoDB.');
}

const finalUri = MONGODB_URI || 'mongodb://localhost:27017/food-donation';

mongoose.connect(finalUri, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
})
    .then(() => console.log('✅ Successfully connected to MongoDB Atlas'))
    .catch(err => {
        console.error('❌ MongoDB connection error:', err.message);
        if (err.message.includes('IP not whitelisted')) {
            console.error('👉 TIP: Please check your MongoDB Atlas Network Access whitelist.');
        }
    });

// Monitor connection events
mongoose.connection.on('error', err => {
    console.error('📡 MongoDB runtime error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.warn('📡 MongoDB disconnected from server');
});

// --- Auth Routes ---

app.post('/api/auth/register', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({ fullName, email, password });
        await user.save();

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ token, user: { id: user._id, fullName, email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, user: { id: user._id, fullName: user.fullName, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// --- Donation Routes ---

app.get('/api/donations', async (req, res) => {
    try {
        const donations = await Donation.find().sort({ timestamp: -1 });
        res.json(donations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/donations', async (req, res) => {
    const donation = new Donation(req.body);
    try {
        const newDonation = await donation.save();
        res.status(201).json(newDonation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
