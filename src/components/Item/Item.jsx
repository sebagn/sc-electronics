import React from 'react'
import './Item.scss'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'

export const Item = ({ img, title, desc, price, stock }) => {
    return (
        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="title"> {title} </Card.Title>
                <Card.Text> {desc} </Card.Text>
                <Card.Subtitle className="subtitle"> ${price} </Card.Subtitle>
                <ItemCount title={title} stock={stock} /> 
            </Card.Body>
        </Card>
    )
}

