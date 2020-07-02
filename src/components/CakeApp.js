import React, { Component } from 'react'
import CakeList from './CakeList';
import {Col} from 'react-bootstrap';

export class CakeApp extends Component {
    render() {
        return (
            <Col lg="12" style={mainStyle}>
                <CakeList cakes={this.props.cakes} delCake={this.props.delCake} editCake={this.props.editCake}/>
            </Col>
        )
    }
}
const mainStyle={
    backgroundColor:'#f4f4f4'
}

export default CakeApp
