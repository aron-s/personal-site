'use client'

import { motion } from 'framer-motion'


export const PMotion = ({content}) => {
  return (
    <motion.p 
    variants= {{
      initial:{ opacity: 0},
      animate:{ x: 0, y: 0, opacity: 1, 
      transition: {
        type: "",
        delay: 0.1,
        duration: 1,
        ease: "easeOut"
      } 
    }
    }}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.25}}
    className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'>
        {content}
    </motion.p>
  )
}
