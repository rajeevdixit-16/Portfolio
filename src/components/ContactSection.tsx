import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import emailjs from 'emailjs-com'; // <-- Import EmailJS

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        'service_pwj0tla',     // Replace with your EmailJS Service ID
        'template_fftjkva',    // Replace with your EmailJS Template ID
        formData,              // The data to send
        'Eih7p5jy-h6rQfgH0'      // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form
        },
        (error) => {
          console.error('Email send error:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rajeevdixit-16',
      color: 'hover:text-violet-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rajeev-dixit-892526346/',
      color: 'hover:text-cyan-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/rd_45official',
      color: 'hover:text-purple-600',
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent"
          style={{ fontSize: '3rem', fontWeight: '700' }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-2 border-violet-500/20 shadow-xl">
              <h3 className="mb-4 text-gray-100" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                Let's work together
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <h4 className="text-gray-200" style={{ fontWeight: '600' }}>Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/30 transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-violet-500/10 border-violet-500/30 focus:border-violet-500 backdrop-blur-sm text-gray-100 placeholder:text-gray-500"
                  required
                />
              </div>

              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-violet-500/10 border-violet-500/30 focus:border-violet-500 backdrop-blur-sm text-gray-100 placeholder:text-gray-500"
                  required
                />
              </div>

              <div className="relative">
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-violet-500/10 border-violet-500/30 focus:border-violet-500 backdrop-blur-sm min-h-[150px] text-gray-100 placeholder:text-gray-500"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/50 group"
                size="lg"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
