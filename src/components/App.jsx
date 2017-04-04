import React from 'react'
import Reveal from './Reveal'
import Slides from './Slides'
import './App.scss'

const App = () => (
    <app>
        <Reveal
            options={{
                width: '1366',
	            height: '728',
                controls: false,
                backgroundTransition: 'zoom'
            }}>
            <Slides/>
        </Reveal>
    </app>
)

export default App