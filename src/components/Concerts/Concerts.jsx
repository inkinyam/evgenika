import './Concerts.scss';
import SectionTitle from '../SectionTitle/SectionTitle';

import PropTypes from 'prop-types';
import ConcertCard from '../ConcertCard/ConcertCard'

const Concerts = ({data}) => {
  return (
    <section className="section concerts">
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
    </section>
  )
}

Concerts.propTypes = {
  data: PropTypes.array.isRequired
}


export default Concerts;