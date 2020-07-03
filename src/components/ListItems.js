import React, { Component } from 'react';
import { Button, Card, Col, Accordion} from 'react-bootstrap';

export class ListItems extends Component {

    render() {
        return this.props.cakes.map((cake,id)=>
            <Col md={6} lg={4} sm>
                <Card key={cake.id=id++} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cake.image} />
                    <Card.Title>{cake.title}</Card.Title>
                    <Card.Text>{cake.desc}</Card.Text>
                    <Button variant="danger" onClick={this.props.delCake.bind(this, cake.id)}>Delete</Button>
                    <Accordion>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Edit me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <input
                            name="title"
                            onChange={this.props.editCake.bind(this, cake.id)}
                            value={cake.title}
                            />
                        </Accordion.Collapse>
                    </Accordion>
                </Card>
            </Col>
        )
    }
}

export default ListItems
