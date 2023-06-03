import PropTypes from 'prop-types';

const GuidesCard = ({card}) => {
  return (
    <div className='guides__card'>
      <div className="guides__img">
        <div className="guides__img-container">
          <img src={card.image} alt={card.name} />
          <img src={card.image} alt={card.name} />
          <img src={card.image} alt={card.name} />
        </div>
      </div>
      <div className="guides__info">
        <h3 className='guides__title'>{card.name}</h3>
        <div className="guides__text">{card.subtitle}</div>
        <a href={card.link} className="guides__button">{card.link_label}</a>
      </div>
    </div>
  )
}


GuidesCard.propTypes = {
  card: PropTypes.object.isRequired
}

export default GuidesCard;