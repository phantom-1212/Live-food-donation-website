import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Heart } from 'lucide-react';

const VolunteerSection = ({ onJoin }) => {
    return (
        <section className="volunteer-section" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div
                    className="glass-card dark-section"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        padding: '4rem',
                        background: 'var(--bg-dark)',
                        color: 'white',
                        alignItems: 'center'
                    }}
                >
                    <div>
                        <h2 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '2rem' }}>
                            Your <span style={{ color: 'var(--accent-primary)' }}>Hands</span>,<br />
                            Their <span style={{ color: 'var(--accent-secondary)' }}>Hope</span>.
                        </h2>
                        <p style={{ opacity: 0.8, marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                            Donating food is one way to help, but your time is equally valuable. Join our network of 5,000+ volunteers and help distribute meals, organize drives, and reach those in need.
                        </p>

                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-primary)' }}>5.2k</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Active Volunteers</div>
                            </div>
                            <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                                <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-secondary)' }}>120+</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Weekly Events</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '3rem', borderRadius: '24px' }}>
                        <h3 style={{ marginBottom: '2rem' }}>Become a Volunteer</h3>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="form-group">
                                <label style={{ color: 'rgba(255,255,255,0.7)' }}>Full Name</label>
                                <input type="text" placeholder="Alex Johnson" />
                            </div>
                            <div className="form-group">
                                <label style={{ color: 'rgba(255,255,255,0.7)' }}>Email</label>
                                <input type="email" placeholder="alex@example.com" />
                            </div>
                            <div className="form-group">
                                <label style={{ color: 'rgba(255,255,255,0.7)' }}>Availability</label>
                                <select>
                                    <option>Weekends</option>
                                    <option>Weekdays</option>
                                    <option>Remote/Phone</option>
                                </select>
                            </div>
                            <button className="btn btn-primary" onClick={onJoin} style={{ width: '100%' }}>Proceed to Registration</button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default VolunteerSection;
