import { motion } from 'framer-motion';
import React from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    details: string;
    onHover?: () => void;
    onLeave?: () => void;
    isActive?: boolean;
}

function FeatureCard({ title, description, details, onHover, onLeave, isActive }: FeatureCardProps) {
    return (
        <motion.div
            className={`relative rounded-2xl border p-8 bg-canvas-bg transition-all duration-300 cursor-pointer ${
                isActive
                    ? 'border-primary-solid bg-gradient-to-br from-primary-bg to-primary-bg-subtle text-primary-text-contrast'
                    : 'border-canvas-line hover:border-primary-border hover:bg-primary-bg-subtle'
            }`}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(80,80,180,0.10)' }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {/* Badge */}
            <div className="mb-6">
                <span className={`inline-block bg-primary-bg ${isActive ? 'bg-canvas-bg': 'bg-primary-bg' } 'text-primary-text-contrast' : 'text-canvas-text-contrast'} px-4 py-2 rounded-lg text-sm font-medium`}>
                    {title}
                </span>
            </div>
            {/* Description */}
            <h3 className="mb-4 text-2xl font-bold text-canvas-text-contrast">
                {description}
            </h3>
            {/* Details */}
            <p className="text-canvas-text text-lg leading-relaxed">
                {details}
            </p>
        </motion.div>
    );
}

export default FeatureCard;