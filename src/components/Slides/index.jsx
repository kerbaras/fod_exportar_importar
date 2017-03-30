import React, { Component } from 'react'
import Reveal from 'reveal.js'
import Slide from '../Slide'
import HomeSlide from './Home'
import FileSlide from './File'
import ProgramSlide from './Program'


const Slides = () => (
    <div className="slides">
        <HomeSlide />
        <ProgramSlide />
        <FileSlide />
        <Slide>
            <h1>Hola</h1>
        </Slide>
    </div>
)

export default Slides