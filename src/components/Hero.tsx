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
      className="py-20 md:py-32 overflow-hidden min-h-[85vh] flex items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="z-20"
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold font-outfit leading-[1.05] mb-8 text-navy tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Build, Scale & Innovate <br className="hidden md:block" />
            With <span className="gradient-text">Modern Software,</span> <br className="hidden xl:block" />
            Cloud & Data Solutions
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-500 mb-10 max-w-[600px] leading-[1.7]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            CMV Technologies International is a trusted IT consulting & software development company helping businesses build scalable digital products through enterprise development, AI automation, cloud-native architecture, and advanced data engineering.
          </motion.p>

          <motion.div
            className="flex flex-row items-center justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="btn btn-primary shadow-lg group whitespace-nowrap !px-8 !py-4 text-[0.95rem] tracking-wide" 
              style={{ textDecoration: 'none', borderRadius: '50px' }}
            >
              GET A FREE CONSULTATION <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          </motion.div>

        </motion.div>

        <motion.div
          className="relative w-full hidden md:flex justify-center md:justify-end items-center hero-image-wrapper"
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

      <style>{`
        @media (max-width: 767px) {
          .hero-image-wrapper {
            display: none !important;
          }
        }
        @media (min-width: 768px) {
          .hero-image-wrapper {
            display: flex !important;
          }
        }
      `}</style>
    </section>


  );
};

export default Hero;
