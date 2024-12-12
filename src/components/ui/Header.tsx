'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles } from 'lucide-react'
import heroImage from "./../../assets/images/hero2.jpg"

export default function Header() {
  const [navActive, setNavActive] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleNav = () => {
    setNavActive(!navActive)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 825) {
        setNavActive(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const decorativeElements = Array(3).fill(null)

  return (
    <div className="main-container">
      <motion.div
        className="nav"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">
          <a href="/" className="gradient-text">IH</a>
        </div>

        <nav className={navActive ? 'nav-active' : ''}>
          <ul>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#aboutmes">About Me</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#portofolios">Portfolio</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#skills">Skills</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contact">Contact</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#" target="_blank">
                <button className="btn glow">RESUME</button>
              </a>
            </motion.li>
          </ul>
        </nav>

        <div className={`burger ${navActive ? 'toggle-burger' : ''}`} onClick={toggleNav}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </motion.div>

      <motion.section
        id="hero"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="hero-left">
          <motion.h3
            className="pre-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            My name is
          </motion.h3>
          <motion.h1
            className="hero-name gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Imam <span>Harits</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            "Hello! I am a web developer passionate about building responsive, intuitive, and scalable web applications. With experience in HTML, CSS, React. I'm dedicated to delivering the best solutions for user needs."
          </motion.p>
        </div>
        
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="image-container">
            {decorativeElements.map((_, index) => (
              <motion.div
                key={index}
                className="decorative-circle"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
              />
            ))}
            <motion.div
              className="sparkle-container"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles className="sparkle-icon" />
            </motion.div>
            <img
              src={heroImage}
              alt="Professional portrait"
              className="hero-image"
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

