import React from 'react'
import Slide from '../../Slide'
import CodeBlock from '../../CodeBlock'

let code = `<span class="fragment highlight-green">ibuprofeno</span><span class="fragment fade-in">⤶</span>
<span class="fragment highlight-blue">20181015</span> <span class="fragment highlight-blue">100</span> <span class="fragment highlight-green">ibuprofeno 400 mg. Cápsulas blandas.</span><span class="fragment fade-in">⤶</span> 
ibuprofeno
20170819 200 ibuprofeno 600 mg.
Ácido acetilsalicílico
20171222 256 Comprimidos: 100-500 mg.
lidocaina
20190505 23 Forma típica: 2-4% (clorhidrato).
lidocaina
20190515 10 Inyección: 1%; 2% (clorhidrato) en viales.
atropina
20180322 21 Inyección: 1 mg (sulfato) en ampollas de 1 ml.
paracetamol
20171108 8 Comprimidos: 100-500 mg.
paracetamol
20171008 5 Líquido oral: 125 mg/5 ml.
`
        //<pre dangerouslySetInnerHTML={{__html: Prism.highlight(code, Prism.languages.pascal) }} />

const FileComponent = () =>(
    <Slide>
       <CodeBlock lineNumbers={true} >{ code }</CodeBlock>
    </Slide>
)

export default FileComponent