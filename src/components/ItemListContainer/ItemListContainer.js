import React, { useState, useEffect } from 'react'
import './ItemListContainer.scss'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'
import { useParams } from 'react-router'
import { pedirDatos } from '../../helpers/pedirDatos'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    const { catId } = useParams();

    useEffect(() => {

        setLoading(true)

        pedirDatos()
            .then((data) => {
                !catId
                    ? setProductos(data)
                    : setProductos(data.filter(prod => prod.category === catId))
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
