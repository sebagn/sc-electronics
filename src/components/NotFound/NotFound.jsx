import React from 'react'
import './NotFound.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="info">
            <h1> 404 </h1>
            <h2>
                No encontramos la pagina que buscas
            </h2>
            <p>
                Lo siento, intenta volver a ver los mejores productos en SC-Electronics
            </p>
            <Link to="/" className="btn btn-success">Volver a SC-Electronics</Link>
        </div>
    )
}

export default NotFound