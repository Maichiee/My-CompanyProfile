

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
// import { Project1} from './../../assets/images/SiHalal.png'
// import { Project2} from './../../assets/images/ProjectWebsite.jpg'
// import { Project3} from './../../assets/images/Purwadhika.png'

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const portfolioItems = [
    {
      title: "Pendamping Halal",
      tags: ["2024", "2025"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias nisi fugit itaque harum velit, et animi fugiat accusantium error!",
    },
    {
      title: "Mini Project Purwadhika",
      tags: ["Node JS", "Laravel"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias nisi fugit itaque harum velit, et animi fugiat accusantium error!",
    },
    {
      title: "Project Website",
      tags: ["Front End", "Back End"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias nisi fugit itaque harum velit, et animi fugiat accusantium error!",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div id="portofolios" ref={ref}>
      <div className="portofolios main-container">
        <motion.h3
          className="pre-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Works
        </motion.h3>
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Featured Portfolio
        </motion.h1>

        <motion.div
          className="grid-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="portfolio glow"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >

              <div className="portfolio-info">
                <div className="portfolio-title">
                  <h4>{item.title}</h4>
                  <a href="/" className="portfolio-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/>
                    </svg>
                  </a>
                </div>
                <div className="portfolio-tags">
                  {item.tags.map((tag, tagIndex) => (
                    <div key={tagIndex}>{tag}</div>
                  ))}
                </div>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

