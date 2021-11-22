import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.scss'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Loading } from '../Loading/Loading'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {

    const [ loading, setLoading ] = useState(false);
    const [ producto, setProducto ] = useState([]);
    const {itemId} = useParams()

    useEffect(() => {

        setLoading(true)
        const urlAPI = 'https://619a568d9022ea0017a7b119.mockapi.io/apitest/v1/stock';
        fetch(urlAPI)
            .then((res) => res.json())
            .then(data => {
              setProducto( data.find (prod => prod.id === Number(itemId)))
            })

            .finally(setLoading(false));
    }, [itemId])

    
    return (
        <>
            {
                loading
                    ? <Loading />
                    : <ItemDetail producto={producto} />
            }
        </>
    )
}

export default ItemDetailContainer