import './Lead.scss';
import logo from '../../assets/main-logo.svg';
import Header from '../Header/Header';
import PropTypes from 'prop-types';

const Lead = ({data, social, concerts}) => {
  return (
    <>
      <section className="lead">
        <Header social={social} />
        <div className='lead__info'>
          <img src={logo} alt="logo" className="lead__logo" />
          {(concerts.lenght > 0) && <a href='#concerts' className='lead__button'>Купить билет</a>}

          <div className="lead__new">
            <span className='lead__small-text'>{data.title}</span>
              { data.image ? <img className='lead__clip-cover' src={data.image} alt={data.title} /> 
                        : <div className='lead__emptybox'></div>  } 
            <a href={data.link} target='_blank' rel='noreferrer' className='lead__clip-link'>  </a>
          </div>
        </div>

      
      </section>
    </>
  )
}
Lead.propTypes = {
  data: PropTypes.object.isRequired,
  social: PropTypes.object.isRequired,
  concerts: PropTypes.array.isRequired,
} 
export default Lead;