import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
export class ModalDigmond extends Component {

    render() {
        return (
            <>
                <Modal show={this.props.showModel} onHide={this.props.close} animation={false} >
                    <Form onSubmit={(e) => this.props.UpdateData(e)} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Update Image Path</Form.Label>
                            <Form.Control onChange={this.props.updateImgPath} value={this.props.imgPath} type="text" placeholder="Update Image Path" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Update Name</Form.Label>
                            <Form.Control onChange={this.props.updatename} value={this.props.name} type="text" placeholder="Update Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Update Level</Form.Label>
                            <Form.Control onChange={this.props.updatelevel} value={this.props.level} type="text" placeholder="Update Level" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Update
                        </Button>

                    </Form>
                </Modal>
            </>
        )
    }
}

export default ModalDigmond