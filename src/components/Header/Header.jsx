import './Header.scss';
import iconInstagramm from '../../assets/icons/Icons-instagramm.svg';
import iconTelegramm from '../../assets/icons/Icons-Telegram.svg';
import iconVK from '../../assets/icons/Icons-VK.svg';
import iconYoutube from '../../assets/icons/Icons-youtube.svg';

import PropTypes from 'prop-types';
const Header = ({social}) => {
  return (
    <>
      <header className="header">
        <p className='header__text'>Певица с уникальным голосом</p>
        <div className='header__social'>
          <a href={social.instagram} className="header__link">
            <img src={iconInstagramm} alt="icon" />
          </a>
          <a href={social.youtube} className="header__link">
            <img src={iconYoutube} alt="icon" />
          </a>
          <a href={social.telegram} className="header__link">
            <img src={iconTelegramm} alt="icon" />
          </a>
          <a href={social.vk} className="header__link">
            <img src={iconVK} alt="icon" />
          </a>

        </div>
      </header>
    </>
  )
}
Header.propTypes = {
  social: PropTypes.object.isRequired
} 

export default Header;