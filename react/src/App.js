import './App.css';
import NavBar from './componnents/navBar';
import Footer from './componnents/Footer';
import { Provider } from 'react-redux';
import {storeAuth} from './reduxStores.js/AuthStore.js';
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
