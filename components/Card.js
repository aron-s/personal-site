'use client'

import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

const Card = ({ index, name, description, tags, image, source_code_link}) => {
  const total_delay = 0.6 * (index % 3);
  return (
    <motion.div 
    variants={{
      initial: { opacity: 0, y: 100 },
      animate:{ 
        x: 0, 
        y: 0, 
        opacity: 1, 
        rotate: 0 ,
        transition: { 
          type: "spring", 
          ease: "easeOut",
          duration: 0.75,
          delay: total_delay,}
      },
    }}
    initial='initial'
    whileInView='animate'
    viewport={{once: true, amount: 0.25}}
    >
       <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="card sm:w-[365px] w-full glass">
        <figure>
            <img src={image} alt="sample"  className='w-full h-full object-cover rounded-2xl'/>
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => {
              window.open(source_code_link, "_blank")
            }}
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src='/icons/github.png' alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
            </div>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="card-text text-primary-focus my-5">{description}</p>
            <div className="flex flex-wrap gap-2">
            {
                tags.map((tag) => (
                    <div key={tag.name} className={`badge ${tag.color} badge-outline`}>{tag.name}</div>
  )) 
            }
            </div>
            
        </div>
        </Tilt>
    </motion.div>
  )
}

export default Card