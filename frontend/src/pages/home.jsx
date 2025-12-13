import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TiltedCard from '../TiltedCard';
import photo from '../assets/photo-1.jpg';
import Aurora from '../components/Arora';
import Particles from '../particles';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import SplashCursor from '../../SplashCursor';
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
    
    <div className="relative overflow-hidden ">
      < SplashCursor />
      {/* Aurora animated background */}
      <Aurora
        colorStops={["pink", "blue", "purple"]}
        blend={0.2}
        amplitude={1.5}
        speed={0.6}
      />

      {/* Particles */}
      <div className="absolute inset-1 z-0">
        <Particles
          particleColors={['#d8b4fe', '#c084fc']}
          particleCount={400}
          particleSpread={8}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
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
        {/* Left Section */}
        <motion.div className="md:w-1/2 space-y-6 text-center md:text-left" variants={container}>

          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-600 to-purple-500"
            variants={item}
          >
            Hi, I'm Krishna  <br />
            <span className="text-3xl md:text-5xl font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "MERN Developer",
                    "Java Developer",
                    "UI/UX Enthusiast",
                    "DSA Learner"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl font-medium text-gray-600 leading-relaxed"
            variants={item}
          >
             I am a passionate Full Stack Developer who loves building fast, modern, and
  visually appealing digital experiences. I specialize in the MERN stack, Java,
  and UI/UX design — creating web applications that are functional, scalable,
  and user-focused.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            variants={item}
          >
            <Link to="/quotepage">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FD1F4A] hover:bg-[#2E77AE] text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Start Project
              </motion.button>
            </Link>

            {/* Resume Button */}
            <a
              href="/resume.pdf"    // <-- update later
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-200 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-purple-100 hover:shadow-lg transition"
              >
                Download Resume
              </motion.button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
          initial={{
            y:-20,
            opacity:0,
            filter:"blur(4px)"
          }}
         whileInView={{
          y:0,
          opacity:1,
          filter:"blur(0px)",
         }}
         transition={{
          duration:0.6,
          ease:"easeOut",
          delay:0.2
         }}
            className="flex justify-center md:justify-start gap-6 text-3xl pt-4"
            variants={item}
          >
            <a href="https://github.com" target="_blank"><FaGithub className="hover:text-neutral-600 transition" /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedin className="hover:text-blue-500 transition" /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram className="hover:text-pink-600 transition" /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter className="hover:text-blue-400 transition" /></a>
          </motion.div>

        </motion.div>

        {/* Right Section - Tilted Image */}
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
            overlayContent={<p className="text-white text-center"></p>}
          />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Home;
