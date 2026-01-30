import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Box, Heart, DollarSign, Book, Shield } from 'lucide-react';

const CharityPortal = ({ onDirectDonate }) => {
    const [activeTab, setActiveTab] = useState('food');

    const ngos = [
        { id: 1, name: "Hands for Humanity", cause: "Nutrition for kids in Old City", goal: 5000, raised: 3200 },
        { id: 2, name: "Green Earth Relief", cause: "Reforestation & community farming", goal: 10000, raised: 4500 },
        { id: 3, name: "City Care foundation", cause: "Daily meals for laborers in HITEC", goal: 8000, raised: 7100 },
    ];

    return (
        <div className="charity-portal">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem' }}>Ways to <span className="gradient-text">Help</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>Choose how you'd like to make an impact today. Every small act counts towards a brighter future.</p>
            </div>

            <div className="tabs glass" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '10px', borderRadius: '50px', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
                <div
                    className={`tab ${activeTab === 'food' ? 'active' : ''}`}
                    onClick={() => setActiveTab('food')}
                >
                    <Box size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Food
                </div>
                <div
                    className={`tab ${activeTab === 'clothes' ? 'active' : ''}`}
                    onClick={() => setActiveTab('clothes')}
                >
                    <ShoppingBag size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Clothes
                </div>
                <div
                    className={`tab ${activeTab === 'funding' ? 'active' : ''}`}
                    onClick={() => setActiveTab('funding')}
                >
                    <Heart size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Pay Donation
                </div>
            </div>

            <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card"
                style={{ padding: '4rem' }}
            >
                {activeTab === 'food' && (
                    <div className="donation-form">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ background: 'var(--accent-soft)', padding: '12px', borderRadius: '12px', color: 'var(--accent-primary)' }}><Box size={24} /></div>
                            <h3 style={{ fontSize: '1.8rem' }}>Share a Meal</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div className="form-group">
                                <label>Food Item Description</label>
                                <input type="text" placeholder="e.g. 10 Lunch Packets, 20kg Rice" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee' }} />
                            </div>
                            <div className="form-group">
                                <label>Food Category</label>
                                <select style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee' }}>
                                    <option>Perishable (Ready to eat)</option>
                                    <option>Non-Perishable (Grains, Canned)</option>
                                    <option>Fresh Produce (Fruits, Veggies)</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={onDirectDonate} style={{ marginTop: '2rem', width: '100%' }}>Proceed to Personal Details</button>
                    </div>
                )}

                {activeTab === 'clothes' && (
                    <div className="donation-form">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#fff4e6', padding: '12px', borderRadius: '12px', color: 'var(--accent-secondary)' }}><ShoppingBag size={24} /></div>
                            <h3 style={{ fontSize: '1.8rem' }}>Donate Clothes</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div className="form-group">
                                <label>Clothing Types</label>
                                <input type="text" placeholder="e.g. Winter Jackets, Baby Clothes" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee' }} />
                            </div>
                            <div className="form-group">
                                <label>Condition</label>
                                <select style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee' }}>
                                    <option>New / Unused</option>
                                    <option>Gently Used</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={onDirectDonate} style={{ marginTop: '2rem', width: '100%', background: 'var(--accent-secondary)' }}>Proceed to Personal Details</button>
                    </div>
                )}

                {activeTab === 'funding' && (
                    <div className="funding-portal">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                            <div style={{ background: 'var(--accent-soft)', padding: '12px', borderRadius: '12px', color: 'var(--accent-primary)' }}><DollarSign size={24} /></div>
                            <h3 style={{ fontSize: '1.8rem' }}>Active NGO Missions</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {ngos.map(ngo => (
                                <div key={ngo.id} className="glass" style={{ padding: '2rem', borderRadius: '24px', border: '1px solid #f0f0f0' }}>
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{ngo.name}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>{ngo.cause}</p>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>
                                            <span>Goal Progress</span>
                                            <span>{Math.round((ngo.raised / ngo.goal) * 100)}%</span>
                                        </div>
                                        <div style={{ height: '10px', background: '#f0f0f0', borderRadius: '10px', overflow: 'hidden' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(ngo.raised / ngo.goal) * 100}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                style={{ height: '100%', background: 'var(--accent-primary)' }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ fontSize: '1.1rem', fontWeight: '800' }}>${ngo.raised.toLocaleString()} <span style={{ fontSize: '0.8rem', fontWeight: '400', color: 'var(--text-muted)' }}>of ${ngo.goal.toLocaleString()}</span></div>
                                        <button className="btn btn-primary" onClick={onDirectDonate} style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem' }}>Direct Pay</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default CharityPortal;
