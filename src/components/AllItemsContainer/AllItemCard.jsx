import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { BuyButton } from './ui/BuyButton';



export const AllItemCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderImage = () => (
    <img src={data.img} alt="Imagen de prueba" className="imagen animate__animated animate__flipInY" />
  );

  return (
    <>
      <Col xs={12} sm={4} md={4} className="d-none d-sm-block d-lg-block p-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        
          <Row className="m-2 py-3 px-1">
            <Col xs={12} md={12}>
              {renderImage()}
            </Col>
            <Col xs={12} md={12}>
              <BuyButton isHovered={isHovered} />
            </Col>
          </Row>
        
      </Col>
      <Col xs={6} md={6} className="d-block d-sm-none p-0">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={12} md={6}>
            {renderImage()}
          </Col>
          <Col xs={12} md={12}>
            <BuyButton isHovered={isHovered} />
          </Col>
        </Row>
      </Col>
    </>
  );
};