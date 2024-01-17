import React, {useEffect, useState} from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import "./styling.css"
import cover1 from "./assetes/Cover1.jpg"
import cover2 from "./assetes/Cover2.jpg"
import cover3 from "./assetes/Cover3.jpg"
import useQuery from "../utils/useQuery";
import {api} from "../utils/api";

export const Filltre = ({getProducts}) => {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([])

    let query = useQuery();

    const [filterData, setFilterData] = useState({
        category: query.get("category"),
        brand: query.get("brand"),
        price__lt: query.get("price__lt"),
        search: query.get("search")
    })

    const getCategories = async () => {
        await api.get("/product/category/").then(res => setCategories(res?.data?.results))
    }

    const getBrands = async () => {
        await api.get("/product/brand/").then(res => setBrands(res?.data?.results))
    }

    useEffect(() => {
        getCategories()
    }, []);

    useEffect(() => {
        getBrands()
    }, []);

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`?${query.toString()}`)
        getProducts(query)
    };

    const onSelectChange = (target) => {
        setFilterData({
            ...filterData,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        for (const key in filterData) {
            if (filterData[key])
                query.set(key, filterData[key])
        }
    }, [filterData]);

    const ChackBoxs = ['Glass', 'Wood', 'Metal', 'Plastic', 'Ceramic', 'Leather',
        'Fabric',
        'Paper',
        'Electronics',
        'Organic',]
    return (
        <div className="Filltre">
            <div className="Title2">Find Your Product</div>
            <div className="Blocks">

                <select value={filterData.category} name={"category"} onChange={({target}) => onSelectChange(target)}
                        className="Selection" aria-label="Default select example">
                    <option selected value="">Category</option>
                    {categories?.map(category => (
                        <option value={category?.id}>{category?.name}</option>
                    ))}
                </select>
                <select value={filterData.brand} name={"brand"} onChange={({target}) => onSelectChange(target)}
                        className="Selection" aria-label="Default select example">
                    <option selected value="">Marque</option>
                    {brands?.map(brand => (
                        <option value={brand?.id}>{brand?.name}</option>
                    ))}
                </select>
                <select value={filterData.price__lt} name={"price__lt"} onChange={({target}) => onSelectChange(target)}
                        className="Selection" aria-label="Default select example">
                    <option selected value="Price">Price</option>
                    <option value="20">{"< 20"}</option>
                    <option value="50">{"< 50"}</option>
                    <option value="80">{"< 80"}</option>
                </select>
                <input type="search" name={"search"} value={filterData.search} onChange={({target}) => onSelectChange(target)}
                       className="Boton" placeholder="Search"/>
                <button onClick={handleButtonClick} className="AffectSerch">Find Products</button>
            </div>
            <div className="Index">
                {ChackBoxs.map(item => (

                    <div>
                        <label>{item}</label>
                        <input type="checkbox"/>
                    </div>
                ))}


            </div>
        </div>
    )
}
export const Covers = () => {
    return (
        <div className="Cover">
            <a className="the1 all">
                <img src={cover1} alt=""/>
            </a>
            <a className="the2 all">

                <img src={cover2} alt=""/>
            </a>
            <a className="the3 all">
                <img src={cover3} alt=""/>

            </a>
        </div>
    )
}
// export default {
//     Filltre,
//     Covers
// } ;