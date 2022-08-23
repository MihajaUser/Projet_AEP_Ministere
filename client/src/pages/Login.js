import React from 'react';
import {Container,Form,Button} from 'react-bootstrap';

const Login = () => {
	return (
		<div>
			<h1>Page Login</h1>
			<Container>
        <h1 className='shadow-sm text-success at-5 p-
        3 text-center rounded'>Login Page</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
        
        </Form>
        {/* <Link to='/formulaire'>Ajout de formulaire</Link>

        <Form.Group className="mb-3">
          
        </Form.Group> */}
        </Container>
		</div>
	);
};

export default Login;
