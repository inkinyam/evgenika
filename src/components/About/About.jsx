import './About.scss'
import SectionTitle from '../SectionTitle/SectionTitle';
import PropTypes from 'prop-types';

const About = ({data}) => {
  return (
    <>
      <section className="section about">
        <SectionTitle text='О певице'/>

        <div className="about__info">
          <h3 className="about__title">{data.title}</h3>

          <ul className="about__text">{data.dsecription}</ul>
        </div>
      </section>
    </>
  )
}
   

About.propTypes = {
  data: PropTypes.array.isRequired
}
export default About;