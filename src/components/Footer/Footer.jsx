import './Footer.scss';
import iconInstagramm from '../../assets/icons/Icons-instagramm.svg';
import iconTelegramm from '../../assets/icons/Icons-Telegram.svg';
import iconVK from '../../assets/icons/Icons-VK.svg';
import iconYoutube from '../../assets/icons/Icons-youtube.svg';
import PropTypes from 'prop-types';

const Footer = ({data}) => {
  return (
    <footer className='footer'>
      <section className="footer__top">
        <div className="footer__column">
          <h4 className="footer__title">Концерты</h4>
          <p className="footer__text">Имя Имярек</p>
          <a href="tel:89995551212" className=" footer__text">8(999)555-12-12</a>
          <a href="mailto:yandex@yandex.ru" className=" footer__text">yandex@yandex.ru</a>
        </div>
        <div className="footer__column">
          <h4 className="footer__title">PR</h4>
          <p className="footer__text">Имя Имярек</p>
          <a href="tel:89995551212" className="footer__text">8(999)555-12-12</a>
          <a href="mailto:yandex@yandex.ru" className="footer__text">yandex@yandex.ru</a>
        </div>
      </section>
      <section className="footer__bottom">
        <h4 className="footer__title">Социальные сети певицы</h4>

        <div className="footer__social">
        <a href={data.instagram} className="footer__link">
            <img src={iconInstagramm} alt="icon" />
          </a>
          <a href={data.youtube} className="footer__link">
            <img src={iconYoutube} alt="icon" />
          </a>
          <a href={data.telegram} className="footer__link">
            <img src={iconTelegramm} alt="icon" />
          </a>
          <a href={data.vk} className="footer__link">
            <img src={iconVK} alt="icon" />
          </a>
        </div>
      </section>
    
    </footer>
  )
}
Footer.propTypes = {
  data: PropTypes.array.isRequired
}
export default Footer;