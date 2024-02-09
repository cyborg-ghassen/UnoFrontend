import {Provider} from 'react-redux';
import {storeAuth} from './reduxStores.js/AuthStore.js';
import {ToastContainer} from 'react-toastify';
import {CloseButton} from 'components/common/Toast';
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes";

function App() {

    return (
        <div>
            <Provider store={storeAuth}>
                <Router basename={process.env.PUBLIC_URL}>
                    <AppRoutes />
                    <ToastContainer
                        closeButton={CloseButton}
                        icon={false}
                    />
                </Router>
            </Provider>
        </div>
    );
}

export default App;
