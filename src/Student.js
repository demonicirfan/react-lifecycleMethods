import React, { Component } from 'react'
import Marks from './Marks'


export class Student extends Component {
    render() {
        console.log(" Students Rendered")
        return (
            <div>
               <h1>My name is {this.props.name} </h1>
               <Marks/>
            </div>
        )
    }
}

export default Student
