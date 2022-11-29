import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import useFirebase from '../../Hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';

import app from '../../firebase.init';
const auth = getAuth(app)
const LogIn = () => {
    const [validated, setValidated] = useState(false);
    // const {signWithGoogle}= useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from, {replace: true})
        })
    }
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

    setValidated(true);
  };
    return (
    <Form className='register-area' noValidate validated={validated} onSubmit={handleSubmit}>
        <h2>Login</h2><br />
        {/* <Button onClick={signWithGoogle}>Google</Button> <br /><br /> */}
        <Button onClick={handleGoogleSignIn}>Google</Button> <br /><br />
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

export default LogIn;