import React, {useEffect, useState} from "react"
// import { useLocation } from 'react-router-dom';
import "./Style/ProductMapStyle.css"
import "./styling.css"
import {Link, useNavigate, useLocation} from 'react-router-dom';

import {Filltre} from "./filtre";
import useQuery from "../hooks/useQuery";
import {api} from "../utils/api";
// const { id } = useParams();

// Scroll to the top when the component mounts

const ProductMap = () => {
    const [siteSetting, setSiteSetting] = useState({})
    const [myList, setMyList] = useState([]);
    // const [Curent, setCurentProducts] = useState(1);
    const [products, setProducts] = useState([]);
    const [nbPage, setNbPage] = useState(4);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const navigate = useNavigate();
    let query = useQuery();

    const getSiteSetting = async () => {
        query.set("site", process.env.REACT_APP_SITE_ID)
        await api.get(`/setting/site/?${query.toString()}`).then(res => setSiteSetting(res?.data?.results[0]))
    }

    const getProducts = async (query) => {

        return new Promise(async (resolve, reject) => {

            var data = await api.get(`/product/product/?${query.toString()}`).then(async (res) => {
                // console.log(res?.data?.count)
                var nPage = await res?.data?.count / 14
                if (nPage - Math.trunc(nPage) != 0) {
                    nPage = await Math.trunc(nPage) + 1
                } else {
                    nPage = await Math.trunc(nPage)
                }
                await setNbPage(nPage)

                setProducts(res?.data?.results)
                resolve(res)
            }).catch((e) => {
                reject(e)
            })
        })
    }
    useEffect(() => {
        getProducts(query)
            .then(async () => {
                await reglePagination(Curent + 1)
                // p=myList

            }).catch((e) => {
        })
    }, []);

    useEffect(() => {
        getSiteSetting()
    }, []);
    // setCurentProducts(parseInt(queryParams.get('page')))


    //   const pagination=[0,1,2,3,4]
    // const nbPage = 10
    var Curent = parseInt(queryParams.get('page')) || 1
    // console.log(Curent)
    var listPage = [1, 2, 3]

    // var k = 1
    const reglePagination = (win) => {
        // console.log(nbPage)
        if (win + 3 <= nbPage && win !== 0) {
            listPage = []
            let k = 1
            for (let i = win; (i <= nbPage) && (k !== 4); i++) {
                listPage.push(i);
                k++;
            }
            setMyList([...listPage]);
            // setMyList(listPage);

        } else if (win + 3 >= nbPage) {
            listPage = []
            let k = 1
            for (let i = nbPage; (i > 0) && (k !== 4); i--) {
                listPage.unshift(i);
                //    console.log(listPage)
                k++;
            }
            setMyList([...listPage]);

            // setMyList(listPage);

        }
        return listPage

        // console.log(myList)

    };
    const handleNavigation = (page) => {
        query.set('page', page.toString());

        const newSearch = query.toString();
        navigate(`?${newSearch}`);
        getProducts(query)
    };
    return (
        <div className="Am">
            <div className="theImg" style={{
                background: `url(${siteSetting?.product_cover}) center/cover no-repeat`
            }}></div>
            <Filltre getProducts={getProducts}/>
            <div className="theProducts">
                <div className="theTitle">
                    <div className="klem">Daily Deals</div>
                    <a href="#!">In Uno</a>
                </div>
                <div className="Products">
                    {products?.length === 0 && <p>There is no product</p>}
                    {products?.map(item => (
                        <div className="TheCart">
                            <div className="ThePic">
                                <img src={item.image} alt=""/>
                                {/* <!-- <div className="offre">-10%</div> --> */}
                                {/* {checkPromo(item.promo) &&( */}
                                {item?.promotion !== 0 && (


                                    <div className="Promo">Promo <label for=""
                                    >-{item?.promotion}%</label></div>
                                )
                                }
                            </div>
                            <div className="Name">{item?.name}</div>
                            <div className="Name UU">{item?.slogan}</div>
                            <div className="Price">
                                <div>Price:</div>
                                <div>{item?.price_promotion} dt</div>
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
                {myList.length != 0 && (
                    <div className="TheButtons">
                        <button onClick={() => {
                            reglePagination(myList[0] - 1)
                        }}>{"<"}</button>
                        {myList.map(item => (
                            <button onClick={() => {
                                handleNavigation(item)
                            }}>{item}</button>
                        ))
                        }
                        <button onClick={() => {
                            reglePagination(myList[0] + 1)
                        }}>{">"}</button>
                    </div>
                )}
            </div>
        </div>

    )
}
export default ProductMap;