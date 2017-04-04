import React from 'react'

const Slide = ({ children, color }) => (
    <section data-background-color={color}>
        { children }
    </section>
)

export default Slide