import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {toast} from 'react-toastify';
import {api, setAuthToken} from "../../utils/api";
import {setTrue} from "../../reduxStores.js/authSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import FormError from "../errors/FormError";

const LoginForm = ({hasLabel, layout}) => {
    // State
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        remember: false
    });
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getToken = () => {
        return new Promise(async (resolve, reject) => {
            var data = await api.post('/auth/login/', {username: formData.username, password: formData.password})
                .catch((e) => {
                    console.log(e)
                    setErrors(e?.response?.data)
                    reject(e.response.data.detail)
                })
            if (data) {
                console.log(data.data.detail)
                if (data.status !== 200) {
                    reject(data.data.detail)
                }
                if (data.data.token == null) {
                    reject(data.data.detail)
                } else {
                    resolve(data.data.token)
                }
            } else {
                reject("something want wrong.Try again")

            }
        })
    }

    // Handler
    const handleSubmit = e => {
        e.preventDefault();
        getToken().then((token) => {
            setAuthToken(token)
            dispatch(setTrue())
            console.log("we set the ture value")
            localStorage.setItem('Token', token);
            navigate("/")
            toast.success(`Logged in as ${formData.username}`, {
                theme: 'colored'
            });
        }).catch((msg) => {
            console.log(msg)
            toast.error(`${msg}`, {theme: "colored"})
        })
    };

    const handleFieldChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                {hasLabel && <Form.Label>Username</Form.Label>}
                <Form.Control
                    placeholder={!hasLabel ? 'Username' : ''}
                    value={formData.username}
                    name="username"
                    onChange={handleFieldChange}
                    type="username"
                />
                <FormError error={errors?.username} />
            </Form.Group>

            <Form.Group className="mb-3">
                {hasLabel && <Form.Label>Password</Form.Label>}
                <Form.Control
                    placeholder={!hasLabel ? 'Password' : ''}
                    value={formData.password}
                    name="password"
                    onChange={handleFieldChange}
                    type="password"
                />
                <FormError error={errors?.password} />
            </Form.Group>

            <Row className="justify-content-between align-items-center">
                <Col xs="auto">
                    <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                        <Form.Check.Input
                            type="checkbox"
                            name="remember"
                            checked={formData.remember}
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    remember: e.target.checked
                                })
                            }
                        />
                        <Form.Check.Label className="mb-0 text-700">
                            Remember me
                        </Form.Check.Label>
                    </Form.Check>
                </Col>
            </Row>

            <Form.Group>
                <Button
                    type="submit"
                    color="primary"
                    className="mt-3 w-100"
                >
                    Log in
                </Button>
                <FormError error={errors?.detail} />
            </Form.Group>

        </Form>
    );
};

LoginForm.propTypes = {
    layout: PropTypes.string,
    hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
    layout: 'simple',
    hasLabel: false
};

export default LoginForm;
