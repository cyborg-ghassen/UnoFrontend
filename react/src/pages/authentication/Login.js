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
                <h5>{login ? "Log in" : "Register"}</h5>
                <p className="fs--1 text-600 mb-0">
                    {login ? "or" : "Have an account?"} <Link onClick={() => setLogin(!login)}>{login ? "Create an account" : "Login"}</Link>
                </p>
            </Flex>
            {login ? <LoginForm /> : <RegistrationForm setLogin={setLogin} />}
        </>
    );
}

export default Login;
