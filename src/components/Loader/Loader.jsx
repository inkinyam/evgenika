import './Loader.scss';
import PropTypes from 'prop-types';

const Loader =({isLoading}) => {
  const loaderClassList = isLoading? 'loader': 'loader loader_hidden'
  return(
    <div className={loaderClassList}>

      <div className='loader__spinner'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default Loader;