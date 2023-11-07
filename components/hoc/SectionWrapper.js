import { styles } from '../styles/styles';

const SectionWrapper = (Component, idName) => 
function HOC() {

    return (
       <section
       className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className='hash-span' id={idName}>
            &nbsp;
        </span>
        <Component />
       </section>
    )
}

export default SectionWrapper