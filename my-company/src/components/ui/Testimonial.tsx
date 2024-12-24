'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    name: "Yogaswar",
    position: "CEO, TechCorp",
    quote: "Imam's work on our project was exceptional. His technical skills and attention to detail significantly improved our web application's performance."
  },
  {
    name: "Ceng Pahmi",
    position: "CTO, InnovateTech",
    quote: "Working with Imam was a pleasure. His ability to translate complex requirements into elegant solutions is truly remarkable."
  },
  {
    name: "King Alex",
    position: "Project Manager, WebSolutions",
    quote: "Imam's dedication and problem-solving skills were crucial to the success of our project. I highly recommend him for any web development work."
  }
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" ref={ref}>
      <div className="testimonials main-container">
        <motion.h3
          className="pre-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          What Others Say
        </motion.h3>
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Client Testimonials
        </motion.h1>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-item"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <div className="testimonial-content">
                <p className="text-lg text-gray-600 mb-8">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
              <div className="testimonial-author">
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

