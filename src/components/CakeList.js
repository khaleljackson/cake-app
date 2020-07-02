import React, { Component } from 'react';
import ListItem from './ListItems';
import {Col,Row} from 'react-bootstrap';

export class CakeList extends Component {
    
    render() {
        return (
            <Col md="12" lg="12">
                <p>Here is the list body</p>
                <Row>
                    <ListItem cakes={this.props.cakes} delCake={this.props.delCake} editCake={this.props.editCake}/>
                </Row>
            </Col>
        )
    }
}

export default CakeList
