import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Card } from './ui/card';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'MNNIT Allahabad',
    year: '2024 - Present',
    highlight: true,
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Puranchandra Vidyaniketan',
    year: '2021-2023',
    highlight: false,
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent"
          style={{ fontSize: '3rem', fontWeight: '700' }}
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card
                className={`p-8 h-full backdrop-blur-xl border-2 transition-all duration-300 hover:scale-105 ${
                  edu.highlight
                    ? 'bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border-violet-500/50 shadow-xl shadow-violet-500/20'
                    : 'bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-violet-500/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      edu.highlight
                        ? 'bg-gradient-to-br from-violet-600 to-purple-600'
                        : 'bg-gradient-to-br from-violet-500 to-cyan-500'
                    }`}
                  >
                    {edu.highlight ? (
                      <Award className="w-6 h-6 text-white" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-gray-100" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                      {edu.degree}
                    </h3>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    <p className="text-sm text-violet-400">{edu.year}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
