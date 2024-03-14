import {Card, Col, Modal, Row, Image} from "react-bootstrap";
import Login from "../pages/authentication/Login";
import plant from "assets/img/plant.jpg"

export const LogInPopUp = ({closePopUp}) => {
    return (
        <Modal show={true} onHide={() => closePopUp()} centered size={"xl"}>
            <Modal.Body>
                <Card className="navbar-card-login shadow-none">
                    <Card.Body className="fs--1 fw-normal p-4">
                        <Row>
                            <Col lg={6}>
                                <Login/>
                            </Col>
                            <Col lg={6}>
                                <Image src={plant} width={"100%"} height={"100%"} className={"img-thumbnail"} style={{
                                    backgroundSize: "cover",
                                    position: "relative"
                                }} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal>
    )
}