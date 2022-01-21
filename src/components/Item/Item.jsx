import React from 'react'
import './Item.scss'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export const Item = ({ img, title, price, id }) => {
    return (
        <Card className="card m-3">
            <Card.Img variant="top" className="mt-2" src={`https://via.placeholder.com/160?text=${title}`} />
            <Card.Body>
                <Card.Title className="title"> {title} </Card.Title>
                <Card.Subtitle className="subtitle"> ${price} </Card.Subtitle>
            </Card.Body>
            <Link to={`/detail/${id}`} className="button-pri btn">Ver mas</Link>
        </Card>
    )
}

