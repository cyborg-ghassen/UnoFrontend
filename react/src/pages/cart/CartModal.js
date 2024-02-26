import React, {useContext, useState} from 'react';
import {Col, Modal, Row, Button, Image, Form} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, useNavigate} from 'react-router-dom';
import Flex from 'components/common/Flex';
import IconButton from 'components/common/IconButton';
import AppContext from 'context/Context';
import {api} from "../../utils/api";
import {toast} from "react-toastify";
import {resetBasket} from "../../reduxStores.js/authSlice";
import {useDispatch, useSelector} from "react-redux";
import FormError from "../errors/FormError";

const CartModal = ({show, setShow, cartItems}) => {
    const [type] = useState(1)
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        type: "physic",
        status: "draft",
        full_name: "",
        email: "",
        address: "",
        phone: "",
        notes: "",
    })

    const {
        config: {isDark}
    } = useContext(AppContext);
    const bas = useSelector((state) => state.Auth.basket);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (target) => {
        setFormData({...formData, [target.name]: target.value})
    }

    const handleClose = () => {
        setShow(!show)
    };

    const dataTosend = () => {
        return bas.map(item => ({
            product: item.id,
            quantity: item.Quantity
        }));
    }

    const headers = {
        'Authorization': "Bearer " + localStorage.getItem("Token"),

    };
    const axiosConfig = {
        headers: headers,

    };

    const sendCommand = () => {

        return new Promise(async (resolve, reject) => {

            await api.post("/order/order/",
                {
                    items: dataTosend(),
                    ...formData
                }, axiosConfig
            ).then((data) => {
                resolve(data)
            }).catch((e) => {
                reject(e)
            })
        })
    }

    function delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    const resetTheBasket=()=>{
        dispatch(resetBasket())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendCommand().then(() => {

            // is the case of code staus==200
            toast.success("Order added with success we will contact you as soon as possible.", {theme: "colored"})
            setFormData({
                type: "physic",
                status: "draft",
                full_name: "",
                email: "",
                address: "",
                phone: "",
                notes: "",
            })
            delay(3000).then(() => {
                resetTheBasket()
                navigate("/")
            });
        }).catch((e) => {
            setErrors(e?.response?.data)
            toast.error("Something went wrong.", {theme: "colored"})
        })
    }

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header
                closeButton
                closeVariant={isDark ? 'white' : null}
                className="border-200"
            >
                <Modal.Title as="h5">
                    <Flex alignItems="center">
                        <div className="icon-item bg-soft-success shadow-none">
                            <FontAwesomeIcon icon="cart-plus" className="text-success"/>
                        </div>
                        <div className="ms-2">
                            Vous venez d'ajouter {cartItems?.length} élément
                            {cartItems?.length === 1 ? '' : 's'}
                        </div>
                    </Flex>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems?.map(item => (
                    <Row className="g-0 mt-3 align-items-center">
                        <Col>
                            <Flex alignItems="center">
                                <Link to={`/products/${item?.product?.id}`}>
                                    <Image
                                        src={item?.product?.image_url}
                                        rounded
                                        className="me-3 d-none d-md-block"
                                        width="80"
                                        alt="product image"
                                    />
                                </Link>
                                <div className="flex-1">
                                    <h5 className="fs-0">
                                        <Link
                                            to={`/products/${item?.product.id}`}
                                            className="text-900"
                                        >
                                            {item?.product?.name}
                                        </Link>
                                    </h5>
                                </div>
                            </Flex>
                        </Col>
                        <Col sm="auto" className="ps-sm-3 d-none d-sm-block">
                            {parseFloat(item?.individual_price)?.toFixed(3)} TND
                        </Col>
                    </Row>
                ))}
                <Form className={"mt-3"}>
                    <Form.Group>
                        <Form.Label>Nom et prénom:</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={formData.full_name}
                            onChange={({target}) => handleChange(target)}
                            name={"full_name"}
                            placeholder={"Nom et prénom"}
                        />
                        <FormError error={errors.full_name} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control
                            type={"email"}
                            value={formData.email}
                            onChange={({target}) => handleChange(target)}
                            name={"email"}
                            placeholder={"E-mail"}
                        />
                        <FormError error={errors.email} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Numéro de téléphone:</Form.Label>
                        <Form.Control
                            type={"number"}
                            value={formData.phone}
                            onChange={({target}) => handleChange(target)}
                            name={"phone"}
                            placeholder={"Numéro de téléphone"}
                        />
                        <FormError error={errors.phone} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Adresse:</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={formData.address}
                            onChange={({target}) => handleChange(target)}
                            name={"address"}
                            placeholder={"Adresse"}
                        />
                        <FormError error={errors.address} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Remarques:</Form.Label>
                        <Form.Control
                            type={"text"}
                            value={formData.notes}
                            onChange={({target}) => handleChange(target)}
                            name={"notes"}
                            placeholder={"Remarques"}
                        />
                        <FormError error={errors.notes} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            {type !== 'remove' && (
                <Modal.Footer className="border-200">
                    <Button
                        size="sm"
                        onClick={handleClose}
                        variant="secondary"
                    >
                        Fermer
                    </Button>
                    <IconButton
                        size="sm"
                        className="ms-2"
                        icon="chevron-right"
                        variant="primary"
                        iconAlign="right"
                        onClick={handleSubmit}
                    >
                        Passer la commande
                    </IconButton>
                </Modal.Footer>
            )}
        </Modal>
    );
};

export default CartModal;
