import PropTypes from 'prop-types';


const NewsCard = ({card}) => {
  return (

      <div className="news__card">
        <div className="news__img">
          {card.img?<img src={card.img} alt={card.title} />:""}
        </div>
        <small className="news__date">{card.date}</small>
        <h4 className="news__title">{card.title}</h4>
        <p className="news__description">{card.descpription}</p>
      </div>

  )
}

NewsCard.propTypes = {
  card: PropTypes.object.isRequired
}

export default NewsCard;
