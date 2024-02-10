import {Nav} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import handleNavbarTransparency from "../../helpers/handleNavbarTransparency";
import {Link} from "react-router-dom";
import Section from "../../components/common/Section";
import Flex from "../../components/common/Flex";
import useQuery from "../../hooks/useQuery";
import {api} from "../../utils/api";
import "./styles.css"

const CategoryBanner = () => {
    const [categories, setCatergories] = useState(["Promotion","Promotion","Promotion","Promotion"])

    let query = useQuery()

    const getCategories = async () => {
        api.get(`/product/category/?${query.toString()}`).then(res => 
            // setCatergories(prevstate=>{
            // [...prevstate,...res?.data?.results]}
            // )
            {}
            )
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
            className="i4 py-3 overflow-hidden content-center light"
            position="center"
            overlay
        >
            <Flex className={"i5"} justifyContent={"center"} alignItems={"center"}>
                <Nav navbar className="justify-content-center" >
                    {categories?.slice(0, 11).map((category, index) => (
                        <Nav.Item key={index}>
                            <Nav.Link
                                className={"text-white text-center me-2"}
                                as={Link}
                                to="#contact"
                            >
                                {category}
                                
                            </Nav.Link>
                                
                        </Nav.Item>
                    ))}

                </Nav>
            </Flex>
        </Section>
    )
}

export default CategoryBanner