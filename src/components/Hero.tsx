import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/Heros-05.png';

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [40, -40]);
  const bgTranslateX = useTransform(smoothX, [-0.5, 0.5], [60, -60]);
  const bgTranslateY = useTransform(smoothY, [-0.5, 0.5], [60, -60]);



  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="py-12 overflow-hidden min-h-[80vh] flex items-center"

      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="z-20"
        >
          <motion.h1
            className="text-6xl lg:text-7xl font-bold font-outfit leading-[1.1] mb-8 text-navy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Top Managed<br />
            Provider &<br />
            <span className="text-primary">IT Services</span>
          </motion.h1>

          <motion.p
            className="text-text-muted text-xl mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Strategic technology advice to help plan your future growth.
          </motion.p>

          <motion.div
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', maxWidth: '400px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="btn btn-primary shadow-lg group" 
              style={{ flex: '1 1 170px', justifyContent: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            >
              Get Started <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link 
              to="/about" 
              className="btn btn-outline" 
              style={{ flex: '1 1 160px', justifyContent: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            >
              Learn More
            </Link>
          </motion.div>

        </motion.div>

        <motion.div
          className="relative w-full flex justify-center md:justify-end items-center"
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            perspective: 1000,
          }}
        >
          {/* Decorative background circle with parallax */}
          <motion.div
            style={{ x: bgTranslateX, y: bgTranslateY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"
          />


          <motion.div
            className="relative w-full max-w-[700px] md:translate-x-12"
            style={{
              rotateX,
              rotateY,
              x: translateX,
              y: translateY
            }}
          >
            <img
              src={HeroImage}
              alt=""
              className="w-full h-auto drop-shadow-2xl select-none pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
