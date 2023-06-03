import PropTypes from 'prop-types';


const NewsCard = ({card}) => {
  return (

      <div className="news__card">
        <div className="news__img">
          {card.image?<img src={card.image} alt={card.name} />:""}
        </div>
        <small className="news__date">{card.date}</small>
        <h4 className="news__title">{card.name}</h4>
        <p className="news__description">{card.short_text}</p>
      </div>

  )
}

NewsCard.propTypes = {
  card: PropTypes.object.isRequired
}

export default NewsCard;
