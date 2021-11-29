import React, { useContext } from 'react'
import './CartWidget.scss'
import {BsCart2} from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'

export default function CartWidget() {
    const {totalCantidad} = useContext(CartContext)

    return (
        <div>
            <BsCart2 className="cart"/>
            <span>{totalCantidad()}</span>
        </div>
    )
}
