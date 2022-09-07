import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateForm extends React.Component {
   
    render() {
        return (
            <>
                <Modal show={this.props.showFlag} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.updateBook}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Book Title</Form.Label>
                                <Form.Control type="text" name="title" defaultValue={this.props.currentBook.title} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" defaultValue={this.props.currentBook.description} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" name="status" defaultValue={this.props.currentBook.status} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default UpdateForm;