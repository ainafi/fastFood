import React from 'react';
import Home from './pages/Home';
import TopMenu from './pages/TopMenu';
import Offre from './pages/Offre';
import Menu from './pages/Menu';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Navbar from './pages/components/Navbar';


const App = () => {
  return (
    <>
    <div className=''>
      <Navbar/>
      <Home/>
      <TopMenu/>
      <Offre/>
      <Menu/>
      <Service/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
    
      
    </>
  );
}

export default App;
