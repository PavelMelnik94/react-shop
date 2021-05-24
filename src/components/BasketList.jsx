import {BasketItem} from "./BasketItem";

function BasketList(props) {
    const {order = []} = props;
    return (
        <div className="collection">
            <ul className="collection-item active">Корзина</ul>
            {order.length ? order.map(item => <BasketItem key={item.mainId} {...item}/>) : <li  className="collection-item"> корзина пуста </li>}
            <li  className="collection-item active">Общая стоимость: </li>
        </div>
    )
};

export {BasketList}