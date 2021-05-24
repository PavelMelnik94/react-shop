export function reducer(state, {type, payload}) {
    switch (type) {
        case 'DECREMENT_ORDER':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity -1;
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return el;
                    }
            }),
            }
        case 'INCREMENT_ORDER':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.id) {

                        return {
                            ...el,
                            quantity: el.quantity +1
                        };
                    }else {
                        return el;
                    }
                })
            };
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'ADD_TO_BASKET':{
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.mainId === payload.id
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
        };
        }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(el => el.mainId !== payload.id)
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        default:
            return state;
    }
}