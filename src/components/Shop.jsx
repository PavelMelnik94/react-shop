import React, { useState, useEffect } from "react";
import {API_URL, API_KEY} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";




const Shop = () => {

    const  [goods, setGoods] = useState([]);
    const  [loading, setLoading] = useState(true);
    const  [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    useEffect(function getGoods() {
        fetch(API_URL, {headers: {'Authorization': API_KEY,} })
            .then(response => response.json())
            .then(data => {
               data.shop && setGoods(data.shop);
                setLoading(false)
            })



        return console.log('goodbye')
    }, [])


    const removeFromBasket = (mainId) => {
        const newOrder = order.filter(el => el.mainId !== mainId)
        setOrder(newOrder)
    }

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        // setAlertName(item.name);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
        console.log(order)
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
        </main>
    )

}

export default Shop;