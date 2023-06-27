import './App.scss';
import Lead from '../Lead/Lead';
import {Navigations, NavigationsItem} from '../Navigations/Navigations';
import About from '../About/About';
import Concerts from '../Concerts/Concerts';
import Tracks from '../Tracks/Tracks';
import News from '../News/News';
import Videos from '../Videos/Videos';
import Guides from '../Guides/Guides';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import AppBackground from '../AppBackgound/AppBackground';

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
              },1); //TODO 2000
            })      
    }, [])


  return(
    <>
      <Loader isLoading={isLoading}/>
      <AppBackground isLoading={isLoading}>
        <Lead data   = {promoCards}  
              social = {socialCards}
              concerts = {concertCards}/>
        <main>
          <Navigations>
            <NavigationsItem link='#about' text='о певице'/>  
            { (concertCards.length > 0) && <NavigationsItem link='#concerts' text='Концерты'/> } 
            { (trackCards.length > 0) &&  <NavigationsItem link='#tracks' text='треки'/>  }
            { (publicationCards.length > 0) && <NavigationsItem link='#news' text='новости'/>  }
            { (videoCards.length > 0) &&  <NavigationsItem link='#videos' text='клипы'/>  }
            { (guidesCards.length > 0) &&<NavigationsItem link='#guides' text='гайды'/>  }
            <NavigationsItem link='#contacts' text='контакты'/>  
          </Navigations> 

          <About data = {aboutCards}/> 
          { (concertCards.length > 0) && <Concerts data = {concertCards}/> }
          { (trackCards.length > 0) && <Tracks data = {trackCards}/> }
          { (publicationCards.length > 0) && <News data = {publicationCards}/> }
          { (videoCards.length > 0) && <Videos data = {videoCards} social = {socialCards}/> }
          { (guidesCards.length > 0) && <Guides data = {guidesCards}/> }
        </main>
        
        <Footer concertContact = {concertContactCards}
                prContact      = {prContactCards}
                social         = {socialCards}/>

      </AppBackground>
    </>
  )
}

export default App
