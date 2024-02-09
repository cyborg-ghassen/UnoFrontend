import {Container, Nav} from "react-bootstrap";
import React, {useEffect} from "react";
import handleNavbarTransparency from "../../helpers/handleNavbarTransparency";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";
import Section from "../../components/common/Section";
import Flex from "../../components/common/Flex";

const CategoryBanner = () => {

    useEffect(() => {
        window.addEventListener('scroll', handleNavbarTransparency);
        return () => window.removeEventListener('scroll', handleNavbarTransparency);
    }, []);

    return (
        <Section
            className="py-6 overflow-hidden light"
            position="center"
            overlay
        >
            <Flex justifyContent={"between"} alignItems={"center"}>
                <Nav navbar>

                    <Nav.Item>
                        <Nav.Link
                            className={"text-primary me-2"}
                            as={Link}
                            to="#contact"
                        >
                            Promotion
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            className={"bg-transparent btn-primary text-primary ms-2"}
                        >
                            Hygiène et Beauté
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            className={"text-primary me-2"}
                            as={Link}
                            to="#contact"
                        >
                            Promotion
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            className={"text-primary me-2"}
                            as={Link}
                            to="#contact"
                        >
                            Maison et extérieur
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            className={"text-primary me-2"}
                            as={Link}
                            to="#contact"
                        >
                            Promotion
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            className={"text-primary me-2"}
                            as={Link}
                            to="#contact"
                        >
                            Promotion
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            className={"text-primary me-2"}
                            as={Link}
                            to="#contact"
                        >
                            Promotion
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            className={"text-primary me-2"}
                            as={Link}
                            to="#contact"
                        >
                            Promotion
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            className={"text-primary me-2"}
                            as={Link}
                            to="#contact"
                        >
                            Promotion
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            className={"text-primary me-2"}
                            as={Link}
                            to="#contact"
                        >
                            Promotion
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            className={"text-primary me-2"}
                            as={Link}
                            to="#contact"
                        >
                            Promotion
                        </Nav.Link>
                    </Nav.Item>

                </Nav>
            </Flex>
        </Section>
    )
}

export default CategoryBanner