import './Tracks.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { tracksData } from '../../api-utils/data';


const Tracks = () => {
  return (
    <section className='section tracks'>
      <SectionTitle text = 'Треки'/>
      <ul className="tracks__list">
        {
          tracksData.map(item => {
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

export default Tracks;


const TracksCard = ({data}) => {
  return (
    <li className="tracks__item">
      <img src={data.img} alt={data.name} className="tracks__img"/>
        <a href={data.link} className='tracks__link'></a>
    </li>
  )
}