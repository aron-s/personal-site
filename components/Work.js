'use client'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from './constants/constants';
import SectionWrapper from './hoc/SectionWrapper';
import SectionTitle from './SectionTitle';


const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#222027', color: '#fff' }}
    contentArrowStyle={{borderRight: '7px solid #222027'}}
    date = {experience.date}
    iconStyle={{
      background: experience.iconBg
    }}
    icon={ <div className="flex justify-center items-center w-full h-full">
    <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
  </div>}
    >
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <h4 className='vertical-timeline-element-subtitle text-primary text-[16px]
      font-semibold'>{experience.company_name}</h4>
      <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
      
    </VerticalTimelineElement>
  )
}

const Work = () => {
  return (
    <>
    <SectionTitle subtext='What I have done so far' headertext='Work Experience' />
    <div className='mt-20 flex flex-col'>
       <VerticalTimeline>
       {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Work, 'work')