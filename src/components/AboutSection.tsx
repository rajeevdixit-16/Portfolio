import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import meImage from "../assets/me.jpeg";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent"
          style={{ fontSize: '3rem', fontWeight: '700' }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 opacity-50 blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-violet-500/30 shadow-2xl shadow-violet-500/50">
                <img
                  src={meImage}
                  alt="Rajeev Dixit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 backdrop-blur-xl border border-violet-500/20 shadow-xl">
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate web developer with a deep fascination for artificial intelligence and machine learning. 
                I love building modern, scalable web applications that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey in technology has been driven by curiosity and a constant desire to learn. From creating 
                interactive user interfaces with React to developing intelligent backend systems, I enjoy every aspect 
                of the development process.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest advancements in AI, contributing to open-source 
                projects, or experimenting with new web technologies to push the boundaries of what's possible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
