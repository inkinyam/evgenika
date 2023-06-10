import './Footer.scss';
import iconInstagramm from '../../assets/icons/Icons-instagramm.svg';
import iconTelegramm from '../../assets/icons/Icons-Telegram.svg';
import iconVK from '../../assets/icons/Icons-VK.svg';
import iconYoutube from '../../assets/icons/Icons-youtube.svg';
import PropTypes from 'prop-types';

const Footer = ({social, concertContact, prContact}) => {

  return (
    <footer className='footer' id='contacts'>
      <section className="footer__top">
        <div className="footer__column">
          <h4 className="footer__title">{concertContact.title}</h4>
          <p className="footer__text">{concertContact.name}</p>
          <a href="tel:89995551212" className=" footer__text">{concertContact.phone}</a>
          <a href="mailto:yandex@yandex.ru" className=" footer__text">{concertContact.email}</a>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">{prContact.title}</h4>
          <p className="footer__text">{prContact.name}</p>
          <a href="tel:89995551212" className="footer__text">{prContact.phone}</a>
          <a href="mailto:yandex@yandex.ru" className="footer__text">{prContact.email}</a>
        </div>
      </section>
      <section className="footer__bottom">
        <h4 className="footer__title">Социальные сети певицы</h4>

        <div className="footer__social">
        <a href={social.instagram} className="footer__link">
            <img src={iconInstagramm} alt="icon" />
          </a>
          <a href={social.youtube} className="footer__link">
            <img src={iconYoutube} alt="icon" />
          </a>
          <a href={social.telegram} className="footer__link">
            <img src={iconTelegramm} alt="icon" />
          </a>
          <a href={social.vk} className="footer__link">
            <img src={iconVK} alt="icon" />
          </a>
        </div>
      </section>
    
    </footer>
  )
}
Footer.propTypes = {
  social: PropTypes.object.isRequired,
  concertContact: PropTypes.object.isRequired,
  prContact: PropTypes.object.isRequired,
}
export default Footer;