import React, {useState, useEffect} from "react";

function GoodsItem(props) {
    // console.log(backgroundUrl)
    const {
        mainId,
        displayName,
        displayType,
        displayDescription,
        price,
        backgroundUrl
    } = props;
    return (

        <div className="card" id={mainId}>
            <div className="card-image" >
                <img src={backgroundUrl} alt={displayName}/>

            </div>
            <div className="card-content">
                {/*<span className="card-title">имя: {displayName}</span>*/}
                <span className="">тип: {displayType}</span>
                <p><blockquote className="card-title">
                    {displayDescription}
                </blockquote></p>
            </div>
            <div className="card-action card-buy">
                <div className='price'>
                <span className='right '> без скидки: <span className='cross-text'>{price.regularPrice}</span> </span>
                <span className='right'> со скидкой: {price.finalPrice}</span>
                </div>
                <button className='btn btn-buy' >Добавить</button>

            </div>
        </div>)

}

export {GoodsItem}