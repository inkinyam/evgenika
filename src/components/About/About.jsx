import './About.scss'
import SectionTitle from '../SectionTitle/SectionTitle';
import PropTypes from 'prop-types';

const About = ({data}) => {
  return (
    <>
      <section className="section about" id='about'>
        <SectionTitle text='О певице'/>

        <div className="about__info">
          <h3 className="about__title">{data.title}</h3>

          <p className="about__text">{data.dsecription}</p>
        </div>
      </section>
    </>
  )
}
   

 About.propTypes = {
  data: PropTypes.object.isRequired
} 
export default About;