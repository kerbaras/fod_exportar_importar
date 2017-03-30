import React from 'react'
import Paper from 'react-md/lib/Papers';
import Slide from '../../Slide'

const Fragment = ({ index, children, type }) => (
    <span className={"fragment " + type}>
        { children }
    </span>
)

const File = () =>(
    <Slide>
        <Paper zDepth={1}>
            <Fragment type="highlight-blue">45</Fragment><Fragment type="highlight-red"> </Fragment><Fragment type="highlight-blue">1234</Fragment><Fragment type="highlight-red"> </Fragment><Fragment type="highlight-green">Hola mundo!</Fragment><Fragment type="highlight-red fade-in">\n</Fragment><br />
            <Fragment type="highlight-green">Soy Matías Pierobón</Fragment><Fragment type="fade-in highlight-red">\n</Fragment><br />
        </Paper>
    </Slide>
)

export default File
