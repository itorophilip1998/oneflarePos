import React from "react";
import { FormCheck } from "react-bootstrap";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import Logo from "../elements/Logo";

const Registration = () => (
  <Row>
     <Col lg={1} style={{ margin: "10px" }}>
      <Logo />
    </Col>
    <Col className="authForm" lg={5}>
      <Container>
        <Form className="authFormInput">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <div style={{ float: "right" }}>
              <h4>Create account</h4>
              <p>
              Get access to premium features now
              </p>
            </div>
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control defaultValue="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Company Name
            </Form.Label>
            <Col sm="10">
              <Form.Control defaultValue="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control defaultValue="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" defaultValue="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Repeat Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" defaultValue="" />
            </Col>
          </Form.Group>

          <hr></hr>

          <div style={{ float: "right" }}>

            <div>
              <Button
                type="submit"
                style={{ float: "right", marginTop: "20px" }}
                className="primary"
              >
                Create my account
              </Button>
            </div>
          </div>
          <Form.Group controlId="formPlaintextPassword">
          <Row md={12}>
            <Col sm="1">
              <FormCheck inline type="checkbox" label=""></FormCheck>
            </Col>

            <Col sm="11">
              <p className="sub-menu-item">I've read and accepted the <a href="terms"><span style={{fontWeight: 'bold'}}>Terms & Conditions</span></a></p>
            </Col>
            </Row>
          </Form.Group>
          
        </Form>
        <div className="authLink">
            <p>Already have an account? <a href="/login">Sign In</a></p>
          </div>
      </Container>
    </Col>
    <Col className="authBackgroundRegistration"></Col>
  </Row>
);

export default Registration;
