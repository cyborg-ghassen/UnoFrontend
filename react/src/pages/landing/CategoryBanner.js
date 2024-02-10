import {Nav} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import handleNavbarTransparency from "../../helpers/handleNavbarTransparency";
import {Link} from "react-router-dom";
import Section from "../../components/common/Section";
import Flex from "../../components/common/Flex";
import useQuery from "../../hooks/useQuery";
import {api} from "../../utils/api";

const CategoryBanner = () => {
    const [categories, setCatergories] = useState([])

    let query = useQuery()

    const getCategories = async () => {
        api.get(`/product/category/?${query.toString()}`).then(res => setCatergories(res?.data?.results))
    }

    useEffect(() => {
        getCategories()
    }, []);

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
                    {categories?.slice(0, 11).map((category, index) => (
                        <Nav.Item key={index}>
                            <Nav.Link
                                className={"text-primary me-2"}
                                as={Link}
                                to="#contact"
                            >
                                {category?.name}
                            </Nav.Link>
                        </Nav.Item>
                    ))}

                </Nav>
            </Flex>
        </Section>
    )
}

export default CategoryBanner