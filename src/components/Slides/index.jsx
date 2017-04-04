import React, { Component } from 'react'
import Reveal from 'reveal.js'
import Slide from '../Slide'
import HomeSlide from './Home'
import FileSlide from './File'
import TextFileSlide from './TextFile'
import ProgramSlide from './Program'


const Slides = () => (
    <div className="slides">
        <HomeSlide />
        <TextFileSlide />
        <FileSlide />
        <ProgramSlide />
        <Slide color="#2962FF">
            <header>
                <h1>Preguntas?</h1>
            </header>
        </Slide>
    </div>
)

export default Slides