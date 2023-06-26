import './Tracks.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import PropTypes from 'prop-types';
import TracksCard from '../TracksCard/TracksCard';
import React from 'react';


const Tracks = ({data}) => {
  const [showMore, setShowMoreVisible] = React.useState(false);
  const [hideMore, setHideMoreVisible] = React.useState(false);
  const [showedTracks, setShowedTracks] = React.useState([]);

  React.useEffect(()=>{
    setShowedTracks(data.slice(0, 6))
    setShowMoreVisible(true)
  },[data])

  const buttonShowMoreClassList = ! showMore ? 'tracks__link tracks__link_hidden' : 'tracks__link';
  const buttonHideMoreClassList = ! hideMore ? 'tracks__link tracks__link_hidden' : 'tracks__link';

  const handleShowMoreClick = () => {
    setShowedTracks(data);
    setShowMoreVisible(false);
    setHideMoreVisible(true);
  }
  const handleHideMoreClick = () => {
    setShowedTracks(data.slice(0, 6));
    setShowMoreVisible(true);
    setHideMoreVisible(false);
  }


  return (
    <section className='section tracks' id='tracks'>
      <SectionTitle text = 'Треки'/>
      <ul className="tracks__list">
        {
          showedTracks.map(item => {
            return (
              <TracksCard data = {item} 
                          key  = {item.id}/>
            )
          })
        }
      </ul>

      <a onClick={handleShowMoreClick} className={buttonShowMoreClassList}> Показать все</a>
      <a onClick={handleHideMoreClick} className={buttonHideMoreClassList}> Скрыть</a>
    </section>
  )
}
Tracks.propTypes = {
  data: PropTypes.array.isRequired
}
export default Tracks;




