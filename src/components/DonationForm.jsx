import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Info, CheckCircle } from 'lucide-react';

const DonationForm = ({ isOpen, onClose, onShowPayment }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        citizenship: 'Indian Citizen',
        donationType: 'Donate Once',
        title: 'Mr',
        fullName: '',
        email: '',
        dob: '',
        mobile: '',
        whatsappUpdates: true,
        receive80G: false,
        agreement: true
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onShowPayment(formData);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            className="modal-backdrop"
            onClick={handleBackdropClick}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.7)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="glass-card"
                style={{
                    width: '100%',
                    maxWidth: '850px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    padding: '0',
                    background: '#f8fafc',
                    color: '#334155',
                    borderRadius: '16px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
            >
                {/* Header Section */}
                <div style={{ background: '#fff', padding: '1.5rem 2rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '10px', height: '10px', background: '#2ecc71', borderRadius: '50%' }}></div>
                        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '700', color: '#1e293b' }}>Donation Registration</h3>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}><X size={24} /></button>
                </div>

                <div style={{ padding: '2rem' }}>
                    {/* Donation Summary */}
                    <div style={{ background: '#ecfdf5', border: '1px dashed #10b981', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', textAlign: 'center' }}>
                        <span style={{ color: '#047857', fontWeight: '600' }}>❤️ You wish to contribute to a better world.</span>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                        {/* Donor Details Section */}
                        <section>
                            <h4 style={{ background: '#f1f5f9', padding: '0.6rem 1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1.5rem', fontWeight: 'bold' }}>Donor Info</h4>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Select Your Citizenship</label>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {['Indian Citizen', 'Indian Citizen (NRE, NRI, NRO)', 'Foreign National'].map(type => (
                                        <label key={type} className={`pill-radio ${formData.citizenship === type ? 'active' : ''}`} style={{
                                            padding: '10px 20px', borderRadius: '50px', border: '1px solid #cbd5e1', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '500', transition: 'all 0.2s',
                                            background: formData.citizenship === type ? '#2ecc71' : 'white',
                                            color: formData.citizenship === type ? 'white' : '#64748b',
                                            borderColor: formData.citizenship === type ? '#2ecc71' : '#cbd5e1'
                                        }}>
                                            <input type="radio" name="citizenship" value={type} checked={formData.citizenship === type}
                                                onChange={(e) => setFormData({ ...formData, citizenship: e.target.value })}
                                                style={{ display: 'none' }} />
                                            {type}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Select Donation Type</label>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    {['Donate Once', 'Donate Monthly'].map(type => (
                                        <label key={type} style={{
                                            padding: '10px 25px', borderRadius: '50px', border: '1px solid #cbd5e1', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '500', transition: 'all 0.2s',
                                            background: formData.donationType === type ? '#2ecc71' : 'white',
                                            color: formData.donationType === type ? 'white' : '#64748b',
                                            borderColor: formData.donationType === type ? '#2ecc71' : '#cbd5e1'
                                        }}>
                                            <input type="radio" name="donationType" value={type} checked={formData.donationType === type}
                                                onChange={(e) => setFormData({ ...formData, donationType: e.target.value })}
                                                style={{ display: 'none' }} />
                                            {type}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Personal Details Section */}
                        <section>
                            <h4 style={{ background: '#f1f5f9', padding: '0.6rem 1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1.5rem', fontWeight: 'bold' }}>Personal Details</h4>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div className="form-group">
                                    <label style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>Title</label>
                                    <select style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white' }}
                                        value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })}>
                                        <option>Mr</option><option>Mrs</option><option>Ms</option><option>Dr</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>Full Name</label>
                                    <input type="text" placeholder="Enter Full Name" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                                        value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div className="form-group">
                                    <label style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>Email ID</label>
                                    <input type="email" placeholder="email@example.com" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>Date of Birth</label>
                                    <input type="date" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                                        value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>Mobile No.</label>
                                <input type="tel" placeholder="WhatsApp Mobile Number" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                                    value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#64748b', cursor: 'pointer' }}>
                                    <input type="checkbox" checked={formData.receive80G} onChange={(e) => setFormData({ ...formData, receive80G: e.target.checked })} />
                                    I would like to receive 80(G) Tax Saving Certificate
                                </label>
                            </div>
                        </section>

                        {/* Footer Section */}
                        <div style={{ borderTop: '1px solid #e2e8f0', padding: '2rem 0', textAlign: 'center' }}>
                            <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '0.9rem', color: '#475569' }}>Captcha: <strong>3 + 7 = </strong></span>
                                <input type="number" placeholder="?" style={{ width: '50px', padding: '0.4rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ fontSize: '0.85rem', color: '#64748b', cursor: 'pointer' }}>
                                    <input type="checkbox" checked={formData.agreement} onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })} required />
                                    I have read through the website's <span style={{ color: '#2ecc71', fontWeight: '600' }}>Privacy Policy</span> & <span style={{ color: '#2ecc71', fontWeight: '600' }}>Terms and Conditions</span>
                                </label>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                                <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.1rem', background: '#22c55e' }}>
                                    Donate Now
                                </button>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', opacity: 0.7, fontSize: '0.8rem' }}>
                                    <ShieldCheck size={16} color="#475569" />
                                    <span>Secured by SSL 256-bit Encryption</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default DonationForm;
