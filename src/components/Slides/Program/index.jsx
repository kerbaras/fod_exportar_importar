import React from 'react'
import Slide from '../../Slide'
import Prism from '../../Prism'

let code = `program exportImport;
type
    TAlumno = record
        nombre, apellido: string;
        fecha, codigo: integer;
    end;

    FAlumno = file of TAlumno;
`
        //<pre dangerouslySetInnerHTML={{__html: Prism.highlight(code, Prism.languages.pascal) }} />

const Program = () =>(
    <Slide>
       <Prism lineNumbers={true} language='pascal'>{ code }</Prism>
    </Slide>
)

export default Program