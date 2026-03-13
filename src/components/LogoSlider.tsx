import { motion } from 'framer-motion';

const logos = [
  { name: 'Google', url: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg' },
  { name: 'Medium', url: 'https://www.vectorlogo.zone/logos/medium/medium-ar21.svg' },
  { name: 'FactSet', url: 'https://www.vectorlogo.zone/logos/factset/factset-ar21.svg' },
  { name: 'Bunge', url: 'https://www.vectorlogo.zone/logos/bunge/bunge-ar21.svg' },
  { name: 'Celanese', url: 'https://www.vectorlogo.zone/logos/celanese/celanese-ar21.svg' },
  { name: 'Darden', url: 'https://www.vectorlogo.zone/logos/darden/darden-ar21.svg' },
];

const LogoSlider = () => {
  // Duplicating logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="py-16 bg-white border-y border-gray-100 overflow-hidden select-none">
      <div className="container mb-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">Trusted by Industry Leaders</p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -2500],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap"
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-16 md:px-24"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-12 md:h-14 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{ maxWidth: '180px' }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


export default LogoSlider;
