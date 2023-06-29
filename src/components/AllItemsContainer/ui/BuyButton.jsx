import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from 'react-bootstrap/Button';

export const BuyButton = ({ isHovered, data }) => {
  const buttonClassName = isHovered ? 'px-4 w-100' : 'px-4';
  const buttonClass = isHovered ? 'dark' : 'light';
  const buttonText = isHovered ? (

    <div>
      <Col className="my-2 d-7 text-muted" >{data.description}</Col>
      <Button variant={buttonClass} className={buttonClassName}>
        <ShoppingCartOutlinedIcon sx={{ mb: 0.5, color: '#f8f9fa', marginRight: '4px' }} style={{ fontSize: 20 }} />
        ${data.price}
      </Button>
    </div>
  ) : '$ ' + data.price;



  return (
    <Row className="align-self-end flex-column my-2">
      <Col className="my-2 h5" >{data.name.split(' ').slice(0, 4).join(' ')}</Col>
      <Col>
        {buttonText}
      </Col>
    </Row>
  );
};