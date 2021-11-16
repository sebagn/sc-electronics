import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item.jsx'

export const ItemList = ({productos}) => {

    return (
        <Container>
            <h1>Bienvenido a SG Electronics</h1>
            <p> Encontrá los mejores <del>productos de electronica</del> <strong>perritos</strong></p>
            <Row>
                {productos.map((prod) => <Item key={prod.id} {...prod} />)}
            </Row>
        
        </Container>
    )
}
