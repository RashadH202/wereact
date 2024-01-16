import React from "react"
import CurrencyFormat from 'react-currency-format';
import "./subtotal.css"

import { useStateValue } from "./StateProvider"
import { getBasketTotal } from "./reducer"

function Subtotal() {
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText= {(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items) : <strong>${value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />this order contains a gift
                </small>
                </>
            )}
            
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}/>

            <button>proceed to checkout</button>
        </div>
    )
}

export default Subtotal