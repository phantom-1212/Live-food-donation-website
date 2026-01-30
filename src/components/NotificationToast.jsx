import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Heart, Users, MapPin, X } from 'lucide-react';

const NotificationToast = () => {
    const [notifications, setNotifications] = useState([]);

    const mockAlerts = [
        { id: 1, type: 'donation', message: 'New food donation in Queens!', icon: <Heart size={16} /> },
        { id: 2, type: 'pickup', message: 'Green Valley NGO picked up 50kg rice.', icon: <MapPin size={16} /> },
        { id: 3, type: 'funding', message: '"Winter Care" mission reached 90%!', icon: <Bell size={16} /> },
        { id: 4, type: 'user', message: 'User "Alex" just joined the community.', icon: <Users size={16} /> }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomAlert = mockAlerts[Math.floor(Math.random() * mockAlerts.length)];
            const id = Date.now();
            setNotifications(prev => [{ ...randomAlert, id }, ...prev].slice(0, 3));

            setTimeout(() => {
                setNotifications(prev => prev.filter(n => n.id !== id));
            }, 5000);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            zIndex: 3000,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            pointerEvents: 'none'
        }}>
            <AnimatePresence>
                {notifications.map((n) => (
                    <motion.div
                        key={n.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="glass"
                        style={{
                            padding: '12px 20px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            minWidth: '280px',
                            pointerEvents: 'auto',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            background: 'rgba(15, 12, 41, 0.9)'
                        }}
                    >
                        <div style={{
                            background: 'var(--accent-primary)',
                            color: '#0f0c29',
                            padding: '8px',
                            borderRadius: '10px',
                            display: 'flex'
                        }}>
                            {n.icon}
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{n.message}</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Just now</div>
                        </div>
                        <button
                            onClick={() => removeNotification(n.id)}
                            style={{ background: 'transparent', border: 'none', color: '#444', cursor: 'pointer' }}
                        >
                            <X size={14} />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default NotificationToast;
