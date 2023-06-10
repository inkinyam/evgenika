import './Navigations.scss';

const Navigations = () => {
  return (
  <nav className='navigations'>
    <ul className="navigations__links">
      <li className="navigations__item">
        <a href="#about" className="navigations__link">О певице</a>      
      </li>
      <li className="navigations__item">
        <a href="#concerts" className="navigations__link">Концерты</a>      
      </li>
      <li className="navigations__item">
        <a href="#tracks" className="navigations__link">Треки</a>      
      </li>
      <li className="navigations__item">
        <a href="#news" className="navigations__link">Новости</a>      
      </li>
      <li className="navigations__item">
        <a href="#videos" className="navigations__link">Клипы</a>      
      </li>
      <li className="navigations__item">
        <a href="#guides" className="navigations__link">Гайды</a>      
      </li>
      <li className="navigations__item">
        <a href="#contacts" className="navigations__link">Контакты</a>      
      </li>
    </ul>
    
  </nav>
  )
}

export default Navigations;