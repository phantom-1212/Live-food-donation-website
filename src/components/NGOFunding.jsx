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
        },
        {
            id: 4,
            title: "Clean Water Initiative",
            org: "PureFlow NGO",
            description: "Installing RO filtration systems in several community centres in Borabanda to ensure safe drinking water.",
            goal: 6500,
            raised: 3800,
            image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800",
            category: "Health & Hygiene"
        },
        {
            id: 5,
            title: "Elderly Care Home",
            org: "Graceful Aging",
            description: "Supporting daily medical expenses and nutritious meals for 40 abandoned seniors in Uppal.",
            goal: 9000,
            raised: 5200,
            image: "https://images.unsplash.com/photo-1581578731522-aa5508a54628?auto=format&fit=crop&q=80&w=800",
            category: "Senior Care"
        },
        {
            id: 6,
            title: "Animal Rescue Drive",
            org: "Paws & Care",
            description: "Rescue and medical rehabilitation of injured street animals in Gachibowli and Kondapur.",
            goal: 4000,
            raised: 1500,
            image: "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=800",
            category: "Animal Welfare"
        }
    ];

    return (
        <div className="ngo-funding-section">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <span className="glass" style={{ padding: '0.5rem 1.2rem', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'inline-block', fontWeight: 'bold' }}>
                    SUPPORT OUR COMMUNITIES
                </span>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '900' }}>Impactful <span className="gradient-text">Verified</span> Missions</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                    We partner with grassroot organizations to solve real-world problems. Your donation goes directly to the field, backed by 100% transparency.
                </p>
            </div>

            <div className="how-it-works glass-card" style={{ padding: '3rem', borderRadius: '40px', marginBottom: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', border: '1px solid rgba(var(--accent-primary-rgb), 0.1)' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ background: 'var(--accent-soft)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--accent-primary)' }}>
                        <ShieldCheck size={30} />
                    </div>
                    <h4 style={{ marginBottom: '0.8rem' }}>Verified Partners</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Every NGO is rigorously vetted for transparency and impact.</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ background: 'var(--accent-soft)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--accent-primary)' }}>
                        <TrendingUp size={30} />
                    </div>
                    <h4 style={{ marginBottom: '0.8rem' }}>Live Tracking</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Monitor progress and see exactly how your funds are being used.</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ background: 'var(--accent-soft)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--accent-primary)' }}>
                        <Heart size={30} />
                    </div>
                    <h4 style={{ marginBottom: '0.8rem' }}>Direct Impact</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>100% of your donation reaches the intended beneficiary.</p>
                </div>
            </div>

            <div className="missions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                {activeMissions.map((mission, index) => (
                    <motion.div
                        key={mission.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card mission-card"
                        style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}
                        whileHover={{ y: -10 }}
                    >
                        <div style={{ position: 'relative', height: '220px' }}>
                            <img src={mission.image} alt={mission.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '15px', right: '15px' }} className="glass">
                                <span style={{ padding: '6px 14px', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{mission.category}</span>
                            </div>
                        </div>

                        <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.8rem' }}>
                                <h3 style={{ fontSize: '1.6rem', lineHeight: '1.2' }}>{mission.title}</h3>
                                <ShieldCheck size={24} color="var(--accent-primary)" />
                            </div>
                            <p style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', marginBottom: '1.2rem', fontWeight: '700' }}>by {mission.org}</p>
                            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>{mission.description}</p>

                            <div style={{ marginTop: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Funding Progress</span>
                                    <span style={{ fontWeight: '800', color: 'var(--accent-primary)' }}>{Math.round((mission.raised / mission.goal) * 100)}%</span>
                                </div>
                                <div style={{ height: '12px', background: '#f0f0f0', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(mission.raised / mission.goal) * 100}%` }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-primary), #4ade80)' }}
                                    />
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Collected</div>
                                        <div style={{ fontSize: '1.3rem', fontWeight: '900' }}>${mission.raised.toLocaleString()}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Target</div>
                                        <div style={{ fontSize: '1.3rem', fontWeight: '900', opacity: 0.5 }}>${mission.goal.toLocaleString()}</div>
                                    </div>
                                </div>

                                <button className="btn btn-primary" onClick={onDonate} style={{ width: '100%', padding: '1.2rem', fontSize: '1rem', fontWeight: '700', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', boxShadow: '0 10px 20px rgba(var(--accent-primary-rgb), 0.2)' }}>
                                    <Heart size={20} fill="currentColor" /> Support This Cause
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="funding-impact" style={{
                marginTop: '8rem',
                padding: '5rem 3rem',
                borderRadius: '50px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '4rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, var(--bg-dark) 0%, #1a1a1a 100%)',
                color: 'white',
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
            }}>
                <div className="impact-stat">
                    <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--accent-primary)', marginBottom: '0.8rem', textShadow: '0 0 20px rgba(var(--accent-primary-rgb), 0.3)' }}>$450K+</div>
                    <div style={{ opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Total Funds Raised</div>
                </div>
                <div className="impact-stat">
                    <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--accent-primary)', marginBottom: '0.8rem', textShadow: '0 0 20px rgba(var(--accent-primary-rgb), 0.3)' }}>150+</div>
                    <div style={{ opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Verified NGOs</div>
                </div>
                <div className="impact-stat">
                    <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--accent-primary)', marginBottom: '0.8rem', textShadow: '0 0 20px rgba(var(--accent-primary-rgb), 0.3)' }}>25K+</div>
                    <div style={{ opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Lives Impacted</div>
                </div>
                <div className="impact-stat">
                    <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--accent-primary)', marginBottom: '0.8rem', textShadow: '0 0 20px rgba(var(--accent-primary-rgb), 0.3)' }}>100%</div>
                    <div style={{ opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Transparency</div>
                </div>
            </div>
        </div>
    );
};

export default NGOFunding;
