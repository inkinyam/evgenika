import PropTypes from 'prop-types';

const ConcertCard = ({data}) => {
  return (
    <li className='concerts__card'>
      <div className='concerts__card-block'>
        <h4 className="concerts__city">{data.city}</h4>
        <span className='concerts__date'>
          <span className="concertst__day">{data.date}</span>
        </span>
      </div>
      <div className='concerts__card-block'>
        <div className='concerts__info'>
          <p>{data.location}</p>
          <p>{data.ticket_types}</p>
        </div>

        <a href={data.link} className="concerts__link">{data.link_label}</a>

      </div>

    </li>
  )
}

ConcertCard.propTypes = {
  data: PropTypes.object.isRequired
}



export default ConcertCard;