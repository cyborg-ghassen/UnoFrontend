import React, {useEffect, useState} from "react"
import "./Style/ProductMapStyle.css"
import "./styling.css"
import Judy from './assetes/Judy2.jpg';
import {Link, useParams, useNavigate, useLocation} from 'react-router-dom';

import {Filltre} from "./filtre";
import useQuery from "../utils/useQuery";
import {api} from "../utils/api";
// const { id } = useParams();

// Scroll to the top when the component mounts

const ProductMap = () => {
    const [myList, setMyList] = useState([]);

    const navigate = useNavigate();
    let query = useQuery();

    const getProducts = async (query) => {
        return (await api.get(`/product/product/?${query.toString()}`)).data
    }

    useEffect(() => {
        getProducts(query).then(res => setMyList(res?.results))
    }, []);


    //   const pagination=[0,1,2,3,4]
    const nbPage = 10
    const Curent = 1
    var listPage = []
    var i
    var k = 1
    const reglePagination = (win) => {

        // if (win !== 0 && listPage[listPage.length - 1] !== nbPage) {
        //     listPage = []
        //     for (let i = win + 1; i <= nbPage && k !== 4; i++) {
        //         listPage.push(i);
        //         k++;
        //     }
        // }
        // setMyList([...listPage]);
    };
    const handleNavigation = (page) => {
        query.set('page', page.toString());
        const newSearch = query.toString();
        navigate(newSearch);
    };

    useEffect(() => {


        // reglePagination(Curent)

    }, []);
    console.log(listPage)
    // console.log(i)
    //   const checkPromo=(p)=>{
    //     return p!==0;
    //   }

    return (<div className="Am">
            <div className="theImg"></div>
            <Filltre getProducts={getProducts}/>
            <div className="theProducts">
                <div className="theTitle">
                    <div className="klem">Daily Deals</div>
                    <a href="">In Uno</a>
                </div>
                <div className="Products">
                    {myList?.map(item => (
                        // <li key={item.id}>{item.name}</li>
                        <div className="TheCart">
                            <div className="ThePic">
                                <img src={Judy} alt=""/>
                                {/* <!-- <div className="offre">-10%</div> --> */}
                                {/* {checkPromo(item.promo) &&( */}
                                {item?.promotion != 0 && (


                                    <div className="Promo">Promo <label for=""
                                        //  style="color: white;"
                                    >-{item?.promotion}%</label></div>
                                )
                                }

                            </div>
                            <div className="Name">{item?.name}</div>
                            <div className="Name UU">{item?.description}</div>
                            <div className="Price">
                                <div>Price:</div>
                                <div>{item?.price} dt</div>
                                {/* <!-- <div className="Promo">Promo <label for="" style="color: white;">-10%</label> </div> --> */}
                            </div>
                            <Link to={"/Product/" + item?.id}>

                                <button>Buy</button>
                            </Link>

                        </div>
                    ))}

                </div>
            </div>
            <div className="Pagination">
                <div className="TheButtons">

                    <button onClick={() => {
                        reglePagination(Curent - 1)
                    }}>{"<"}</button>
                    {/*{myList?.map(item => (*/}

                    {/*    <button onClick={() => {*/}
                    {/*        handleNavigation(item)*/}
                    {/*    }}>{item}</button>*/}
                    {/*))*/}
                    {/*}*/}
                    <button onClick={() => {
                        reglePagination(Curent + 1)
                    }}>{">"}</button>
                </div>
            </div>
        </div>

    )
}
export default ProductMap;