import React from 'react'
import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import BackButton from '../BackButton/BackButton'

const ItemDetail = ({producto}) => {
    const {img, title, desc, price, stock} = producto

    return (
        <article className="detail row">
            <img className="detail_img col-md-6" src={img} alt={title} />
            <div className="detail_body col-md-6">
                <h2 className="detail_title"> {title} </h2>
                <p className="detail_p"> {desc}</p>
                <h3 className="detail_subtitle"> ${price} </h3>
                <ItemCount title={title} stock={stock} />
                <BackButton />
            </div>
        </article>
    )
}

export default ItemDetail
