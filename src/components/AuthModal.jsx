import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Github, Loader2 } from 'lucide-react';
import { registerUser, loginUser } from '../utils/api';

const AuthModal = ({ isOpen, onClose, onAuthSuccess }) => {
    const [mode, setMode] = useState('login'); // 'login' or 'signup'
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('🚀 Auth Form Submitted:', mode, formData.email);
        setLoading(true);
        setError('');

        try {
            let response;
            if (mode === 'signup') {
                response = await registerUser({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password
                });
            } else {
                response = await loginUser({
                    email: formData.email,
                    password: formData.password
                });
            }

            // Save token and user info
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));

            if (onAuthSuccess) {
                onAuthSuccess(response.user);
            }
            onClose();
        } catch (err) {
            setError(err.message || 'Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="glass-card dark-section"
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                            padding: '3rem',
                            position: 'relative',
                            background: 'rgba(15, 12, 41, 0.95)'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--text-muted)',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={24} />
                        </button>

                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                                {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                            </h2>
                            <p style={{ color: 'var(--text-muted)' }}>
                                {mode === 'login' ? 'Join the community and start giving.' : 'Be the change in your neighborhood today.'}
                            </p>
                        </div>

                        <div className="charity-tabs" style={{ marginBottom: '2rem' }}>
                            <div
                                className={`tab ${mode === 'login' ? 'active' : ''}`}
                                onClick={() => setMode('login')}
                                style={{ flex: 1, textAlign: 'center' }}
                            >
                                Login
                            </div>
                            <div
                                className={`tab ${mode === 'signup' ? 'active' : ''}`}
                                onClick={() => setMode('signup')}
                                style={{ flex: 1, textAlign: 'center' }}
                            >
                                Sign Up
                            </div>
                        </div>

                        {error && (
                            <div style={{ color: '#ff4444', marginBottom: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {mode === 'signup' && (
                                <div className="form-group">
                                    <label><User size={14} style={{ marginRight: '5px' }} /> Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="John Doe"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="form-group">
                                <label><Mail size={14} style={{ marginRight: '5px' }} /> Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label><Lock size={14} style={{ marginRight: '5px' }} /> Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                                disabled={loading}
                            >
                                {loading ? <Loader2 className="animate-spin" size={20} /> : (mode === 'login' ? 'Sign In' : 'Create Account')}
                            </button>

                            <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', margin: '1rem 0' }}>
                                OR CONTINUE WITH
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button type="button" className="glass" style={{ flex: 1, padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'white', cursor: 'pointer' }}>
                                    <Github size={18} /> GitHub
                                </button>
                                <button type="button" className="glass" style={{ flex: 1, padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'white', cursor: 'pointer' }}>
                                    <img src="https://www.google.com/favicon.ico" alt="Google" style={{ width: '16px' }} /> Google
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
export default AuthModal;
