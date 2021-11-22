import React, { useState, useEffect } from 'react'
import './ItemListContainer.scss'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'
import { useParams } from 'react-router'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    const { catId } = useParams();

    useEffect(() => {

        setLoading(true)

        const urlAPI = 'https://619a568d9022ea0017a7b119.mockapi.io/apitest/v1/stock';
        fetch(urlAPI)
            .then((res) => res.json())
            .then((data) => {
                if (!catId) {
                    setProductos(data)
                }
                else {
                    setProductos(data.filter(prod => prod.category === catId))
                }

            })

            .finally(setLoading(false));

    }, [catId])

    return (
        <>
            {
                loading
                    ? <Loading />
                    : <ItemList productos={productos} />
            }
        </>
    )
}

export default ItemListContainer
