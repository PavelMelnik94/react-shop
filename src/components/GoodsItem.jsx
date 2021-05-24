import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
    // console.log(backgroundUrl)
    const {
        mainId,
        displayName,
        displayType,
        displayDescription,
        price,
        backgroundUrl,
    } = props;

    const { addToBasket } = useContext(ShopContext)
    return (

        <div className="card" >
            <div className="card-image">
                <img src={backgroundUrl} alt={displayName}/>

            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <span className="">тип: {displayType}</span>

                    <blockquote className="card-title">
                        {displayDescription}
                    </blockquote>

            </div>
            <div className="card-action card-buy">
                <div className='price'>

                    <span className='right'> цена: <span
                        style={{fontSize: '2rem'}}> {price.finalPrice} руб.</span></span>
                </div>
                <button className='btn btn-buy' onClick={() => addToBasket({mainId, displayName, ...price})}>Добавить</button>

            </div>
        </div>)

}

export {GoodsItem}