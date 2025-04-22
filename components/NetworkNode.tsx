import { motion } from 'framer-motion';

interface NetworkNodeProps {
  x: number;
  y: number;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export const NetworkNode = ({ x, y, index, isActive, onHover, onLeave }: NetworkNodeProps) => {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ scale: 0 }}
      animate={{ 
        scale: isActive ? 1.5 : 1,
        filter: `hue-rotate(${index * 30}deg)`
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative w-3 h-3">
        <div className="absolute inset-0 bg-white rounded-full animate-pulse" />
        <motion.div
          className="absolute inset-0 bg-white/30 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};
