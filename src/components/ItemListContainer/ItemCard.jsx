import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemCard = ({ img, title,price }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      style={{
        width: '95%',
        height: '357px',
        margin: '6%',
        transition: 'box-shadow 0.3s',
        boxShadow: isHovered ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Body>
        <div
          className="image-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "200px",
            maxWidth: "100%",
          }}
        >
          <img src={img} alt="image" style={{ maxHeight: '200px', maxWidth: '100%' }} />
        </div>
        <hr />

        <Card.Text style={{ fontSize: '1.3rem', textAlign: 'left' }}>
          U$A {price}
        </Card.Text>

        <Card.Title
          style={{
            fontSize: '.87rem',
            textAlign: 'left',
            color: 'gray',
            paddingTop: '5px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

