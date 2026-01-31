import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
    donorName: { type: String, required: true },
    donorEmail: { type: String, required: true },
    donationType: { type: String, required: true },
    amount: { type: Number },
    items: [String],
    location: {
        lat: Number,
        lng: Number,
        address: String
    },
    timestamp: { type: Date, default: Date.now }
});

const Donation = mongoose.model('Donation', donationSchema);

export default Donation;
