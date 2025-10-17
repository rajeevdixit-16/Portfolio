import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent" style={{ fontSize: '4rem', fontWeight: '700', lineHeight: '1.2' }}>
            Hi, I'm Rajeev Dixit 👋
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 text-gray-300"
          style={{ fontSize: '1.5rem' }}
        >
          Web Developer | AI & Machine Learning Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/50"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-violet-500/50 hover:bg-violet-500/10 backdrop-blur-sm"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Interactive Element - Rotating Shapes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative w-64 h-64"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="absolute inset-0 border-2 border-cyan-500/30 rounded-3xl"
            style={{ transform: 'rotateX(60deg) rotateZ(45deg)' }}
            animate={{ rotateX: [60, 120, 60], rotateY: [0, 360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-8 border-2 border-violet-500/30 rounded-2xl"
            style={{ transform: 'rotateY(45deg) rotateZ(30deg)' }}
            animate={{ rotateY: [45, 405, 45], rotateZ: [30, 390, 30] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
