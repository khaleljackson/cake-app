import React, { Component } from 'react'

export class EditCake extends Component {
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
                type="submit"
                value="Edit Cake"
                />
            </form>
        )
    }
}

export default EditCake
