import './App.scss';
import Lead from '../Lead/Lead';
import Navigations from '../Navigations/Navigations';
import About from '../About/About';
import Concerts from '../Concerts/Concerts';
import Tracks from '../Tracks/Tracks';

function App() {
  return(
    <>  
    <Lead/>
    <main>
      <Navigations/>
      <About/>
      <Concerts/>
      <Tracks/>

    </main>

   
    </>
  )
}

export default App
