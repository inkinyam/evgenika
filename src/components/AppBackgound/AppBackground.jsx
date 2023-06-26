import Blub from '../Blub/Blub';
import React from 'react';
import PropTypes from 'prop-types';


const AppBackground = ({children, isLoading}) => {
  const [parallaxSpeed, setParallaxSpeed] = React.useState(0.01);

    React.useEffect(()=> {
      window.addEventListener('scroll', ()=> {
        setParallaxSpeed(window.pageYOffset*.1)
      })
    },[]) 

 
  const appClassList = isLoading? 'app app_hidden': 'app';
  return(
    <div className={appClassList}>

      {children}

      <Blub  x={2}  y={14}   width={140} height={120} blur={30}  transformY={parallaxSpeed*0.6}/>
      <Blub  x={84} y={42}  width={50}  height={50}  blur={12}  transformY={parallaxSpeed*0.2}/>
      <Blub  x={20} y={100} width={100} height={100} blur={120} transformY={parallaxSpeed*1.1} />
      <Blub  x={80} y={135} width={80}  height={140} blur={20}  transformY={parallaxSpeed*0.3}/>
      <Blub  x={8}  y={173} width={220} height={230} blur={30}  transformY={parallaxSpeed}/>
      <Blub  x={75} y={234} width={90}  height={112} blur={30}  transformY={parallaxSpeed*0.6}/>
      <Blub  x={1}  y={279} width={380} height={324} blur={100} transformY={parallaxSpeed*0.9}/>
      <Blub  x={12} y={326} width={220} height={240} blur={50}  transformY={parallaxSpeed}/>
      <Blub  x={50} y={402} width={420} height={440} blur={77}  transformY={parallaxSpeed*0.4}/>
      <Blub  x={-1} y={483} width={313} height={350} blur={55}  transformY={parallaxSpeed*1.1}/>
      <Blub  x={76} y={515} width={280} height={310} blur={70}  transformY={parallaxSpeed*0.3}/>
      <Blub  x={2}  y={591} width={200} height={140} blur={40}  transformY={parallaxSpeed*0.6}/>
    </div>
  )
}


AppBackground.propTypes = {
  children: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default AppBackground;

