'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import heroImage from "./../../assets/images/hero2.jpg"

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const [navActive, setNavActive] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      if (window.innerWidth > 825) {
        setNavActive(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) {
    return null
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

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
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#about">About</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#projects">Projects</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#contact">Contact</a>
            </motion.li>
          </ul>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setNavActive(!navActive)}
          aria-label="Toggle menu"
        >
          <div className={navActive ? 'hamburger active' : 'hamburger'} />
        </button>
      </motion.div>

      <div className="hero-section" ref={ref}>
        <div className="hero-content">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            My name is
          </motion.h3>
          <motion.h1
            className="hero-name gradient-text"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            Imam <span>Harits</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
          >
            A web developer passionate about building responsive, intuitive, and scalable web applications.
          </motion.p>
        </div>
        
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="image-container">
            <motion.div
              className="sparkle-container"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="sparkle-icon" />
            </motion.div>
            <Image
              src={heroImage}
              alt="Hero Image"
              width={500}
              height={500}
              priority
              className="hero-image"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Header), {
  ssr: false
})
