import './Tracks.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import PropTypes from 'prop-types';
import TracksCard from '../TracksCard/TracksCard';
import React from 'react';


const Tracks = ({data}) => {
  const [showMore, setShowMoreVisible] = React.useState(false);
  
  if (data.length > 6) {
    data.splice(5, data.length-1);
    setShowMoreVisible(true);
  }   

  const buttonClassList = !showMore ? 'tracks__link tracks__link_hidden' : 'tracks__link';

  return (
    <section className='section tracks' id='tracks'>
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

      <a href='google.com' className={buttonClassList}> Показать все</a>
    </section>
  )
}
Tracks.propTypes = {
  data: PropTypes.array.isRequired
}
export default Tracks;




