import React from 'react'
import Slide from '../../Slide'
import Ide from '../../CodeBlock'

const TextFile = () => (
    <Slide color='#2196F3'>
        <Slide><h1>Archivos de Texto</h1></Slide>
        <Slide><blockquote>“Tipo de archivo que es esctucturado como una secuencia de lineas de texto"</blockquote></Slide>
        <Slide>
            <Ide language="pascal" fontSize={24}>var textFile: text;</Ide>
        </Slide>
        <Slide>
            <Ide language="pascal" fontSize={24}>{`writeln(archivo, 'hola');\nread(archivo, fecha);\nreadln(archivo, nombre);`}</Ide>
        </Slide>
    </Slide>
)

export default TextFile