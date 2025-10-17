import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Database, Brain, Layout } from 'lucide-react';

const skillCategories = [
  {
    category: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Next.js', level: 60 },
    ],
    color: 'from-violet-600 to-purple-600',
  },
  {
    category: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'MongoDB', level: 80 },
      
      { name: 'Express', level: 85 },
    ],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    category: 'AI & ML',
    icon: Brain,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'NumPy', level: 75 },
      { name: 'Pandas', level: 75 },
      { name: 'Scikit-learn', level: 70 },
    ],
    color: 'from-purple-600 to-pink-600',
  },
  {
    category: 'Tools & Others',
    icon: Code2,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Postman', level: 75 },
      { name: 'Vercel', level: 70 },
      { name: 'REST APIs', level: 90 },
    ],
    color: 'from-pink-500 to-orange-500',
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent"
          style={{ fontSize: '3rem', fontWeight: '700' }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-2 border-violet-500/20 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-100" style={{ fontSize: '1.5rem', fontWeight: '600' }}>{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-violet-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-violet-500/20 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
