import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import handleNavbarTransparency from "../../helpers/handleNavbarTransparency";
import Section from "../../components/common/Section";
import useQuery from "../../hooks/useQuery";
import {api} from "../../utils/api";
import "./styles.css"
import Flex from "../../components/common/Flex";

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

    return (
        <Section
            className="i4 py-0 overflow-visible content-center light"
            position="center"
            overlay
        >
            <Navbar expand={"lg"}>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={"i5"} navbar>
                        {categories?.slice(0, 4)?.map((category, index) => (
                            <BarCategories data={category} key={index}/>
                        ))}
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Section>
    )
}
const BarCategories = ({data, key}) => {
    return (
        <NavDropdown title={data?.name} key={key} className={"i22 text-white text-center me-2"}>
            <p className={"i25 p-2 bg-primary"}>{data?.name}</p>
            <Nav.Item className={"oo"}>
                {data?.sublink_set?.map((items) => (
                    <div className={"w-100"}>
                        <div className="i27 p-2">{items?.name}</div>
                        {items?.categories_set?.map((item) => (
                            <NavDropdown.Item title={item?.name} className="i28"
                                              href={`/products?category=${item?.id}`}>
                                {item?.name}
                            </NavDropdown.Item>
                        ))}
                    </div>
                ))}
            </Nav.Item>
        </NavDropdown>
    )
}
const CategoryBanner = () => {

    return (
        <div className="i23">
            <The2ndNavBar/>
        </div>
    )
}

export default CategoryBanner