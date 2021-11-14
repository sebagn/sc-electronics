import React from 'react'
import './ProductCard.scss'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ img, title, text, stock }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="title">{title}</Card.Title>
                {/* <Card.Text>
                        {text}
                    </Card.Text> */}
                <ItemCount title={title} stock={stock} />
            </Card.Body>
        </Card>
    )
}

export default Item
