
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Link } from "react-router-dom";
import { ItemCardDetail } from './ItemCardDetail';

export const ItemDetailContainer = ({ isLoading, playersDataByPosition }) => {

  return (
    <Container className="max-width-container mt-5">
      <Row >
        

    {isLoading ? (
        <div className="Spinner">
          Cargando...
        </div>
      ) : (
        playersDataByPosition.map((data) => {
          return <ItemCardDetail  playersDataByPosition={playersDataByPosition} />;
        })
      )} 
        
         
      </Row>
      <Row >
       
        <h2>DESC</h2>
          
      </Row>
      
    </Container>
  );
};
