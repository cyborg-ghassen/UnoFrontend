import logo from './logo.svg';
import './App.css';
import NavBar from './componnents/navBar';
import Footer from './componnents/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {LandingPage} from './componnents/landingPage';
import ProductMap from './componnents/ProductMap';
import {TheItemRendring , AllthePage} from './componnents/OneItemToBy';

function App() {

  return (
    <div>
    <NavBar/>
    {/* <Link to={}>a</Link> */}
    <Router>
      		<Routes>
        		<Route path="/home" element={<LandingPage />} />
        		<Route path="/Products" element={<ProductMap />} />
        		<Route path="/Product/:id" element={<AllthePage />} />
        		{/* <Route path="/about" element={<Banner />} /> */}
      		</Routes>
   	 </Router>
    <Footer/>
    </div>
    
    );
}

export default App;
