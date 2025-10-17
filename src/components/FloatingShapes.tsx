import { motion } from 'motion/react';

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          top: '50%',
          right: '10%',
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          bottom: '10%',
          left: '30%',
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        >
          <div
            className="w-16 h-16 border-2 border-violet-500/30"
            style={{
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
