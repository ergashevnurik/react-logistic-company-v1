import {BrowserRouter as Router} from 'react-router-dom'
import About from './components/About';
import Card from './components/Card';
import Contacts from './components/Contacts';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { AboutData } from './Data/AboutData';
import { ContactData } from './Data/ContactData';
import { HeroData } from './Data/Data';

function App() {
  return (
    <>
      <Router>
       <Navbar />
       <Hero {...HeroData} />
       <Card />
       <About {...AboutData} />
       <Contacts {...ContactData} />
       {/* <Footer />*/}
      </Router>
    </>
  );
}

export default App;
