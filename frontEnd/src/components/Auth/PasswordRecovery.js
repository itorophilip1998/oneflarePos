import React from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import Logo from "../elements/Logo";

const PasswordRecovery = () => (
  <Row>
      <Col lg={1} style={{ margin: "10px" }}>
      <Logo />
    </Col>
    <Col className="authForm" lg={5}>
      <Container>
        <Form className="authFormInput">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <div style={{ float: "right" }}>
              <h4>Password recovery</h4>
              <p>
                Please fill the email you've used to create your One flare
                account and we'll send you a reset link.
              </p>
            </div>
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control defaultValue="" />
            </Col>
          </Form.Group>

          <div style={{ float: "right" }}>

            <div>
              <Button
                type="submit"
                style={{ float: "right", marginTop: "20px" }}
                className="primary"
              >
                Reset my password
              </Button>
            </div>
          </div>
        </Form>
        <div className="authLink">
            <p> <a href="/login">Back to login</a></p>
          </div>
      </Container>
    </Col>
    <Col className="authBackgroundRecovery"></Col>
  </Row>
);

export default PasswordRecovery;
