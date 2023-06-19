import './Loader.scss';
import PropTypes from 'prop-types';

const Loader =({isLoading}) => {
  const loaderClassList = isLoading? 'loader': 'loader loader_hidden'
  return(
    <div className={loaderClassList}>
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
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default Loader;