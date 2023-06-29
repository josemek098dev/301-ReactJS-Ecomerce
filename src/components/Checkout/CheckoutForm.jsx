import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Form, Button } from "react-bootstrap";


const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

export const CheckoutForm = () => {

  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
    });
    console.log(values,db)
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h1 style={{ color: "white" }}>Shop</h1>
      <Form className="FormContainer" onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            style={{ margin: 10, width: 400 }}
            name="name"
            value={values.name}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Last Name"
            style={{ margin: 10, width: 400 }}
            name="lastName"
            value={values.lastName}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="City"
            style={{ margin: 10, width: 400 }}
            name="city"
            value={values.city}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button className="btnASendAction" type="submit">
          Send
        </Button>
      </Form>
      {purchaseID && <h1>{purchaseID} </h1> }
    </div>
  );
};

