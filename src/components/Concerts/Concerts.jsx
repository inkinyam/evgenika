import './Concerts.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import ConcertCard from '../ConcertCard/ConcertCard';

import { concertsData } from '../../api-utils/data';

const Concerts = () => {
  return (
    <section className="section concerts">
      <SectionTitle text='Концерты'/>

      <ul className="concerts__list">
        {
          concertsData.map(item => {
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




export default Concerts;