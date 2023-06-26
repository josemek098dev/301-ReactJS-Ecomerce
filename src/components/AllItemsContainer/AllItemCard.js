import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BuyButton } from './ui/BuyButton';
import { Link } from 'react-router-dom';
import './ui/revealimage.css'



export const AllItemCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderImage = () => (

    <div className="box1">
      <div className="content1">
        <img
          src={data.img}
          alt="Imagen de prueba"
          className="imagen " 
          
          />
          
      </div>
    </div>
  );

  //handleloading

  return (
    <>

      <Col xs={12} sm={4} md={4} className="d-none d-sm-block d-lg-block p-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

        <Row className="m-2 py-3 px-1">
          <Link to={`/player-detail/${data.id}`} style={{ textDecoration: 'none' }} key="">
            <Col xs={12} md={12}>

              {renderImage()}

            </Col>
            <Col xs={12} md={12}>
              <BuyButton isHovered={isHovered} />
            </Col>
          </Link>
        </Row>

      </Col>
      <Col xs={6} md={6} className="d-block d-sm-none p-0">
        <Row className="bg-custom m-2 py-3 px-1">

          <Link to={`/player-detail/${data.id}`} style={{ textDecoration: 'none' }} key="">

            <Col xs={12} md={6}>
              {renderImage()}
            </Col>
            <Col xs={12} md={12}>
              <BuyButton isHovered={isHovered} />
            </Col>

          </Link>

        </Row>
      </Col>
    </>
  );
};