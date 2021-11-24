import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item.jsx'

export const ItemList = ({productos}) => {

    return (
        <Container>
            <h1>Bienvenido a SC Electronics</h1>
            <p> Encontrá los mejores <del>productos de electronica</del> <strong>perritos y gatitos</strong></p>
            <Row>
                {productos.map((prod) => <Item key={prod.id} {...prod} />)}
            </Row>
        
        </Container>
    )
}
