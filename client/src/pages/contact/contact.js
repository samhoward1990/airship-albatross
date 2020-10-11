import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

class Contact extends React.Component {
    render() {
        return (
            <Container>
                <Form className="styled-form">
                    <Row>
                        <Col xs="12" lg="6">
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control className="styled-form-input" type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs="12" lg="6">
                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control className="styled-form-input" type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="6">
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="styled-form-input" type="email" />
                            </Form.Group>
                        </Col>
                        <Col xs="12" lg="6">
                            <Form.Group controlId="phoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control className="styled-form-input" type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="6" className="styled-form-input" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default Contact;