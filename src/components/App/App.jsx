import './App.scss';
import Lead from '../Lead/Lead';
import Navigations from '../Navigations/Navigations';
import About from '../About/About';
import Concerts from '../Concerts/Concerts';
import Tracks from '../Tracks/Tracks';
import News from '../News/News';
import Videos from '../Videos/Videos';
import Guides from '../Guides/Guides';
import Footer from '../Footer/Footer';
import Blub from '../Blub/Blub';
import React from 'react';

import api from '../../api-utils/API';
import Loader from '../Loader/Loader';


function App() {
  const [publicationCards, setPublicationCards] = React.useState([]);
  const [concertCards, setConcertsCards] = React.useState([]);
  const [trackCards, setTraksCards] = React.useState([]);
  const [videoCards, setVideosCards] = React.useState([]);
  const [guidesCards, setGuidesCards] = React.useState([]);
  const [aboutCards, setAboutCards] = React.useState({});
  const [promoCards, setPromoCards] = React.useState({});
  const [socialCards, setSocialCards] = React.useState({});
  const [concertContactCards, setConcertContactCards] = React.useState({});
  const [prContactCards, setPRtContactCards] = React.useState({});
  const [parallaxSpeed, setParallaxSpeed] = React.useState(0.01);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => { 
    Promise.all([  
        api.getPublicationData(), 
        api.getConcertsData(), 
        api.getTracksData(), 
        api.getVideosData(), 
        api.getGuidesData(), 
        api.getAboutData(), 
        api.getContacstData(), 
      ])
           .then(([
            publicationData, 
            concertData,
            tracksData,
            videosData,
            guidesData,
            aboutData,
            contactsData
           ]) => {
              setPublicationCards(publicationData); 
              setConcertsCards(concertData); 
              setTraksCards(tracksData); 
              setVideosCards(videosData); 
              setGuidesCards(guidesData); 
              setAboutCards(aboutData.about);
              setPromoCards(aboutData.promo);
              setSocialCards(contactsData.social);
              setConcertContactCards(contactsData['contact-block-1']);
              setPRtContactCards(contactsData['contact-block-2']);
            })
           .catch((err) => console.log("ERROR: API return:" + err)) 
           .finally(()=>{
              setTimeout(() => {
                setIsLoading(false);              
              }, 2500);
            })      
    }, [])

    React.useEffect(()=> {
      window.addEventListener('scroll', ()=> {
        setParallaxSpeed(window.pageYOffset*.1)
      })
    },[])

const appClassList = isLoading? 'app app_hidden': 'app';
  return(
    <>
    <Loader isLoading={isLoading}/>
    <div className={appClassList}>
      <Lead data   = {promoCards}  
            social = {socialCards}/>
      <main>
        <Navigations />
        <About    data   = {aboutCards}/>
        <Concerts data   = {concertCards}/>
        <Tracks   data   = {trackCards}/>
        <News     data   = {publicationCards}/>
        <Videos   data   = {videoCards} 
                  social = {socialCards}/>
        <Guides   data   = {guidesCards}/>
      </main>
      <Footer concertContact = {concertContactCards}
              prContact      = {prContactCards}
              social         = {socialCards}/>

        <Blub  x={2}  y={14}   width={140} height={120} blur={30}  transformY={parallaxSpeed*1.6}/>
        <Blub  x={84} y={42}  width={50}  height={50}  blur={12}  transformY={parallaxSpeed*2}/>
        <Blub  x={20} y={100} width={100} height={100} blur={120} transformY={parallaxSpeed*1.1} />
        <Blub  x={80} y={135} width={80}  height={140} blur={20}  transformY={parallaxSpeed*1.3}/>
        <Blub  x={8}  y={173} width={220} height={230} blur={30}  transformY={parallaxSpeed}/>
        <Blub  x={75} y={234} width={90}  height={112} blur={30}  transformY={parallaxSpeed*1.6}/>
        <Blub  x={1}  y={279} width={380} height={324} blur={100} transformY={parallaxSpeed*2}/>
        <Blub  x={12} y={326} width={220} height={240} blur={50}  transformY={parallaxSpeed}/>
        <Blub  x={50} y={402} width={420} height={440} blur={77}  transformY={parallaxSpeed*2}/>
        <Blub  x={-1} y={483} width={313} height={350} blur={55}  transformY={parallaxSpeed*1.1}/>
        <Blub  x={76} y={515} width={280} height={310} blur={70}  transformY={parallaxSpeed*1.3}/>
        <Blub  x={2}  y={591} width={200} height={140} blur={40}  transformY={parallaxSpeed*1.6}/>
          

        <Blub  x={39} y={644} width={313} height={350} blur={55}  transformY={parallaxSpeed*1.3}/>
        <Blub  x={91} y={659} width={120} height={150} blur={30} transformY={parallaxSpeed*1.2}/>
        <Blub  x={85} y={691} width={90}  height={112} blur={30}  transformY={parallaxSpeed*1.1}/>
        <Blub  x={20} y={710} width={120} height={130} blur={20}  transformY={parallaxSpeed*1.6}/>
      </div>
      
    </>
  )
}

export default App
