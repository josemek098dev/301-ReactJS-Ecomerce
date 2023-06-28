
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Link } from "react-router-dom";
import { ItemCardDetail } from './ItemCardDetail';

export const ItemDetailContainer = ({ isLoading, playersDataByPosition }) => {

  return (
   <div className="bg-custom  ">
    <Container className="max-width-container align-items-center d-flex" style={{height:'90vh'}}>
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

      
    </Container>
    </div>
  );
};
