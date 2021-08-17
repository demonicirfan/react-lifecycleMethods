import React, { Component } from 'react'

export class Student extends Component {
    render() {
        return (
            <div>
               <h1>My name is {this.props.name} </h1>
            </div>
        )
    }
}

export default Student
