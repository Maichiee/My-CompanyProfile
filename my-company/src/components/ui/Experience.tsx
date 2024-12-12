'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    responsibilities: [
      "Lead a team of 5 developers in creating scalable web applications",
      "Implemented microservices architecture, improving system efficiency by 40%",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2021",
    responsibilities: [
      "Developed and maintained multiple client websites using React and Node.js",
      "Integrated third-party APIs and payment gateways",
      "Optimized database queries, reducing load times by 30%"
    ]
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Creations",
    duration: "2016 - 2018",
    responsibilities: [
      "Assisted in the development of responsive web designs",
      "Collaborated with the design team to implement UI/UX improvements",
      "Participated in daily stand-ups and sprint planning meetings"
    ]
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" ref={ref}>
      <div className="experience main-container">
        <motion.h3
          className="pre-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h3>
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Professional Experience
        </motion.h1>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

