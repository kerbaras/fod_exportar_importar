import React from 'react'
import Slide from '../../Slide'
import CodeBlock from '../../CodeBlock'
import program from './programa'

const mapper = (program) => program.map((code, index) => (
    <Slide key={index}>
        <CodeBlock lineNumbers={true} language='pascal'>{ code }</CodeBlock>
    </Slide>)
)

const Program = () => (
    <Slide>
       { mapper(program) }
    </Slide>
)

export default Program