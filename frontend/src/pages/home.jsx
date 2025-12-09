import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TiltedCard from '../TiltedCard';
import photo from '../assets/photo-1.jpg';
import Aurora from '../components/Arora'; // Ensure you have the Aurora component
import Particles from '../particles';
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } },
};

function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Aurora animated background */}
      <Aurora
        colorStops={["pink", "blue", "purple"]}
        blend={0.2}
        amplitude={1.5}
        speed={0.6}
      />
    {/* Particle background */}
         <div className="absolute inset-1  z-0">
           <Particles
             particleColors={['#d8b4fe', '#c084fc']} // light purple bubbles
             particleCount={400}
             particleSpread={8}
             speed={0.1}
             particleBaseSize={100}
             moveParticlesOnHover={true}
             alphaParticles={false}
             disableRotation={false}
           />
         </div>
   
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10 relative z-10"
      >
        {/* Left Text Section */}
        <motion.div className="md:w-1/2 space-y-6 text-center md:text-left" variants={container}>
          <motion.h1 className="text-4xl  bg-clip-text text-transparent  bg-gradient-to-r from-pink-500 via-blue-600 to-purpule-500 md:text-6xl font-bold leading-tight" variants={item}>
           
              
           
              I Build <br /> Digital Experiences <br /> That Matter
           
          </motion.h1>

          <motion.h2
            className="text-lg  md:text-2xl font-medium text-gray-600 leading-relaxed"
            variants={item}
          >
            Transform your business with cutting-edge web development solutions. From concept to
            launch, I create websites that drive results.
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            variants={item}
          >
            <Link to="/quotepage">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FD1F4A] hover:bg-[#2E77AE]  text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Start Project
              </motion.button>
            </Link>

            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-200 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-purple-100 hover:shadow-lg transition"
              >
                View Work
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Tilted Image Card */}
        <motion.div className="md:w-1/2 flex justify-center" variants={item}>
          <TiltedCard
            imageSrc={photo}
            className="w-full h-full rounded-lg shadow-lg"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-white text-center">
                
              </p>
            }
          />
        </motion.div>
      </motion.div>

      {/* PixelTrail Mouse Effect */}
      
    </div>
  );
}

export default Home;
