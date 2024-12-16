import './App.scss';

import Home from './components/shared/Home/Home';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout } from './components/shared/Layout/Layout';
import Profile from './components/pages/Profile/Profile';
import Buying from './components/pages/Buying/Buying';
import { useEffect } from 'react';
import Bought from './components/pages/Bought/Bought';





function App() {

  const telegram = window.Telegram.WebApp; 



  useEffect(() => {
    
    telegram.expand();
    telegram.disableVerticalSwipes();
    telegram.setBackgroundColor('#fff');
    telegram.setHeaderColor('#000');
  }, []);
  return (
 
    <Router>
    <Routes>
    
    <Route path='/' element={<Layout/>}>
    <Route path="/" element={<Home/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/buying" element={<Buying/>} />
    <Route path='/bought' element={<Bought/>}/>
    </Route>
      
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
 
    </Routes>
  </Router>
 
  );
}

export default App;
