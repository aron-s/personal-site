'use client'
import Link from "next/link"
import SectionWrapper from "./hoc/SectionWrapper"
import SectionTitle from "./SectionTitle"

import { motion } from "framer-motion"

const Contact = () => {

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, y: 0 ,transition: { duration: 1 } },
  };


  return (
    <motion.div
    className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    variants={scaleVariants}
    initial="hidden"
    whileInView='visible'
    viewport={{once: true, amount: 0.25}}
  >
      <div className="card w-full bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
        <SectionTitle subtext='Get in touch' headertext='Contact' />
        <h2 className='card-title'>Let's Connect!</h2>
          <p>Connect with me on LinkedIn or send me an email!</p>
          <div className="mt-2 card-actions justify-end">
            <Link href='https://www.linkedin.com/in/aron-shrestha/' target="_blank">
            <button className="btn btn-primary">Connect!</button>
            </Link>
            <Link href='mailto:as4259@njit.edu'>
            <button className="btn btn-ghost" >Email</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Contact, 'contact')