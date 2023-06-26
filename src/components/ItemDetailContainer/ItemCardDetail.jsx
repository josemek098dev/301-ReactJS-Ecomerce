import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



export const ItemCardDetail = ({ playersDataByPosition, idx }) => {

  const data = playersDataByPosition[0]


  const buynow = (

    <Row className="align-self-end  flex-column my-2 bg-primary w-100 ">
      <Col className="f-14px">Save up to $250 and get 50% on OnePlus Buds Pro 2.</Col>
      <Col className="h4 my-2">$444</Col>
      <Col>
        <Link
          to={`/player-detail/${data.id}`}
          style={{ textDecoration: "none" }}
          key=""
        >
          <Button variant="dark" className=" w-50 mt-2" >Add to cart</Button>
          <Button variant="danger" className=" w-50 mt-2" >Buy now</Button>
        </Link>
      </Col>
    </Row>
  )


  return (
    <>

      <Col xs={12} md={12} className="d-none d-sm-block d-lg-block p-0 ">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={6} md={6} className="  d-flex aling-content-center" >
            <img src={data?.img || ''} alt="Imagen de prueba" className="imagen" />
          </Col>
          <Col xs={6} md={6} className=" d-flex justify-content-between ">
            <Row >
              <Col xs={12} md={12} className=" h3 mt-2">OnePlus 10 Pro XS 12 MD 12</Col>
              <Col xs={12} md={12} className=" d-flex bg-danger justify-content-center w-100 ">
                {buynow}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col xs={12} md={6} className="d-block d-sm-none p-0">
        <Row className="bg-custom m-2 py-3 px-1">
          <Col xs={12} md={6} className=" h3 mt-2">OnePlus 10 Pro XS</Col>
          <Col xs={12} md={6}  >
            <img src={data?.img || ''} alt="Imagen de prueba" className="imagen" />
          </Col>
          <Col xs={12} md={12} >
            {buynow}
          </Col>
        </Row>
      </Col>
    </>
  );
};

