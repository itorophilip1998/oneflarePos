import React from "react";
import { FormCheck } from "react-bootstrap";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import Logo from "../elements/Logo";

const Login = () => (
  <Row>
    <Col lg={1} style={{ margin: "10px" }}>
      <Logo />
    </Col>
    <Col className="authForm" lg={5}>
      <Container>
        <Form className="authFormInput">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <div style={{ float: "right" }}>
              <h4>Login</h4>
              <p>Welcome to Oneflare inventory Solution</p>
            </div>
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control placeholder="email@mail.com" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <div style={{ float: "right" }}>
            <a href="password/recovery" className="sub-menu-item">
              Forget Password?
            </a>
            <div>
              <Button
                type="submit"
                style={{ float: "right", marginTop: "20px" }}
                className="primary"
              >
                Login
              </Button>
            </div>
          </div>
          <Form.Group controlId="formPlaintextPassword">
            <Col sm="10">
              <FormCheck label="Remember me"></FormCheck>
            </Col>
          </Form.Group>
        </Form>
        <div className="authLink">
          <p>
            Don't have an account? <a href="/registration">Sign Up</a>
          </p>
        </div>
      </Container>
    </Col>
    <Col className="authBackground"></Col>
  </Row>
);

export default Login;
