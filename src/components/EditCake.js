import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';

export class EditCake extends Component {
    render() {
        return (
            <Modal show={true}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <input
                            type="text"/>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
                </Modal>
        )
    }
}

export default EditCake
