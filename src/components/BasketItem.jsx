function BasketItem(props) {
    const {displayName,
        finalPrice,
        mainId,
        quantity,
        removeFromBasket = Function.prototype,
        incrementOrder = Function.prototype,
        decrementOrder = Function.prototype,} = props;

    console.log(mainId)
    return (
        <li  className="collection-item">
           <span className='order-name'> {displayName} </span>   <span>
            <i className='material-icons basket-quantity' onClick={()=> incrementOrder(mainId)}>add</i>
        {quantity} шт. <i className='material-icons basket-quantity' onClick={()=> decrementOrder(mainId)}>remove</i> </span>= {finalPrice*quantity} руб.


            <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons basket-delete" >delete_forever</i>
            </span>
        </li>
    )
}

export {BasketItem}