import {Card, Col, Modal, Row} from "react-bootstrap";
import Login from "../pages/authentication/Login";

export const LogInPopUp = ({closePopUp}) => {
    return (
        <Modal show={true} onHide={() => closePopUp()} centered size={"lg"}>
            <Modal.Body>
                <Card className="navbar-card-login shadow-none">
                    <Card.Body className="fs--1 fw-normal p-4">
                        <Row>
                            <Col lg={6}>
                                <Login/>
                            </Col>
                            <Col lg={6}>

                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal>
    )
}