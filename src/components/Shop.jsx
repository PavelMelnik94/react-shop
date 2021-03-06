import React, { useState, useEffect } from "react";
import {API_URL, API_KEY} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";


const Shop = () => {

    const  [goods, setGoods] = useState([]);
    const  [loading, setLoading] = useState(true);
    const  [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');
    useEffect(function getGoods() {
        fetch(API_URL, {headers: {'Authorization': API_KEY,} })
            .then(response => response.json())
            .then(data => {
               data.shop && setGoods(data.shop);
                setLoading(false)
            })




    }, [])

    const closeAlert = () => {
        setAlertName('');
    }
    const removeFromBasket = (mainId) => {
        const newOrder = order.filter(el => el.mainId !== mainId)
        setOrder(newOrder)
    }


    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const incrementOrder = (mainId) => {
        const newOrder = order.map((el) => {
            if (el.mainId === mainId) {
                const newQuanity = el.quantity +1;
                return {
                    ...el,
                    quantity: newQuanity,
                };
            }else {
                return el;
            }
        });
        setOrder(newOrder)
    };

    const decrementOrder = (mainId) => {
        const newOrder = order.map((el) => {
            if (el.mainId === mainId) {
                const newQuanity = el.quantity -1;
                return {
                    ...el,
                    quantity: newQuanity >= 0 ? newQuanity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder)
    };


    return (

        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            { loading ? <Preloader /> : <GoodsList setOrder={setOrder} addToBasket={addToBasket} goods={goods}/>}

            { isBasketShow &&
            <BasketList
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                incrementOrder={incrementOrder}
                decrementOrder={decrementOrder} /> }

            {alertName && <Alert alertName={alertName} closeAlert={closeAlert} />}
        </main>
    )

}

export default Shop;