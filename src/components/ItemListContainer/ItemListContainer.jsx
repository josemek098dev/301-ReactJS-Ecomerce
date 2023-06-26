import { ItemCard } from "./ItemCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./ItemListContainer.css"
import { Link } from "react-router-dom";

export const ItemListContainer = ({ isLoading, playersDataByPosition }) => {

  return (
    <Container className="max-width-container mt-5">
      <Row >
        
          <ItemCard  playersDataByPosition={playersDataByPosition} idx={1}/>       
          <ItemCard playersDataByPosition={playersDataByPosition} idx={2}/>
       
      </Row>
      <Row >
       
          <ItemCard playersDataByPosition={playersDataByPosition} idx={3}/>         
          <ItemCard playersDataByPosition={playersDataByPosition} idx={4} />
       
      </Row>
      <Link
        to='/category/allItems'
        style={{ textDecoration: "none", color: "inherit" }}
        key=""
      >
        <div className="d-flex justify-content-center mt-4 mb-5">View all &nbsp; <i className="bi bi-chevron-right"></i></div>
      </Link>
    </Container>
  );
};




