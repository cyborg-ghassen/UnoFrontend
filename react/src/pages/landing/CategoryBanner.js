import {Col, Nav, Navbar, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import handleNavbarTransparency from "../../helpers/handleNavbarTransparency";
import Section from "../../components/common/Section";
import useQuery from "../../hooks/useQuery";
import {api} from "../../utils/api";
import "./styles.css"
import NavbarDropdown from "../../components/navbar/top/NavbarDropdown";
import NavbarNavLink from "../../components/navbar/top/NavbarNavLink";

const The2ndNavBar = () => {
    const [categories, setCategories] = useState([])
    let query = useQuery()

    const getCategories = async () => {
        api.get(`/setting/link/?${query.toString()}`).then(res => {
                setCategories(res?.data?.results)
            }
        )
    }

    useEffect(() => {
        getCategories()
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleNavbarTransparency);
        return () => window.removeEventListener('scroll', handleNavbarTransparency);
    }, []);
    const HTMLClassList = document.getElementsByTagName('html')[0].classList;

    let time = null;

    const handleMouseEnter = () => {
        time = setTimeout(() => {
            HTMLClassList.add('navbar-vertical-collapsed-hover');
        }, 100);
    };

    const handleMouseLeave = () => {
        clearTimeout(time);
        HTMLClassList.remove('navbar-vertical-collapsed-hover');
    };

    return (
        <Section
            className="i4 py-0 content-center light"
            position="center"
            overlay
        >
            <Navbar expand={"lg"}>
                <Navbar.Collapse onMouseEnter={handleMouseEnter}
                                 onMouseLeave={handleMouseLeave}>
                    <Nav navbar justify={true} >
                        {categories?.slice(0, 4)?.map((category, index) => (
                            <BarCategories data={category} key={index}/>
                        ))}
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Section>
    )
}
const BarCategories = ({
                           data, key
                       }) => {
    return (
        <NavbarDropdown title={data?.name} key={key} >
            <Row>
                {data?.sublink_set?.map((items) => (
                    <Col xs={6} xxl={4}>
                        <Nav className="flex-column">
                            <>
                                <NavbarNavLink title={items?.name}/>
                                {items?.categories_set?.map((item) => (
                                    <NavbarNavLink href={`/products?category=${item?.id}`} route={item}>
                                        {item?.name}
                                    </NavbarNavLink>
                                ))}
                            </>

                        </Nav>
                    </Col>
                ))}
            </Row>
        </NavbarDropdown>
    )
}
const CategoryBanner = () => {

    return (
        <The2ndNavBar/>
    )
}

export default CategoryBanner