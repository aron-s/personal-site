
import SectionWrapper from './hoc/SectionWrapper.js'
import SectionTitle from './SectionTitle.js';
import { PMotion } from './PMotion.js';

const About = () => {
  return (
    <>
    <SectionTitle subtext='Introduction' headertext='Overview' />
    <PMotion
    content='Welcome to my personal website. Hi! I am Aron Shrestha, a senior at New Jersey Institute of Technology. I am a computer science major with a minor in Mobile and Web development. I have always found an interest in the field of software engineering to find tech solutions for challenging problems. I am a quick learner and am passionate about learning new technologies. I am currently looking for full-time opportunities in the field of software engineering.
    '/>

    </>
  )
}

export default SectionWrapper(About, 'about');