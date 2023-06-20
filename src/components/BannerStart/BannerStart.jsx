

import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './BannerStart.css'
import 'animate.css'
export const BannerStart = () => {

  const buynow = (<Row className="align-self-end flex-column my-2">
    <Col className="h4 my-2">from $444</Col>
    <Col className="f-14px">Save up to $250 and get 50% on OnePlus Buds Pro 2.</Col>

    <Col><Button variant="light" size="sm" className="px-4 mt-2" >Buy now</Button></Col>
  </Row>)


  return (
    <div className="custom-color bg-image-banner">

      <Col xs={12} md={12} className="d-none d-lg-block ">
        <Row className="bg-custom-dark m-0 py-3 px-5">
          <Col xs={12} md={6} className=" d-flex justify-content-between ">
            <Row >
              <Col xs={12} md={12} className=" h3 mt-2">OnePlus 10 Pro</Col>
              <Col xs={12} md={12} className=" d-flex">{buynow}

              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="d-flex aling-content-center" ><img src="/assets/imgbgs.png" alt="Imagen de prueba" className="image-banner image image-banner-margin animate__animated animate__fadeInUp" /></Col>
        </Row>

      </Col>


      <Col xs={12} sm={12} md={12} className="d-none d-sm-block d-lg-none p-0 mt-5">
        <Row className="bg-custom-dark m-2 py-3 px-1">
          <Col xs={12} md={12} className=" h3 mt-2">OnePlus 10 Pro</Col>
          <Col xs={12} md={12} ><img src="/assets/imgbgs.png" alt="Imagen de prueba" className="image-banner image image-banner-margin2" /></Col>
          <Col xs={12} md={12} >
            {buynow}
          </Col>
        </Row>
      </Col>


      <Col xs={12} md={6} className="d-block d-sm-none p-0  mt-5">
        <Row className="bg-custom-dark m-2 py-3 px-1">
          <Col xs={12} md={6} className=" h3 mt-2">OnePlus 10 Pro</Col>
          <Col xs={12} md={6}  ><img src="/assets/imgbgs.png" alt="Imagen de prueba" className="image-banner image image-banner-margin2" /></Col>
          <Col xs={12} md={12} >
            {buynow}
          </Col>
        </Row>
      </Col>


    </div>
  );


};