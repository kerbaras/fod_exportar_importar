import React from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-pascal';
import 'prismjs/themes/prism.css';
//import 'prismjs/themes/prism-dark.css';
import Slide from '../../Slide'

let code = `program exportImport;
type
    TAlumno = record
        nombre, apellido: string;
        fecha, codigo: integer;
    end;

    FAlumno = file of TAlumno;
`

const Program = () =>(
    <Slide>
        <pre dangerouslySetInnerHTML={{__html: Prism.highlight(code, Prism.languages.pascal) }} />
    </Slide>
)

export default Program