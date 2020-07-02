import React, { Component } from 'react'

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
            <form onSubmit={this.onSubmit}>
                <input
                name="title"
                type="text"
                placeholder="test"
                value={this.state.title}
                onChange={this.onChange}
                />
                <input
                name="desc"
                type="text"
                placeholder="Description"
                value={this.state.desc}
                onChange={this.onChange}
                />
                <input
                name="image"
                type="text"
                placeholder="image url"
                value={this.state.image}
                onChange={this.onChange}
                />
                <input
                type="submit"
                value="Add Cake"
                />
            </form>
        )
    }
}

export default AddCake
