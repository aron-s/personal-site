import { styles } from "./styles/styles"

const SectionTitle = ({subtext, headertext}) => {
  return (
    <div>
        <p className={styles.sectionSubText}>{subtext}</p>
        <h2 className={styles.sectionHeadText}>{headertext}.</h2>
    </div>
  )
}

export default SectionTitle