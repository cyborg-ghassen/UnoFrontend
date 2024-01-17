import React, {useEffect, useState} from "react"
// import { useLocation } from 'react-router-dom';
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
    const [myList, setMyList] = useState([1,2,3]);
    // const [Curent, setCurentProducts] = useState(1);
    const [products, setProducts] = useState([]);
    const [nbPage, setnbPage] = useState(10);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const navigate = useNavigate();
    let query = useQuery();

    const getProducts = async (query) => {
        return await api.get(`/product/product/?${query.toString()}`).then(res => {setProducts(res?.data?.results)}).catch(()=>{
            console.log("there is no product fitshed1.3")
        })
    }
    
    useEffect(() => {
        getProducts(query)
    }, []);
    // setCurentProducts(parseInt(queryParams.get('page')))


    //   const pagination=[0,1,2,3,4]
    // const nbPage = 10
    var Curent = parseInt(queryParams.get('page'))||1
    // console.log(Curent)
    var listPage = [1,2,3]
  
    // var k = 1
    const reglePagination = (win) => {
        console.log("slmslm "+win)
        if (win+3<=nbPage && win!=0){
            listPage=[]
           let  k=1
            for (let i = win; (i <= nbPage) && (k != 4); i++) {
                listPage.push(i);
                // console.log(listPage)
                k++;
            }
            setMyList([...listPage]);
            
        }else if(win+3>=nbPage){
            listPage=[]
           let  k=1
            for (let i = nbPage; (i > 0) && (k != 4); i--) {
                listPage.unshift(i);
                // console.log(listPage)
                k++;
            }
            setMyList([...listPage]);

        }

        
        // console.log(myList)
        
    };
    const handleNavigation = (page) => {
        query.set('page', page.toString());

        const newSearch = query.toString();
        navigate(`?${newSearch}`);
        // console.log(newSearch)
        getProducts(query)
    };

    useEffect(() => {


        
        reglePagination(Curent+1)
    }, []);
    // console.log(myList)
    // console.log(i)
      const checkPromo=(p)=>{
        return p!==0;
      }

    return (<div className="Am">
            <div className="theImg"></div>
            <Filltre getProducts={getProducts}/>
            <div className="theProducts">
                <div className="theTitle">
                    <div className="klem">Daily Deals</div>
                    <a href="">In Uno</a>
                </div>
                <div className="Products">
                {products?.length==0 && <p>There is no product</p>}
                    {products?.map(item => (
                        // <li key={item.id}>{item.name}</li>
                        <div className="TheCart">
                            <div className="ThePic">
                                <img src={Judy} alt=""/>
                                {/* <!-- <div className="offre">-10%</div> --> */}
                                {/* {checkPromo(item.promo) &&( */}
                                {item?.promotion !== 0 && (


                                    <div className="Promo">Promo <label for=""
                                        //  style="color: white;"
                                    >-{item?.promotion}%</label></div>
                                )
                                }

                            </div>
                            <div className="Name">{item?.name}</div>
                            <div className="Name UU">{item?.slogan}</div>
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
                        reglePagination(myList[0]-1)
                    }}>{"<"}</button>
                    {myList.map(item => (

                        <button onClick={() => {
                            handleNavigation(item)
                        }}>{item}</button>
                    ))
                    }
                    <button onClick={() => {
                        reglePagination(myList[0]+1)
                    }}>{">"}</button>
                </div>
            </div>
        </div>

    )
}
export default ProductMap;