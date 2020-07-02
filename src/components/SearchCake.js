import React, { Component } from 'react';
import {Form, Col} from 'react-bootstrap';

export class SearchCake extends Component {
    state={
        search:''
    }
    onChange=(e)=>{
        this.setState({[e.target.name] : e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.searchCake(this.state.search);
    }
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Row>
                <Col sm md={8}>
                    <Form.Control
                    name="search"
                    type="text"
                    placeholder="search"
                    value={this.state.search}
                    onChange={this.onChange}
                    />
                </Col>
                <Col sm md={4}>
                    <Form.Control
                    value="Search"
                    type="submit"
                    />
                </Col>
                </Form.Row>
            </Form>
        )
    }
}

export default SearchCake
