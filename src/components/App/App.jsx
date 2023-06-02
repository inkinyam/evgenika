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

function App() {
  return(
    <>  
      <Lead/>
      <main>
        <Navigations/>
        <About/>
        <Concerts/>
        <Tracks/>
        <News/>
        <Videos/>
        <Guides/>
      </main>
      <Footer/>
    </>
  )
}

export default App
