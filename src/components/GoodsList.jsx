import React, {useState, useEffect} from "react";
import {GoodsItem} from "./GoodsItem";


function GoodsList(props) {

    const {
        goods = [],
        addToBasket = Function.prototype,
    } = props;

    if (!goods.length) {
        return <h3>nothing!</h3>
    }


    const backgroundUrl = goods.map(obj => obj.displayAssets[0].full_background)
    // console.log(goods[0].displayAssets[0].full_background)
    return (

        <div className='goods'>
            {goods.map((item) => (<GoodsItem key={item.mainId}   {...item} addToBasket={addToBasket}
                                             backgroundUrl={item.displayAssets[0].full_background}/>))}
        </div>)

}

export default GoodsList;