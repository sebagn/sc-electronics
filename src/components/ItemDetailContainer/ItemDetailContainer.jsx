import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.scss'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Loading } from '../Loading/Loading'
import { useParams } from 'react-router'
import { db } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore/lite'

const ItemDetailContainer = () => {

    const [ loading, setLoading ] = useState(false);
    const [ producto, setProducto ] = useState([]);
    const {itemId} = useParams()
    
    

    useEffect(() => {

        setLoading(true)

        const fetchdata = async () => {
            const itemRef = doc (db, `productos/${itemId}`)
            try{
                const docSnap = await getDoc(itemRef)
                setProducto({...docSnap.data(), id: docSnap.id})

            }
            finally{setLoading(false)};
        }
        
        fetchdata()    
        
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