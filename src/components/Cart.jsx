function Cart(props) {
    const {
        quantity = 0,
        handleBasketShow = Function.prototype,
    } = props;
    return (
        <div onClick={handleBasketShow} className='cart deep-orange darken-3 white-text'>

            <i className="material-icons">local_grocery_store</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    )
}

export {Cart}