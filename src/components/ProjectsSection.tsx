import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'ArtHive',
    description: 'A full-stack MERN web application for artists to upload, share, and discover digital artworks with AI-powered auto-tagging and interactive features.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Clerk', 'Cloudinary', 'RestAPI', 'AI Powered'],
    gradient: 'from-violet-600 to-purple-600',
    link: 'https://art-hive-deploy.vercel.app/',
  },
  {
    title: 'FitTrack',
    description: 'A web application to track the fitness journey for fitness enthusiasts.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT'],
    gradient: 'from-cyan-500 to-blue-600',
    link: 'https://github.com//rajeevdixit-16/FitTrack'
  },
  {
    title: 'InsiderJobs',
    description: 'A platform for job-seekers to find their dream jobs.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'React', 'Clerk'],
    gradient: 'from-purple-600 to-pink-600',
    link: 'https://github.com//rajeevdixit-16/Insider-Jobs'
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent"
          style={{ fontSize: '3rem', fontWeight: '700' }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-6 h-full backdrop-blur-xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-2 border-violet-500/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-500/40">
                <div className="mb-4">
                  <div
                    className={`h-2 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-4`}
                  />
                  <h3
                    className="mb-3 text-gray-100"
                    style={{ fontSize: '1.5rem', fontWeight: '600' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full border-violet-500/50 hover:bg-violet-500/10 group"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
