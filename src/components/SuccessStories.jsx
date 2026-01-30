import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const SuccessStories = () => {
    const stories = [
        {
            id: 1,
            title: "500 Meals at Westside",
            description: "Thanks to our local community kitchen, we served 500 hot meals to families in need this weekend.",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400",
            author: "Sarah J., Volunteer"
        },
        {
            id: 2,
            title: "Winter Care Success",
            description: "Our clothing drive collected over 200 jackets, ensuring everyone stayed warm durante the cold snap.",
            image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=400",
            author: "Marcus K., NGO Director"
        },
        {
            id: 3,
            title: "Fresh Harvest Shares",
            description: "Local farmers donated 100kg of fresh vegetables, providing nutritious options for downtown shelters.",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
            author: "Elena R., Donor"
        }
    ];

    return (
        <section className="success-stories" style={{ padding: '6rem 0', background: 'var(--accent-soft)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Impact <span className="gradient-text">Stories</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>Real people, real impact—made possible by your generosity.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            <img src={story.image} alt={story.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem', flexGrow: 1 }}>
                                <Quote size={24} style={{ color: 'var(--accent-primary)', marginBottom: '1rem', opacity: 0.3 }} />
                                <h4 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{story.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{story.description}</p>
                                <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--accent-secondary)' }}>— {story.author}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
