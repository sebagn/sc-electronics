import React, { useState } from 'react'
import './ItemCount.scss'
import Button from 'react-bootstrap/Button'

function ItemCount({ title, stock }) {

    const [counter, setCounter] = useState(0);
    const agregarItem = () => {
        if (counter < stock) { setCounter(counter + 1) } else { alert(`No tenemos suficientes ${title}`) }
    }
    const quitarItem = () => {
        if (counter > 0) { setCounter(counter - 1) }
    }
    const alCarrito = () => {
        alert(`Agregaste ${counter} "${title}" al carrito`)
    }
    

    return (
        <div className="d-flex flex-wrap justify-content-center">
            <div className="counter">
                <Button variant="dark" onClick={quitarItem}>-</Button>
                <h3>{counter}</h3>
                <Button variant="dark" onClick={agregarItem}>+</Button>
            </div>
            <Button variant="dark" size="lg" onClick={alCarrito} className="alCarrito">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
