import PropTypes from 'prop-types';

const GuidesCard = ({card}) => {
  return (
    <div className='guides__card'>
      <div className="guides__img">
        <div className="guides__img-container">
          <img src={card.img} alt={card.title} />
          <img src={card.img} alt={card.title} />
          <img src={card.img} alt={card.title} />
        </div>
      </div>
      <div className="guides__info">
        <h3 className='guides__title'>{card.title}</h3>
        <div className="guides__text">{card.subtitle}</div>
        <a href={card.buttonlink} className="guides__button">{card.buttontext}</a>
      </div>
    </div>
  )
}


GuidesCard.propTypes = {
  card: PropTypes.object.isRequired
}

export default GuidesCard;