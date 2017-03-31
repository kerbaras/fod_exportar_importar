import React from 'react'
import Slide from '../../Slide'
import Prism from '../../Prism'

let code = `import React from 'react'

const App = () => (
    <app>
        <h1>Hola</h1>
    </app>
)

export default App
`
        //<pre dangerouslySetInnerHTML={{__html: Prism.highlight(code, Prism.languages.pascal) }} />

const Program = () =>(
    <Slide>
       <Prism lineNumbers={true} language='javascript'>{ code }</Prism>
    </Slide>
)

export default Program