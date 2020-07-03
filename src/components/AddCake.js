import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap';

export class AddCake extends Component {
    state={
        title:'',
        desc:'',
        image:''
    }
    onChange=(e)=>{this.setState({[e.target.name]:e.target.value})}
    onSubmit=(e) =>
        {
        e.preventDefault();
        this.props.addCake(this.state.title,this.state.desc,this.state.image);
        this.setState({title:'', desc:'', image:''})
        }
    render() {
        return (
            <Form onSubmit={this.onSubmit} style={{ paddingBottom: "25px", paddingTop: "25px"}}>
                <h3>Add new cake:</h3>
                <Col sm md={12}>
                <Form.Control
                name="title"
                type="text"
                placeholder="test"
                value={this.state.title}
                onChange={this.onChange}
                />
                </Col>
                <Col sm md={12}>
                <Form.Control
                name="desc"
                type="text"
                placeholder="Description"
                value={this.state.desc}
                onChange={this.onChange}
                />
                </Col>
                <Col sm md={12}>
                <Form.Control
                name="image"
                type="text"
                placeholder="image url"
                value={this.state.image}
                onChange={this.onChange}
                />
                </Col>
                <Col md={12}>
                <Button variant="success" type="submit">Add Cake</Button>
                </Col>
            </Form>
        )
    }
}

export default AddCake
