import './Lead.scss';
import logo from '../../assets/main-logo.svg';
import clipcover from '../../assets/photo/clip-cover.png';
import Header from '../Header/Header';

const Lead = () => {
  return (
    <>
      <section className="lead">
        <Header />
        <div className='lead__info'>
          <img src={logo} alt="logo" className="lead__logo" />
          <button className='lead__button'>Купить билет</button>

          <div className="lead__new">
            <span className='lead__small-text'>Новый клип</span>
            <img className='lead__clip-cover' src={clipcover} alt="Новый клип" />
            <a href="#" className='lead__clip-link'>  </a>
          </div>
        </div>

      
      </section>
    </>
  )
}

export default Lead;