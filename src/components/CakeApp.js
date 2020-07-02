import React, { Component } from 'react'
import CakeList from './CakeList';
import {Col} from 'react-bootstrap';

export class CakeApp extends Component {
    render() {
        return (
            <Col lg="12">
                the main container
                <CakeList cakes={this.props.cakes} delCake={this.props.delCake} editCake={this.props.editCake}/>
            </Col>
        )
    }
}

export default CakeApp
