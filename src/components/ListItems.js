import React, { Component } from 'react';
import { Button, Card, Col} from 'react-bootstrap';

export class ListItems extends Component {
    render() {
        const x="test";
        const y="desc test";
        return this.props.cakes.map((cake,id)=>
            <Col md={6} lg={4} sm>
                <Card key={cake.id=id++} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cake.image} />
                    <Card.Title>{cake.title}</Card.Title>
                    <Card.Text>{cake.desc}</Card.Text>
                    <Button variant="danger" onClick={this.props.delCake.bind(this, cake.id)}>Delete</Button>
                    <Button variant="warning" onClick={this.props.editCake.bind(this, cake.id, x, y)}>Edit</Button>
                </Card>
            </Col>
        )
    }
}

export default ListItems
