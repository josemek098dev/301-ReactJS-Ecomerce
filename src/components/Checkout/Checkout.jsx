import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import Table from "react-bootstrap/Table";
import { CheckoutForm } from './CheckoutForm';


export const Checkout = () => {
    const { items, itemsCount } = useContext(ItemsContext);

    // Obtener el nombre asociado a cada ID
    const getItemName = (itemId) => {
        const item = items.find((item) => item[0]?.id === itemId);
        return item ? item[0]?.player : "";
    };

    const getItemPosition = (itemId) => {
        const item = items.find((item) => item[0]?.id === itemId);
        return item ? item[0]?.position : "";
    };

    // Calcular el total
    const calculateTotal = () => {
        let total = 0;
        Object.entries(itemsCount).forEach(([itemId, count]) => {
            const itemPrice = 444; // Precio del artículo (supuesto en este ejemplo)
            total += itemPrice * count;
        });
        return total;
    };

    return (
        <Container>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col md={4} >

                    <h1> Checkout</h1>
                    <h1><CheckoutForm /></h1>






                </Col>
                <Col md={5} >
                    <p style={{ maxWidth: '100%' }}>
                        <div>
                            <div className="h3 my-4">Order Summary</div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Item ID</th>
                                        <th>Count</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(itemsCount).map(([itemId, count]) => {
                                        if (count === 0) {
                                            return null; // Si el recuento es 0, no muestra la fila
                                        }
                                        const itemName = getItemName(itemId);
                                        const itemPosition = getItemPosition(itemId);
                                        return (
                                            <tr key={itemId}>
                                                <td>{itemName}</td>
                                                <td>{itemPosition}</td>
                                                <td>{itemId}</td>
                                                <td>{count}</td>
                                                <td>$444</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="4" className="text-end">Total:</td>
                                        <td>${calculateTotal()}</td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </div>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};
