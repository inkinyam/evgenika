import NewsPopup from '../NewsPopup/NewsPopup';
import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';



const NewsCard = ({card}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleShowMoreButtonClick = () => {
    setIsOpen(true);
  }

  return (
    <div className="news__card">
      { card.link
        ? <a href={card.link} target='_blank' rel='noreferrer' className="news__img">
            {card.image?<img src={card.image} alt={card.name} />:""}
          </a>
        : <div className="news__img">
          {card.image?<img src={card.image} alt={card.name} />:""}
          </div>
      }

      <small className="news__date">{card.date}</small>
      <h4 className="news__title">{card.name}</h4>
      <p className="news__description">{card.short_text}</p>
      <button onClick={()=>{handleShowMoreButtonClick()}} className="news__more">
        <span>Читать далее</span>
      </button>
     {isOpen &&createPortal(<NewsPopup card={card} setIsOpen={setIsOpen}/>, document.body) }
    </div>
  )
}

NewsCard.propTypes = {
  card: PropTypes.object.isRequired
}

export default NewsCard;
