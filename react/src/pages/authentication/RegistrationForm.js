import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
import {Button, Form, Row, Col} from 'react-bootstrap';
import {api} from "../../utils/api";
import FormError from "../errors/FormError";

const RegistrationForm = ({hasLabel, setLogin}) => {
    // State
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        isAccepted: false
    });
    const [errors, setErrors] = useState({})
    const PostReq = () => {
        return new Promise(async (resolve, reject) => {
            var data = await api.post("/auth/register/", {
                is_active: true,
                username: formData.username,
                email: formData.email,
                password: formData.password
            }).catch((e) => {
                reject("error to register00000000000")
                setErrors(e?.response?.data)
            })
            if (data?.status === 201) {
                resolve(200)
            }
        })
    }

    // Handler
    const handleSubmit = e => {
        e.preventDefault();
        PostReq().then((e) => {
            setLogin(true)
            toast.success(`Successfully registered as ${formData.username}`, {
                theme: 'colored'
            });
        })
            .catch((e) => {
                toast.error(`${e}`, {
                    theme: 'colored'
                });
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
                {hasLabel && <Form.Label>Nom d'utilisateur</Form.Label>}
                <Form.Control
                    placeholder={!hasLabel ? 'Nom d\'utilisateur' : ''}
                    value={formData.username}
                    name="username"
                    onChange={handleFieldChange}
                    type="text"
                />
                <FormError error={errors?.username}/>
            </Form.Group>

            <Form.Group className="mb-3">
                {hasLabel && <Form.Label>Adresse e-mail</Form.Label>}
                <Form.Control
                    placeholder={!hasLabel ? 'Adresse e-mail' : ''}
                    value={formData.email}
                    name="email"
                    onChange={handleFieldChange}
                    type="text"
                />
                <FormError error={errors?.email}/>
            </Form.Group>

            <Row className="g-2 mb-3">
                <Form.Group as={Col} sm={12}>
                    {hasLabel && <Form.Label>Mot de passe</Form.Label>}
                    <Form.Control
                        placeholder={!hasLabel ? 'Mot de passe' : ''}
                        value={formData.password}
                        name="password"
                        onChange={handleFieldChange}
                        type="password"
                    />
                </Form.Group>
                <FormError error={errors?.password}/>
            </Row>

            <Form.Group className="mb-4">
                <Button
                    className="w-100"
                    type="submit"
                >
                    Registre
                </Button>
                <FormError error={errors?.detail}/>
            </Form.Group>
        </Form>
    );
};

RegistrationForm.propTypes = {
    hasLabel: PropTypes.bool
};

export default RegistrationForm;
