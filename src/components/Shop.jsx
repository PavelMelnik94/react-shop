import React, { useState, useEffect } from "react";
import {API_URL, API_KEY} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";


const Shop = () => {

    const  [goods, setGoods] = useState([]);
    const  [loading, setLoading] = useState(true);


    useEffect(function getGoods() {
        fetch(API_URL, {headers: {'Authorization': API_KEY,} })
            .then(response => response.json())
            .then(data => {
               data.shop && setGoods(data.shop);
                setLoading(false)
            })

        return console.log('goodbye')
    }, [])

    return (

        <main className='container content'>
            { loading ? <Preloader /> :  <GoodsList goods={goods}/>}
        </main>
    )

}

export default Shop;