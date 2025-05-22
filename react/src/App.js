import {useSelector} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import {useEffect} from 'react';
import AppRoutes from "./routes";
import {LogInPopUp} from 'components/LogInPopUp';
import {useState} from 'react';

function App() {
    const [ForceToauthenticate, setForceToauthenticate] = useState(false)
    const AuthenticatedOrNot = useSelector((state) => state.Auth.value)
    const OpenAuth = () => {
        setForceToauthenticate(true)
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function openAuthPopUp() {

        await sleep(3000);
        if (!AuthenticatedOrNot) {
            setForceToauthenticate(true)
        }
    }

    const handleClose = () => {
        setForceToauthenticate(false)
        if (!AuthenticatedOrNot) {
            openAuthPopUp()
        }
    }
    useEffect(() => {
        openAuthPopUp()
    }, []);

    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <AppRoutes OpenAuth={OpenAuth}/>
                {(!AuthenticatedOrNot && ForceToauthenticate) &&
                    <LogInPopUp closePopUp={handleClose}/>
                }
            </Router>
        </div>
    );
}

export default App;
