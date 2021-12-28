import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item.jsx'

export const ItemList = ({productos}) => {

    return (
        <Container>
            <Row style={{"justifyContent": "center"}}>
                {productos.map((prod) => <Item key={prod.id} {...prod} />)}
            </Row>
        </Container>
    )
}
