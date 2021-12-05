import React from 'react'
import './Item.scss'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export const Item = ({ img, title, price, id }) => {
    return (
        <Card style={{ width: '18rem' }} className="card m-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="title"> {title} </Card.Title>
                <Card.Subtitle className="subtitle"> ${price} </Card.Subtitle>
            </Card.Body>
            <Link to={`/detail/${id}`} className="button-pri btn">Ver mas</Link>
        </Card>
    )
}

