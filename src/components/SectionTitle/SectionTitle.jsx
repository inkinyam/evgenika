import './SectionTitle.scss';
import propTypes from 'prop-types';


const SectionTitle = ({text}) => {
  return (
    <>
      <h2 className='section-title' data-text={text}>{text}</h2>
    </>
  )
 
}

SectionTitle.propTypes = {
  text: propTypes.string.isRequired
}

export default SectionTitle;