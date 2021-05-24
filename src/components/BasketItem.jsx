function BasketItem(props) {
    const {displayName,
        finalPrice,
        mainId,
        quantity} = props;
    return (
        <li  className="collection-item">
            {displayName} x  {quantity} = {finalPrice}

            <span className="secondary-content">
                <i className="material-icons">clear</i>
            </span>
        </li>
    )
}

export {BasketItem}