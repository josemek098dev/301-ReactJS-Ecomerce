import { ItemCard } from "./ItemCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./ItemListContainer.css"
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";



export const ItemListContainer = ({ isLoading, playersDataByPosition }) => {

  
  if (isLoading) {
    return <div className='w-100 vh-100  d-flex justify-content-center mt-5'><Spinner /></div>
  }

  return (
    <Container className="max-width-container mt-5">
      <Row >

        <ItemCard playersDataByPosition={playersDataByPosition} isLoading={isLoading} idx={1} />
        <ItemCard playersDataByPosition={playersDataByPosition} isLoading={isLoading} idx={2} />

      </Row>
      <Row >

        <ItemCard playersDataByPosition={playersDataByPosition} isLoading={isLoading} idx={3} />
        <ItemCard playersDataByPosition={playersDataByPosition} isLoading={isLoading} idx={4} />

      </Row>
      <Link
        to='/category/allItems'
        style={{ textDecoration: "none", color: "inherit" }}
        key=""

      >
        <div className="d-flex justify-content-center mt-4 mb-5 hover-right">
          <span className="hold">View all</span>
          <div className="arrow-container">
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </Link>
    </Container>
  );

    
};




