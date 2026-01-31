import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, DollarSign, TrendingUp, ShieldCheck, Search, Filter, HelpCircle, ChevronDown } from 'lucide-react';

const NGOFunding = ({ onDonate }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [activeFaq, setActiveFaq] = React.useState(null);

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
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
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
            image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800",
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

    const categories = ['All', 'Emergency Relief', 'Education', 'Food Security', 'Health & Hygiene', 'Senior Care', 'Animal Welfare'];

    const filteredMissions = activeMissions.filter(m =>
        (selectedCategory === 'All' || m.category === selectedCategory) &&
        (m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.org.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const faqs = [
        { q: "Is my donation tax-deductible?", a: "Yes, all verified NGOs provide 80G certificates for tax exemption in India." },
        { q: "How do you verify these NGOs?", a: "We perform a 4-step audit including field visits, financial history checks, and legal compliance audits." },
        { q: "Can I donate anonymously?", a: "Yes, you can choose to hide your name on the public donor hall of fame during payment." }
    ];

    return (
        <div className="ngo-funding-section">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <span className="glass" style={{ padding: '0.5rem 1.2rem', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'inline-block', fontWeight: 'bold' }}>
                    HYDERABAD LOCAL IMPACT
                </span>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '900' }}>Hyderabad <span className="gradient-text">NGO Missions</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                    Connect with grassroot organizations working in your neighborhood. Every rupee is tracked and audited for maximum impact.
                </p>
            </div>

            <div className="missions-filter glass-card" style={{ padding: '1.5rem', borderRadius: '24px', marginBottom: '4rem', display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
                    <Search style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                    <input
                        type="text"
                        placeholder="Search by mission or NGO name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '14px', border: '1px solid #eee', fontSize: '1rem' }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto', padding: '5px' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                padding: '0.8rem 1.2rem',
                                borderRadius: '12px',
                                border: '1px solid',
                                borderColor: selectedCategory === cat ? 'var(--accent-primary)' : '#eee',
                                background: selectedCategory === cat ? 'var(--accent-soft)' : 'white',
                                color: selectedCategory === cat ? 'var(--accent-primary)' : 'var(--text-muted)',
                                whiteSpace: 'nowrap',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="transparency-banner glass-card" style={{
                padding: '3rem',
                borderRadius: '40px',
                marginBottom: '5rem',
                background: 'linear-gradient(90deg, rgba(var(--accent-primary-rgb), 0.05) 0%, transparent 100%)',
                border: '1px solid rgba(var(--accent-primary-rgb), 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '3rem',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Transparency <span style={{ color: 'var(--accent-primary)' }}>Protocol</span></h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>We ensure every rupee reaches its destination through our 3-step verification process. From on-ground audits to digital receipts, we keep your kindness accountable.</p>
                </div>
                <div style={{ display: 'flex', gap: '2rem', flex: '1', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><ShieldCheck size={32} /></div>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Verified 80G</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><TrendingUp size={32} /></div>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Real-time Audit</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}><DollarSign size={32} /></div>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Zero Commission</div>
                    </div>
                </div>
            </div>

            <div className="missions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                <AnimatePresence mode='popLayout'>
                    {filteredMissions.map((mission, index) => (
                        <motion.div
                            layout
                            key={mission.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card mission-card"
                            style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
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
                </AnimatePresence>
            </div>

            <div className="faq-section" style={{ marginTop: '8rem', maxWidth: '900px', margin: '8rem auto 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <HelpCircle size={40} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '2.5rem' }}>Common <span className="gradient-text">Questions</span></h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="glass" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                            <button
                                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                style={{ width: '100%', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                            >
                                <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{faq.q}</span>
                                <ChevronDown style={{ transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                            </button>
                            {activeFaq === idx && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    style={{ padding: '0 2rem 2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}
                                >
                                    {faq.a}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
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
