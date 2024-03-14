import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import LoginForm from './LoginForm';
import RegistrationForm from "./RegistrationForm";

const Login = () => {
    const [login, setLogin] = useState(true)

    return (
        <>
            <Flex justifyContent="between" alignItems="center" className="mb-2">
                <h5>{login ? "Se Connecter" : "Créer un compte"}</h5>
                <p className="fs--1 text-600 mb-0">
                    {login ? "ou" : "Avoir un compte?"} <Link onClick={() => setLogin(!login)}>{login ? "Créer un compte" : "Se Connecter"}</Link>
                </p>
            </Flex>
            {login ? <LoginForm hasLabel /> : <RegistrationForm setLogin={setLogin} hasLabel />}
        </>
    );
}

export default Login;
