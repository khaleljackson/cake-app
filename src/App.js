import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import CakeApp from './components/CakeApp';
import AddCake from './components/AddCake';
import SearchCake from './components/SearchCake';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

class App extends Component{

  state={
    cakes:[
    ]
  }

  componentDidMount() {
    axios
      .get('https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json')
      .then(res => this.setState({ cakes: res.data }));
  }

delCake=(id)=>{this.setState({cakes:[...this.state.cakes.filter(cake => cake.id !== id)]})}

addCake=(title, desc, image)=>{
  const newCake={
    title,
    desc,
    image
  }
  this.setState({cakes:[...this.state.cakes, newCake]});
}

searchCake=(search)=>{
  this.setState({cakes:[...this.state.cakes.filter(cake => cake.title === search)]})
}

editCake=(id,e)=>{
  const index = this.state.cakes.findIndex((cake)=>{
  return cake.id === id;
});

const cake = Object.assign({}, this.state.cakes[index]);

cake.title=e.target.value;

const cakes = Object.assign([], this.state.cakes);

cakes[index] = cake;

this.setState({cakes:cakes});
}

render(){
  return (
    <Router>
    <div className="App">
       <Route exact path='/'>
       <Container>
          <Row className="justify-content-md-center">
            <h1>Cake App</h1>
            <Col lg="12">
              <SearchCake searchCake={this.searchCake}/>
            </Col>
            <Col lg="12">
              <AddCake addCake={this.addCake}/> 
            </Col>
            <Col lg="12">
              <CakeApp cakes={this.state.cakes} delCake={this.delCake} editCake={this.editCake}/>
            </Col>
          </Row>
        </Container>
        </Route>
    </div>
    </Router>
  )
} 
}

export default App;
