import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './ItemCard.css'


export const ItemCard = ({ playersDataByPosition , idx}) => {

  const dataid = playersDataByPosition[idx]?.id
  console.log('ladata', dataid)


  const buynow = (<Row className="align-self-end flex-column my-2">
    <Col className="f-14px">Save up to $250 and get 50% on OnePlus Buds Pro 2.</Col>
    <Col className="h4 my-2">$444</Col>

    <Col>

      <Link
         to={`/player-detail/${dataid}`}
        style={{ textDecoration: "none" }}
        key=""
      >
        <Button variant="dark" className="px-4" >Buy now</Button>

      </Link>

    </Col>

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
          <Col xs={12} md={6} className="  d-flex aling-content-center" >
            <Link
              to={`/player-detail/${dataid}`}
              style={{ textDecoration: "none" }}
              key=""
            >
              <img src={playersDataByPosition[idx]?.img || ''} alt="Imagen de prueba" className="imagen image-zoom-hover" />
            </Link>
          </Col>
        </Row>

      </Col>


      <Col xs={12} sm={6} md={6} className="d-none d-sm-block d-lg-none p-0">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={12} md={12} className=" h3 mt-2">OnePlus 10 Pro</Col>
          <Col xs={12} md={12} >
            <Link
              to={`/player-detail/${dataid}`}
              style={{ textDecoration: "none" }}
              key=""
            >
              <img src={playersDataByPosition[idx]?.img || ''} alt="Imagen de prueba" className="imagen" />
            </Link>
          </Col>
          <Col xs={12} md={12} >
            {buynow}
          </Col>
        </Row>
      </Col>


      <Col xs={12} md={6} className="d-block d-sm-none p-0">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={12} md={6} className=" h3 mt-2">OnePlus 10 Pro</Col>
          <Col xs={12} md={6}  >

            <Link
               to={`/player-detail/${dataid}`}
              style={{ textDecoration: "none" }}
              key=""
            >
              <img src={playersDataByPosition[idx]?.img || ''} alt="Imagen de prueba" className="imagen" />
            </Link>

          </Col>
          <Col xs={12} md={12} >
            {buynow}
          </Col>
        </Row>
      </Col>


    </>
  );


};

