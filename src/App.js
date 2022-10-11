
import './App.css';
import About from './sivut/About';
import ContactUs from './sivut/ContactUs';
import Home from './sivut/Home';
import NotFound from './sivut/NotFound';
import { Routes,Route } from 'react-router-dom'
import Navbar from './sivut/Navbar';
import Header from './sivut/Header';
import Footer from './sivut/Footer';


function App() {
  return (
    <img src="kuva.png" />
   /*  <>
    <Navbar />
    <Header />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>

    </div>
    <Footer/>
    </> */
  );
}

export default App;
