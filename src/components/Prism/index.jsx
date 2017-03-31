import React, { Component } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-pascal.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
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
            <pre className={this.genPreClasses()} ref={ block => this.block = block }>
                <code className={`language-${this.props.language}`} >
                    { this.props.children }
                </code>
            </pre>
        )
    }
}

export default PrismComponent