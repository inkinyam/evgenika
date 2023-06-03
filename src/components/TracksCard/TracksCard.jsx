import PropTypes from 'prop-types';

const TracksCard = ({data}) => {
  return (
    <li className="tracks__item">
      <img src={data.image} alt={data.name} className="tracks__img"/>
        <a href={data.link} className='tracks__link'></a>
    </li>
  )
}

TracksCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default TracksCard;