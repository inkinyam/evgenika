import './Concerts.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import React from 'react';
import PropTypes from 'prop-types';
import ConcertCard from '../ConcertCard/ConcertCard';

const Concerts = ({data}) => {
  const [showMore, setShowMoreVisible] = React.useState(false);
  
  if (data.length > 4) {
    data.splice(3, data.length-1);
    setShowMoreVisible(true);
  }   

  const buttonClassList = !showMore ? 'concert__link concert__link_hidden' : 'concert__link';
  return (
    <section className="section concerts" id='concerts'>
      <SectionTitle text='Концерты'/>

      <ul className="concerts__list">
        { data.map(item => {
            return (
              <ConcertCard data = {item} 
                           key  = {item.id}/>
            )
          })
        }
      </ul>

      <a href='google.com' className={buttonClassList}> Показать все</a>
    </section>
  )
}

Concerts.propTypes = {
  data: PropTypes.array.isRequired
}


export default Concerts;