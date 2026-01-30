import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Download, Trash2, RefreshCcw, Search, Table, Grid } from 'lucide-react';
import { getDonations, clearDonations } from '../utils/storage';

const ImpactDashboard = () => {
    const [donations, setDonations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [view, setView] = useState('table'); // 'table' or 'grid'

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setDonations(getDonations());
    };

    const handleClear = () => {
        if (window.confirm('Are you sure you want to clear all donation history? This cannot be undone.')) {
            clearDonations();
            loadData();
        }
    };

    const filteredDonations = donations.filter(d =>
        d.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.citizenship?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="admin-dashboard" style={{ padding: '8rem 0', background: '#f8fafc' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-primary)', marginBottom: '10px' }}>
                            <Database size={20} />
                            <span style={{ fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Local Impact Database</span>
                        </div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Transparency <span className="gradient-text">Log</span></h2>
                        <p style={{ color: 'var(--text-muted)' }}>Real-time view of verified contributions stored in your secure local session.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={loadData} className="btn" style={{ padding: '0.8rem', borderRadius: '12px', background: 'white', border: '1px solid #e2e8f0' }}>
                            <RefreshCcw size={18} />
                        </button>
                        <button onClick={handleClear} className="btn" style={{ padding: '0.8rem 1.5rem', borderRadius: '12px', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Trash2 size={18} /> Clear Data
                        </button>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '2rem', background: 'white', borderRadius: '24px' }}>
                    {/* Controls */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', gap: '2rem' }}>
                        <div style={{ position: 'relative', flex: 1 }}>
                            <Search size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                            <input
                                type="text"
                                placeholder="Search by name, email or citizenship..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ paddingLeft: '45px', background: '#f1f5f9', border: 'none' }}
                            />
                        </div>
                        <div style={{ display: 'flex', background: '#f1f5f9', padding: '5px', borderRadius: '12px' }}>
                            <button
                                onClick={() => setView('table')}
                                style={{ padding: '8px 15px', borderRadius: '8px', border: 'none', background: view === 'table' ? 'white' : 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: view === 'table' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}
                            >
                                <Table size={16} /> Table
                            </button>
                            <button
                                onClick={() => setView('grid')}
                                style={{ padding: '8px 15px', borderRadius: '8px', border: 'none', background: view === 'grid' ? 'white' : 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: view === 'grid' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}
                            >
                                <Grid size={16} /> Grid
                            </button>
                        </div>
                    </div>

                    {filteredDonations.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '5rem 0', color: '#94a3b8' }}>
                            <Database size={48} style={{ marginBottom: '1.5rem', opacity: 0.3 }} />
                            <p>No donation records found in this session yet.</p>
                        </div>
                    ) : (
                        <div style={{ overflowX: 'auto' }}>
                            {view === 'table' ? (
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                                            <th style={{ padding: '1.5rem', color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase' }}>Donor</th>
                                            <th style={{ padding: '1.5rem', color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase' }}>Contact</th>
                                            <th style={{ padding: '1.5rem', color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase' }}>Citizenship</th>
                                            <th style={{ padding: '1.5rem', color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase' }}>Date</th>
                                            <th style={{ padding: '1.5rem', color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase' }}>Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <AnimatePresence>
                                            {filteredDonations.map((donation) => (
                                                <motion.tr
                                                    key={donation.id}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    style={{ borderBottom: '1px solid #f1f5f9' }}
                                                >
                                                    <td style={{ padding: '1.5rem' }}>
                                                        <div style={{ fontWeight: '700', color: '#1e293b' }}>{donation.title}. {donation.fullName}</div>
                                                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>ID: {donation.id}</div>
                                                    </td>
                                                    <td style={{ padding: '1.5rem' }}>
                                                        <div style={{ fontSize: '0.9rem' }}>{donation.email}</div>
                                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{donation.mobile}</div>
                                                    </td>
                                                    <td style={{ padding: '1.5rem' }}>
                                                        <span style={{ padding: '4px 10px', borderRadius: '50px', background: '#f1f5f9', fontSize: '0.8rem' }}>{donation.citizenship}</span>
                                                    </td>
                                                    <td style={{ padding: '1.5rem', fontSize: '0.9rem', color: '#64748b' }}>
                                                        {new Date(donation.timestamp).toLocaleDateString()}
                                                    </td>
                                                    <td style={{ padding: '1.5rem' }}>
                                                        <div style={{ color: donation.donationType === 'Donate Monthly' ? 'var(--accent-secondary)' : 'var(--accent-primary)', fontWeight: '600', fontSize: '0.85rem' }}>
                                                            {donation.donationType}
                                                        </div>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </AnimatePresence>
                                    </tbody>
                                </table>
                            ) : (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                                    {filteredDonations.map((donation) => (
                                        <motion.div
                                            key={donation.id}
                                            layout
                                            style={{ padding: '1.5rem', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0' }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                                <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{donation.fullName}</div>
                                                <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>#{donation.id.toString().slice(-6)}</span>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                                    <span style={{ color: '#64748b' }}>Email:</span>
                                                    <span>{donation.email}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                                    <span style={{ color: '#64748b' }}>Type:</span>
                                                    <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>{donation.donationType}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                                    <span style={{ color: '#64748b' }}>Date:</span>
                                                    <span>{new Date(donation.timestamp).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
                    ⚠️ This data is only visible to you. Local Storage is not shared across devices.
                </div>
            </div>
        </section>
    );
};

export default ImpactDashboard;
