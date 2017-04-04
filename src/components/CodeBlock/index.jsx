import React from 'react'
import Highlight from 'highlight.js'
import './theme.scss'

const LineNumbers = ({ code }) => (
    <ul>
        { code.match(/\n/gi).map( (line, i) => <li key={i}></li>) }
    </ul>
)

const makeLines = (hasLines, code) => hasLines ? <LineNumbers code={code} /> : null

const createCode = (code, language) => (language ? Highlight.highlight(language, code, false).value : code);

const CodeBlock = ({ children: code, language, lineNumbers, fontSize }) => (
    <pre className={lineNumbers ? "line-numbers" : null} style={{fontSize}}>
        { makeLines(lineNumbers, code) }
        <code  style={{fontSize}} dangerouslySetInnerHTML={{ __html: createCode(code, language)}} />
    </pre>
)

export default CodeBlock