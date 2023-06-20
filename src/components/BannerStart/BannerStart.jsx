

import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const BannerStart = () => {


  return (
    <Container className="bg-danger my-2 justify-content-md-center ">

    
          <Row className="bg-info p-2">
            <Col xs={12} md={4} className="bg-warning">1</Col>
            <Col xs={12} md={8} className="bg-primary" style={{ height: '100px' }}>2 </Col>
            <Col xs={12} md={12} className="bg-success">3</Col>
          </Row>
      
    </Container>
  );
};

