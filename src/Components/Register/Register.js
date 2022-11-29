import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app)

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [user] = useAuthState(auth)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return (
      user?<p>u already sing in</p>:
    <Form className='register-area' noValidate validated={validated} onSubmit={handleSubmit}>
      <h2>Registration</h2><br />

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control required type="text" placeholder="Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default Register;