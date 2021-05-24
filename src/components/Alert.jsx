import React, { useEffect } from "react";

function Alert(props) {
    const { alertName = '', closeAlert = Function.prototype} = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 2000)

        return () => {
            clearTimeout(timerId)
        } // eslint-disable-next-line
    }, [alertName])


            return (
                <div id='toast-container'>
                    <div className='toast'> {alertName} добавлен в корзину</div>
                </div>
            )
}

export {Alert}