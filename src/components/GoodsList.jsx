import React from "react";
import {GoodsItem} from "./GoodsItem";


function GoodsList(props) {

    const {
        goods = [],
    } = props;

    if (!goods.length) {
        return <h3>nothing!</h3>
    }



    return (

        <div className='goods'>
            {goods.map((item) => (<GoodsItem key={item.mainId}   {...item}
                                             backgroundUrl={item.displayAssets[0].full_background}/>))}
        </div>)

}

export default GoodsList;