import './Blub.scss';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';


const Blub = ({x, y, width, height, blur, transformY}) => {

  const { ref, inView } = useInView({
    threshold: 0.3
  });

  const blubClassList = inView? 'blub active': 'blub';

  return (
    <div ref={ref}  
         className={blubClassList} 
         style={{
          top: `${y}%`,
          left: `${x}%`,
          width: `${width}px`,
          height: `${height}px`,
          filter: `blur(${blur}px)`,
          transform: `translateY(${-transformY}%)`,

        }}>
    </div>
  )
}


Blub.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  blur: PropTypes.number.isRequired,
  transformY: PropTypes.number.isRequired,
}


export default Blub;