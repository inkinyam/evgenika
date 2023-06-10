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
import React from 'react';

import api from '../../api-utils/API';

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
           .catch((err) => console.log(err))       
    }, [])

  return(
    <>  
      <Lead data = {promoCards}/>
      <main>
        <Navigations/>
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
    </>
  )
}

export default App
