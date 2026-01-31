import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Home, Map as MapIcon, Gift, DollarSign, Users, Award, Menu, X, ChevronRight } from 'lucide-react';
import MapComponent from './components/MapComponent';
import CharityPortal from './components/CharityPortal';
import NGOFunding from './components/NGOFunding';
import AuthModal from './components/AuthModal';
import NotificationToast from './components/NotificationToast';
import SuccessStories from './components/SuccessStories';
import VolunteerSection from './components/VolunteerSection';
import ImpactDashboard from './components/ImpactDashboard';

import DonationForm from './components/DonationForm';
import PaymentGateway from './components/PaymentGateway';
import { saveDonation } from './utils/api';

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDonationFormOpen, setIsDonationFormOpen] = useState(false);
    const [isPaymentGatewayOpen, setIsPaymentGatewayOpen] = useState(false);
    const [donorData, setDonorData] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Load user from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleStartDonation = () => {
        setIsDonationFormOpen(true);
    };

    const handleShowPayment = (data) => {
        setDonorData(data);
        setIsDonationFormOpen(false);
        setIsPaymentGatewayOpen(true);
    };

    const handlePaymentComplete = async () => {
        try {
            await saveDonation(donorData);
            setIsPaymentGatewayOpen(false);
            alert("Thank you for your generous donation! A receipt and 80G certificate (if requested) will be sent to your email.");
        } catch (error) {
            alert("There was an error saving your donation. Please try again.");
        }
    };

    const handleAuthSuccess = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <div className="app-wrapper">
            <nav className={scrolled ? 'scrolled' : ''}>

                <div className="nav-container">
                    <div className="logo" style={{ color: scrolled ? 'var(--accent-primary)' : 'white', fontSize: '1.8rem', fontWeight: '900' }}>
                        GIVE<span style={{ color: scrolled ? 'var(--text-main)' : 'rgba(255,255,255,0.7)' }}>&GROW</span>
                    </div>

                    <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
                        <li><a href="#hero" style={{ color: scrolled ? 'var(--text-main)' : 'white' }} onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                        <li><a href="#dashboard" style={{ color: scrolled ? 'var(--text-main)' : 'white' }} onClick={() => setIsMobileMenuOpen(false)}>Impact Map</a></li>
                        <li><a href="#charity" style={{ color: scrolled ? 'var(--text-main)' : 'white' }} onClick={() => setIsMobileMenuOpen(false)}>Donate</a></li>
                        <li><a href="#funding" style={{ color: scrolled ? 'var(--text-main)' : 'white' }} onClick={() => setIsMobileMenuOpen(false)}>NGO Missions</a></li>
                        <li><a href="#admin-dashboard" style={{ color: scrolled ? 'var(--text-main)' : 'white' }} onClick={() => setIsMobileMenuOpen(false)}>Impact Log</a></li>
                    </ul>

                    <div className="nav-actions">
                        {user ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: scrolled ? 'var(--text-main)' : 'white', fontWeight: '600' }}>Hi, {user.fullName.split(' ')[0]}</span>
                                <button className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }} onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <button className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.8rem' }} onClick={() => setIsAuthModalOpen(true)}>Join the Cause</button>
                        )}
                        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} style={{ color: scrolled ? 'var(--text-main)' : 'white' }}>
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} onAuthSuccess={handleAuthSuccess} />
            <DonationForm isOpen={isDonationFormOpen} onClose={() => setIsDonationFormOpen(false)} onShowPayment={handleShowPayment} />
            <PaymentGateway isOpen={isPaymentGatewayOpen} onClose={() => setIsPaymentGatewayOpen(false)} formData={donorData} onComplete={handlePaymentComplete} />
            <NotificationToast />

            <section id="hero" className="hero" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000')` }}>
                <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-content"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '50px', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: '600' }}
                        >
                            ❤️ Trusted by 500+ Community Partners
                        </motion.div>
                        <h1>Fighting Hunger in <br /><span style={{ color: 'var(--accent-primary)' }}>Hyderabad with Love.</span></h1>
                        <p>Join our decentralized network of kindness in the City of Pearls. Track live donations, fund verified NGO missions, and help us clothe the world.</p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <button className="btn btn-primary" onClick={() => document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' })}>
                                Start Giving Today <ChevronRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                            </button>
                            <button className="btn btn-outline" onClick={handleStartDonation}>Donate Personally</button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <SuccessStories />

            <section id="dashboard" className="container" style={{ padding: '8rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hyderabad <span className="gradient-text">Impact Map</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Real-time food donors and urgent needs across major Hyderabad hubs.</p>
                </div>

                <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                    <div className="glass-card" style={{ padding: '0', height: '600px', overflow: 'hidden', position: 'relative' }}>
                        <MapComponent onDonate={handleStartDonation} />
                    </div>

                    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>City Reach Summary</h3>
                        {/* ... stats */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass" style={{ padding: '1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ background: 'var(--accent-soft)', padding: '15px', borderRadius: '15px', color: 'var(--accent-primary)' }}><Gift size={28} /></div>
                                <div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>2,140</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Meals Shared in Hyderabad</div>
                                </div>
                            </div>
                            <div className="glass" style={{ padding: '1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ background: '#fff5eb', padding: '15px', borderRadius: '15px', color: 'var(--accent-secondary)' }}><Users size={28} /></div>
                                <div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>1,250</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Local Volunteers Active</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="charity" style={{ padding: '8rem 0', background: 'var(--accent-soft)' }}>
                <div className="container">
                    <CharityPortal onDirectDonate={handleStartDonation} />
                </div>
            </section>

            <section id="funding" className="container" style={{ padding: '8rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hyderabad <span className="gradient-text">NGO Missions</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>Directly support organizations working in Jubilee Hills, Old City, and beyond.</p>
                </div>
                <NGOFunding onDonate={handleStartDonation} />
            </section>

            <VolunteerSection onJoin={handleStartDonation} />
            <ImpactDashboard />
            {/* ... footer */}

            <footer style={{ padding: '6rem 0', background: 'var(--bg-dark)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
                        <div>
                            <div className="logo" style={{ color: 'var(--accent-primary)', fontSize: '1.8rem', fontWeight: '900', marginBottom: '1.5rem' }}>
                                GIVE<span style={{ color: 'white' }}>&GROW</span>
                            </div>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>A decentralized platform connecting hearts and hands. Together, we can ensure no one goes to bed hungry.</p>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1.5rem' }}>Platform</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.6, fontSize: '0.9rem' }}>
                                <li><a href="#hero" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                                <li><a href="#dashboard" style={{ color: 'white', textDecoration: 'none' }}>Live Map</a></li>
                                <li><a href="#charity" style={{ color: 'white', textDecoration: 'none' }}>Donate Content</a></li>
                                <li><a href="#funding" style={{ color: 'white', textDecoration: 'none' }}>NGO Portal</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1.5rem' }}>Community</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.6, fontSize: '0.9rem' }}>
                                <li>Volunteers</li>
                                <li>Partner NGOs</li>
                                <li>Success Stories</li>
                                <li>Safe Giving Guide</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1.5rem' }}>Legal</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.6, fontSize: '0.9rem' }}>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ pt: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem' }}>
                        © 2026 Give & Grow Platform. All Rights Reserved. Built with heart for the community.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
