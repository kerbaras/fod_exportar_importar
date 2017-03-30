import React, { Component } from 'react'
import Reveal from 'reveal.js'
import 'reveal.js/css/reveal.css'

class ReactReveal extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.options)
    }

    componentDidMount() {
        Reveal.initialize(this.props.options);
    }

    render(){
        return (
            <div className="reveal">
                { this.props.children }
            </div>
        )
    }
}
export default ReactReveal