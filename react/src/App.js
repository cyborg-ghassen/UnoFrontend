import logo from './logo.svg';
import './App.css';
import NavBar from './componnents/navBar';
import Footer from './componnents/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {LandingPage} from './componnents/landingPage';
import ProductMap from './componnents/ProductMap';
import {TheItemRendring , AllthePage} from './componnents/OneItemToBy';
import { Panier } from './componnents/Panier';
import { LogIn } from './componnents/LogIn';
import { useEffect } from 'react';
import { PageNotFound } from './componnents/PageNotFount';
import { Provider } from 'react-redux';
import {storeAuth} from './reduxStores.js/AuthStore.js';
import { Magazine } from './componnents/Magazine.jsx';
import { Register } from './componnents/Register.jsx';
import { Myrouters } from './componnents/routres.jsx';

function App() {
	
  return (
    <div>
<Provider store={storeAuth}>
    <NavBar/>
    {/* <Link to={}>a</Link> */}
    
    <Myrouters/>
    <Footer/>
  </Provider>
    </div>
    
    );
}

export default App;
