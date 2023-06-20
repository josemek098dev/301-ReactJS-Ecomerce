import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './ItemCard.css'


export const ItemCard = () => {

  const buynow = (<Row className="align-self-end flex-column my-2">
    <Col className="f-14px">Save up to $250 and get 50% on OnePlus Buds Pro 2.</Col>
    <Col className="h4 my-2">$444</Col>
    <Col><Button variant="dark" className="px-4" >Buy now</Button></Col>
  </Row>)


  return (
    <>

      <Col xs={12} md={6} className="d-none d-lg-block p-0">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={12} md={6} className=" d-flex justify-content-between ">
            <Row >
              <Col xs={12} md={12} className=" h3 mt-2">OnePlus 10 Pro</Col>
              <Col xs={12} md={12} className=" d-flex">{buynow}

              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="  d-flex aling-content-center" ><img src="/assets/img-prueba.JPG" alt="Imagen de prueba" className="imagen" /></Col>
        </Row>

      </Col>


      <Col xs={12} sm={6} md={6} className="d-none d-sm-block d-lg-none p-0">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={12} md={12} className=" h3 mt-2">OnePlus 10 Pro</Col>
          <Col xs={12} md={12} ><img src="/assets/img-prueba.JPG" alt="Imagen de prueba" className="imagen" /></Col>
          <Col xs={12} md={12} >
            {buynow}
          </Col>
        </Row>
      </Col>


      <Col xs={12} md={6} className="d-block d-sm-none p-0">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={12} md={6} className=" h3 mt-2">OnePlus 10 Pro</Col>
          <Col xs={12} md={6}  ><img src="/assets/img-prueba.JPG" alt="Imagen de prueba" className="imagen" /></Col>
          <Col xs={12} md={12} >
            {buynow}
          </Col>
        </Row>
      </Col>


    </>
  );


};

