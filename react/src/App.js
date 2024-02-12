import {Provider, useSelector} from 'react-redux';
import {storeAuth} from './reduxStores.js/AuthStore.js';
import {ToastContainer} from 'react-toastify';
import {CloseButton} from 'components/common/Toast';
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes";
import { LogInPopUp } from 'componnents/LogIn.jsx';
import { useState } from 'react';

function App() {
    const [ForceToauthenticate,setForceToauthenticate]=useState(false)
    const AuthenticatedOrNot = useSelector((state) => state.Auth.value)
    const OpenAuth=()=>{
        setForceToauthenticate(true)
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    async function openAuthPopUp() {
        
        await sleep(3000);
        if (!AuthenticatedOrNot){
           setForceToauthenticate(true)
        }
    }
    const handleClose=()=>{
        setForceToauthenticate(false)
        if (!AuthenticatedOrNot){
            openAuthPopUp()
        }
    } 
    openAuthPopUp()
    return (
        <div>
               <Router basename={process.env.PUBLIC_URL}>
                    <AppRoutes OpenAuth={OpenAuth} />
                    <ToastContainer
                        closeButton={CloseButton}
                        icon={false}
                    />
                </Router>
                {(!AuthenticatedOrNot && ForceToauthenticate) &&
                    <LogInPopUp closePopUp={handleClose}/>
                }
            
        </div>
    );
}

export default App;
