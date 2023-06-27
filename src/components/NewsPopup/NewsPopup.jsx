import PropTypes from 'prop-types';
import './NewsPopup.scss';
import closeIcon from '../../assets/icons/close.svg'
import React from 'react';

 const NewsPopup = ({card, setIsOpen}) => {

  React.useEffect(()=>{
    document.addEventListener('keydown', (e)=>handleEscClick(e))

    return () =>{
      document.removeEventListener('keydown', handleEscClick)
    }
  },[setIsOpen])

  const handleEscClick = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  const handleMouseClick = (e) => {
    if (e.target.classList.contains('newsPopup')) {
      setIsOpen(false)
    }
  }

  return (
    <div className='newsPopup' onMouseDown={(e)=>{handleMouseClick(e)}} > 
      <div className="newsPopup__infoblock">
        <button onClick={()=>{setIsOpen(false)}} className='newsPopup__close'>
          <img src={closeIcon} alt="close" />
        </button>
        <small className="newsPopup__date">{card.date}</small>
        <h4 className="newsPopup__title">{card.name}</h4>
        <div className="newsPopup__img">
          {card.image&&<img src={card.image} alt={card.name} />}
         </div>

      <p className="newsPopup__description">{card.full_text}</p>
      </div>    
    </div>
  )
}


NewsPopup.propTypes = {
  card: PropTypes.object.isRequired,
  setIsOpen: PropTypes.func,
}

export default NewsPopup;