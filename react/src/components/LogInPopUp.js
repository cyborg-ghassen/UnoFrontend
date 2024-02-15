import {Card, Modal} from "react-bootstrap";
import Login from "../pages/authentication/Login";

export const LogInPopUp = ({closePopUp}) => {
    return (
        <Modal show={true} onHide={() => closePopUp()} centered size={"md"}>
            <Modal.Body>
                <Card className="navbar-card-login shadow-none">
                    <Card.Body className="fs--1 fw-normal p-4">
                        <Login/>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal>
    )
}