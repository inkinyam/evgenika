import PropTypes from 'prop-types';

const TracksCard = ({data}) => {
  return (
    <li className="tracks__item">
      <a href={data.link} target='_blank' rel='noreferrer' className="tracks__link-block">
        <img src={data.image} alt={data.name} className="tracks__img"/>
      </a> 
    </li>
  )
}

TracksCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default TracksCard;