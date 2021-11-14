import React from 'react'
import './ItemListContainer.scss'
import ProductCard from '../ProductCard/ProductCard'



const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <p> Encontrá los mejores <del>productos de electronica</del> <strong>perritos</strong></p>
            <ProductCard img="https://placedog.net/500" title="Perrito" stock="4" />
            

        </div>
    )
}

export default ItemListContainer
