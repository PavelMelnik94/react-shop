import {BasketItem} from "./BasketItem";

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incrementOrder = Function.prototype,
        decrementOrder = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.finalPrice *el.quantity
    }, 0)
    return (
        <div className="collection basket-list">
            <ul className="collection-item active">Корзина <span className='secondary-content'><i className='material-icons basket-close' onClick={handleBasketShow}>close</i></span></ul>
            {order.length ? order.map(item =>
                    <BasketItem
                        key={item.mainId}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        incrementOrder={incrementOrder}
                        decrementOrder={decrementOrder}
                    />) :
                <li className="collection-item"> корзина пуста </li>}
            <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>

            <li className="collection-item "> <button
                className="btn btn-small waves-effect waves-light cyan darken-3" type="submit" name="action">Оплатить
                <i className="material-icons right">attach_money</i>
            </button></li>

        </div>
    )
};

export {BasketList}