'use client'

import SectionTitle from './SectionTitle'
import SectionWrapper from './hoc/SectionWrapper'
import Card from './Card'

import { projects } from './constants/constants'
import { PMotion } from './PMotion'
const Projects = () => {
  return (
    <>
    <SectionTitle subtext='Personal Projects' headertext='Projects' />

    <div className="w-full flex">
      <PMotion content="I love to build things. Here you'll find a showcase of some of the exciting projects I've worked on. From web applications to coding challenges, these projects exemplify my technical expertise and creativity. Whether it's building useful tools or exploring cutting-edge technologies, these projects reflect my commitment to continuous learning and my enthusiasm in building softwares." />


    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
    {
      projects.map((project, index) => (
      <Card key={index} index={index} {...project} />
      ))
    }
    </div>
   
    </>
  )
}

export default SectionWrapper(Projects, 'projects')