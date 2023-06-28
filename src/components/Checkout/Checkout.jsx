import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useContext, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";

export const Checkout = () => {

    const { items, setItems } = useContext(ItemsContext);


    return (


        <Container>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col md={4} className='bg-danger'>
                    <h1>hola</h1>
                </Col>
                <Col md={4} className='bg-primary'>
                    <p style={{ maxWidth: '100%' }}>{JSON.stringify(items)}</p>
                </Col>
            </Row>
        </Container>

    )
}
