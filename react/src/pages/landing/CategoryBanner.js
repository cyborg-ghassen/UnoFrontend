import {Nav} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import handleNavbarTransparency from "../../helpers/handleNavbarTransparency";
import {Link} from "react-router-dom";
import Section from "../../components/common/Section";
import useQuery from "../../hooks/useQuery";
import {api} from "../../utils/api";
import "./styles.css"

const The2ndNavBar = ({sendDataToParent, sendContentToParent}) => {
    const [categories,] = useState(["Promotion", "Hygiène et beauté", "Promotion", "Maison exteriors"])
    const [Bar, setBar] = useState(false)
    let query = useQuery()
    const sendData = () => {
        // const data = 'Hello from Child!';
        sendDataToParent(Bar);
    };
    const sendDataContnet = (a) => {
        // const data = 'Hello from Child!';
        sendContentToParent(a);
    };
    const getCategories = async () => {
        api.get(`/product/category/?${query.toString()}`).then(res =>
                // setCatergories(prevstate=>{
                // [...prevstate,...res?.data?.results]}
                // )
            {
            }
        )
    }
    const dataToNav = {
        title: "hygiène et beauté",
        subCategorys: [
            {
                SubTitle: "En Promotion",
                categories: ["Shampooing", "Gel douche", "Dentifrice"]
            },
            {
                SubTitle: "Soins de la peau",
                categories: ["Crème hydratante", "Nettoyant visage", "Masque facial"]
            },
            {
                SubTitle: "Maquillage",
                categories: ["Fond de teint", "Mascara", "Rouge à lèvres"]
            },
            {
                SubTitle: "Maquillage",
                categories: ["Fond de teint"
                    , "Mascara", "Rouge à lèvres"
                    , "Mascara", "Rouge à lèvres"
                    , "Mascara", "Rouge à lèvres"
                ]
            },
            {
                SubTitle: "Maquillage",
                categories: ["Fond de teint", "Mascara", "Rouge à lèvres"]
            },
            {
                SubTitle: "Maquillage",
                categories: ["Fond de teint", "Mascara", "Rouge à lèvres"]
            }
        ]
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
            className="i4 py-3 overflow-hidden content-center light"
            position="center"
            overlay
        >
            {/* <Flex className={"i5"} justifyContent={"center"} alignItems={"center"}> */}
            <Nav navbar className="i5">
                {categories?.slice(0, 11).map((category, index) => (
                    <Nav.Item key={index}>
                        <Nav.Link
                            className={"text-white text-center me-2"}
                            as={Link}
                            to="#contact"
                            onClick={() => {
                                setBar(!Bar);
                                sendData();
                                sendDataContnet(dataToNav)
                            }}
                        >
                            {category}

                        </Nav.Link>

                    </Nav.Item>
                ))}

            </Nav>
            {/* {Bar &&
                <BarCategorys visible={Bar}/>
                } */}

            {/* <div className="i22"></div> */}
            {/* </Flex> */}
        </Section>
    )
}
const BarCategorys = ({visible, data}) => {
    console.log("data", data)
    return (
        < Section
            className="i22 py-3 overflow-hidden content-center light"
        >
            <div alignItems="flex-start"
                 alignContents="flex-start"
                 flexWrap="wrap"
                 flexDirection="row">
                <div className="i25 p-2">
                    {data?.title}
                </div>
                <div className="oo">
                    {data?.subCategorys.map((items) => (

                        <div className="i26" alignItems="center" flexDirection="column">
                            {/* the is the title of the subCategory     */}
                            <div className="i27">{items?.SubTitle}</div>
                            {items?.categories.map((item) => (

                                <a className="i28" href={"#!"}>{item}</a>
                            ))}

                        </div>
                    ))}
                </div>

            </div>
        </Section>

    )
}
const CategoryBanner = () => {
    const [barSection, setbarSectionVisiblibity] = useState('');
    const [dataList, setDataList] = useState('')
    const handleDataFromChildToChild = (data) => {
        setbarSectionVisiblibity(data);
    };
    const handleDataContent = (data) => {
        setDataList(data);
    };
    return (
        <div className="i23">
            <The2ndNavBar
                sendDataToParent={handleDataFromChildToChild}
                sendContentToParent={handleDataContent}/>
            {barSection &&

                <BarCategorys visible={barSection} data={dataList}/>
            }

        </div>
    )
}

export default CategoryBanner