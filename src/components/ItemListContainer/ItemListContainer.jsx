import { ItemCard } from "./ItemCard";

import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ItemListContainer.css"

export const ItemListContainer = () => {


  return (

    <Container className="max-width-container">
      <Row >

        <ItemCard />
        <ItemCard />

      </Row>
      <Row >

        <ItemCard />
        <ItemCard />

      </Row>
    </Container>



  );
};




