import React from 'react';
import { motion } from 'framer-motion';
import { Heart, DollarSign, TrendingUp, ShieldCheck } from 'lucide-react';

const NGOFunding = ({ onDonate }) => {
    const activeMissions = [
        {
            id: 1,
            title: "Winter Care Drive",
            org: "Warm Hearts Foundation",
            description: "Providing blankets and warm meals to street dwellers in Old City during the harsh winter months.",
            goal: 5000,
            raised: 4200,
            image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800",
            category: "Emergency Relief"
        },
        {
            id: 2,
            title: "Back to School",
            org: "EduBright NGO",
            description: "Sponsoring education for underprivileged children in Madhapur including books and uniforms.",
            goal: 12000,
            raised: 6500,
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
            category: "Education"
        },
        {
            id: 3,
            title: "Community Kitchen",
            org: "Unity Meals",
            description: "Maintaining a daily kitchen that feeds over 500 people in the Secunderabad area.",
            goal: 8000,
            raised: 7100,
            image: "https://images.unsplash.com/photo-1488459711635-0c8a2455e69b?auto=format&fit=crop&q=80&w=800",
            category: "Food Security"
        }
    ];

    return (
        <div className="ngo-funding-section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span className="glass" style={{ padding: '0.5rem 1.2rem', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'inline-block' }}>
                    NGO FUNDING
                </span>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Support <span className="gradient-text">Verified</span> Missions</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                    Join hands with organizations that are making a real difference on the ground in Hyderabad. Your contribution goes directly to the causes you care about most.
                </p>
            </div>

            <div className="missions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                {activeMissions.map((mission, index) => (
                    <motion.div
                        key={mission.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card mission-card"
                        style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ position: 'relative', height: '200px' }}>
                            <img src={mission.image} alt={mission.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '15px', right: '15px' }} className="glass">
                                <span style={{ padding: '5px 12px', fontSize: '0.75rem', fontWeight: 'bold' }}>{mission.category}</span>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>{mission.title}</h3>
                                <ShieldCheck size={20} color="var(--accent-primary)" />
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: '600' }}>by {mission.org}</p>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>{mission.description}</p>

                            <div style={{ marginTop: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--text-muted)' }}>Progress</span>
                                    <span style={{ fontWeight: 'bold' }}>{Math.round((mission.raised / mission.goal) * 100)}%</span>
                                </div>
                                <div style={{ height: '10px', background: '#f0f0f0', borderRadius: '10px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(mission.raised / mission.goal) * 100}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        style={{ height: '100%', background: 'var(--accent-primary)' }}
                                    />
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Raised</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>${mission.raised.toLocaleString()}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Goal</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>${mission.goal.toLocaleString()}</div>
                                    </div>
                                </div>

                                <button className="btn btn-primary" onClick={onDonate} style={{ width: '100%', marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                    <Heart size={18} /> Support Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="funding-impact" style={{
                marginTop: '6rem',
                padding: '4rem',
                borderRadius: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '3rem',
                textAlign: 'center',
                background: 'var(--bg-dark)',
                color: 'white'
            }}>
                <div className="impact-stat">
                    <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>$450K+</div>
                    <div style={{ opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Funds Raised</div>
                </div>
                <div className="impact-stat">
                    <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>150+</div>
                    <div style={{ opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Verified NGOs</div>
                </div>
                <div className="impact-stat">
                    <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>25K+</div>
                    <div style={{ opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Lives Impacted</div>
                </div>
                <div className="impact-stat">
                    <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>100%</div>
                    <div style={{ opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Transparency</div>
                </div>
            </div>
        </div>
    );
};

export default NGOFunding;
