import './Navigations.scss';
import PropTypes from 'prop-types';

export const NavigationsItem = ({link, text}) => {
  return (
    <li className="navigations__item">
        <a href={link} className="navigations__link">{text}</a>      
    </li>
  )
}


NavigationsItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
} 

export const Navigations = ({children}) => {
  return (
  <nav className='navigations'>
    <ul className="navigations__links">
      {children}
    </ul>
    
  </nav>
  )
}

Navigations.propTypes = {
  children: PropTypes.array.isRequired
} 

