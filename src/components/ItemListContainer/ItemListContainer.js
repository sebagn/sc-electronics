import React, { useState, useEffect } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    console.log(loading)

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then((resp) => {
                setProductos(resp)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [])

    return (
        <>
            {
                loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />
            }
        </>
    )
}

export default ItemListContainer
