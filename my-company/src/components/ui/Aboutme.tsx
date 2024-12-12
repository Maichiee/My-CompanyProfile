'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationItems = [
    {
      years: '2020 - 2024',
      title: 'Islamic Economic Law',
      institution: 'Persis College of Islamic Studies',
      description: 'focuses on the application of Islamic principles in economic activities, covering areas such as finance, trade, and contracts.',
    },
    {
      years: '2024 - 2025',
      title: 'Web Development Bootcamp',
      institution: 'Purwadhika',
      description: 'Intensive program covering full-stack web development technologies and best practices.',
    },
  ]

  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'HTML5 & CSS3',
    'Python',
    'Git & GitHub',
    'RESTful APIs',
    'SQL & NoSQL Databases',
  ]

  return (
    <section id="aboutmes" ref={ref}>
      <div className="aboutmes main-container">
        <motion.h3
          className="pre-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h3>
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <div className="aboutmes-grid">
          <motion.div
            className="aboutmes-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3>Education</h3>
            {educationItems.map((item, index) => (
              <div key={index} className="education">
                <div className="line">
                  <div></div>
                </div>
                <div className="education-info">
                  <h4>{item.title}</h4>
                  <p>{item.institution}</p>
                  <p>{item.description}</p>
                  <div className="education-years">{item.years}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="aboutmes-right"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3>Professional Skills</h3>
            <div className="aboutmes-list">
              <ul>
                {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <ul>
                {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

