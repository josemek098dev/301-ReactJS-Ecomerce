import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from 'react-bootstrap/Button';

export const BuyButton = ({ isHovered }) => {
    const buttonClass = isHovered ? 'dark' : 'light';
    const buttonText = isHovered ? (
      <div>
        <ShoppingCartOutlinedIcon sx={{ mb: 0.1, color: '#f8f9fa' }} style={{ fontSize: 20 }} />
        {' $99.99'}
      </div>
    ) : '$999.99';
    const buttonClassName = isHovered ? 'px-4 w-100' : 'px-4';
  
    return (
      <Row className="align-self-end flex-column my-2">
        <Col className="f-14px my-2">Save up to $250 and get 50% on OnePlus Buds Pro 2.</Col>
        <Col>
          <Button variant={buttonClass} className={buttonClassName}>
            {buttonText}
          </Button>
        </Col>
      </Row>
    );
  };