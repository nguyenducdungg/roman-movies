import React from 'react'
import { Form, Row, Col, Container, Button } from "react-bootstrap";
const Contact = () => {
    return (
        <>
            <br /><br /><br />
            <Container>
                <div className="background-contact">
                    <Form className="form-contact">
                        <h2 style={{textAlign: 'center' , margin : '15px 0'}}>Liên hệ</h2>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Tên của bạn</Form.Label>
                                <Form.Control type="text" placeholder="Tên của bạn" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Nhập email" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control placeholder="Nhập số điện thoại" type="number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nội Dung</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{marginBottom: '15px'}}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
            <br /><br /><br /><br />
        </>
    )
}
export default Contact
