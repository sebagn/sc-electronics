import React from 'react'
import './CartWidget.scss'
import {BsCart2} from 'react-icons/bs'

export default function CartWidget() {
    return (
        <div>
            <BsCart2 className="cart"/>
        </div>
    )
}
