import './App.scss';
import Header from './components/shared/Header/Header';
import Home from './components/shared/Home/Home';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout } from './components/shared/Layout/Layout';




function App() {
  return (
 
    <Router>
    <Routes>
    
    <Route path='/' element={<Layout/>}>
    <Route path="/" element={<Home/>} />
    </Route>
      
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
 
    </Routes>
  </Router>
 
  );
}

export default App;
