import React, { Component } from 'react'
import Prism from 'prismjs'

import 'prismjs/components/prism-pascal.js'
//import 'prismjs/themes/prism.css'
import './line-numbers'
import './theme.scss'

class PrismComponent extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        Prism.highlightAll()
    }
    
    genPreClasses() {
        let arr = new Array();

        if(this.props.lineNumbers){
            arr.push('line-numbers')
        }

        return arr.reduce((classes, cls) => (`${classes} ${cls}`), '')
    }

    render(){
        return (
            <pre start={this.props.start || 1} className={this.genPreClasses()} ref={ block => this.block = block }>
                <code className={`language-${this.props.language}`} >
                    { this.props.children }
                </code>
            </pre>
        )
    }
}

export default PrismComponent