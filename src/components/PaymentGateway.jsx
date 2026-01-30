import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CreditCard, Smartphone, Building, ArrowLeft, ShieldCheck } from 'lucide-react';

const PaymentGateway = ({ isOpen, onClose, formData, onComplete }) => {
    const [method, setMethod] = useState('upi');
    const [isProcessing, setIsProcessing] = useState(false);

    if (!isOpen) return null;

    const handlePay = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            onComplete();
        }, 2000);
    };

    return (
        <div
            className="modal-backdrop"
            style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(0,0,0,0.85)', zIndex: 3000,
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    width: '100%', maxWidth: '500px', background: 'white', borderRadius: '20px',
                    overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
            >
                {/* Header */}
                <div style={{ background: '#1e293b', color: 'white', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase' }}>Amount to Pay</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>₹ 2,500.00</div>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><X size={24} /></button>
                </div>

                <div style={{ padding: '2rem' }}>
                    <h4 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Select Payment Method</h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                        {[
                            { id: 'upi', label: 'UPI (Google Pay, PhonePe, Bhim)', icon: <Smartphone color="#2ecc71" /> },
                            { id: 'card', label: 'Debit / Credit Card', icon: <CreditCard color="#3498db" /> },
                            { id: 'net', label: 'Net Banking', icon: <Building color="#e67e22" /> }
                        ].map(m => (
                            <div
                                key={m.id}
                                onClick={() => setMethod(m.id)}
                                style={{
                                    padding: '1.2rem', borderRadius: '12px', border: `2px solid ${method === m.id ? '#2ecc71' : '#f1f5f9'}`,
                                    background: method === m.id ? '#f0fdf4' : 'white', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'all 0.2s'
                                }}
                            >
                                <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '10px' }}>{m.icon}</div>
                                <span style={{ fontWeight: '600', color: '#1e293b' }}>{m.label}</span>
                            </div>
                        ))}
                    </div>

                    {method === 'upi' && (
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: '#64748b' }}>Enter UPI ID</label>
                            <input type="text" placeholder="example@okhdfc" style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #cbd5e1' }} />
                        </div>
                    )}

                    {method === 'card' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: '#64748b' }}>Card Number</label>
                                <input type="text" placeholder="XXXX XXXX XXXX XXXX" style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #cbd5e1' }} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                <input type="text" placeholder="MM/YY" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #cbd5e1' }} />
                                <input type="password" placeholder="CVV" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #cbd5e1' }} />
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handlePay}
                        disabled={isProcessing}
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', background: '#1e293b', position: 'relative' }}
                    >
                        {isProcessing ? 'Processing Transaction...' : 'Pay ₹ 2,500.00'}
                    </button>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.8rem', opacity: 0.6 }}>
                        <ShieldCheck size={16} />
                        Powered by SecurePay Gateway
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default PaymentGateway;
