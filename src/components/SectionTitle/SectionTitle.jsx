import './SectionTitle.scss';


const SectionTitle = ({text}) => {
  return (
    <>
      <h2 className='section-title' data-text={text}>{text}</h2>
    </>
  )
 
}


export default SectionTitle;