import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loading.scss'

export const Loading = () => {
    return (
        <div className="spinner">
            <Spinner animation="border" role="status" /> 
            <h2>Cargando...</h2>
        </div>
    )
}
