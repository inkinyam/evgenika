import './Tracks.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import PropTypes from 'prop-types';
import TracksCard from '../TracksCard/TracksCard';


const Tracks = ({data}) => {
  return (
    <section className='section tracks'>
      <SectionTitle text = 'Треки'/>
      <ul className="tracks__list">
        {
          data.map(item => {
            return (
              <TracksCard data = {item} 
                          key  = {item.id}/>
            )
          })
        }
      </ul>
    </section>
  )
}
Tracks.propTypes = {
  data: PropTypes.array.isRequired
}
export default Tracks;




