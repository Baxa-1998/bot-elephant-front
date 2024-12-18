import './App.scss';


import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



import { lazy, Suspense, useEffect } from 'react';
import Preloader from './components/shared/Preloader/Preloader';







function App() {
 
  const Home = lazy(()=> import('./components/shared/Home/Home'))
  const Bought = lazy(()=> import('./components/pages/Bought/Bought'))
  const Buying = lazy(()=> import('./components/pages/Buying/Buying'))
  const Layout = lazy(()=> import('./components/shared/Layout/Layout'))
  const Profile = lazy(()=> import('./components/pages/Profile/Profile'))
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

    <Route path='/' element={<Suspense fallback={<Preloader/>}><Layout/></Suspense> }>
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
