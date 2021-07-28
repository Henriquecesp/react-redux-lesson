import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeUser } from '../redux/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(changeUser(name))
  }

  return (
    <Form>
      <h1 className="mt-5">Login</h1>
      <Row className="align-items-center">
        <Col sm={6} className="my-1">
          <Form.Control type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
        </Col>
        <Col sm={6}>
          <Button onClick={handleLogin}>Login</Button>
        </Col>
      </Row>
      <hr />
    </Form>
  );
}

export default Login;
