
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import Card from './components/card/card'
import Ball from './components/ball/ball'

import './App.scss'
export default function App() {

  const [start, starter] = useState(false);

  function play() {
    starter(true)
  }

  return (
    <div className='container'>
      <div className='html'>
        <h1>Regras:</h1>
        <p>1- Você gera uma carta</p>
        <p>2- Leia a carta em voz alta</p>
        <p>3- Votem em quem é a pessoa mais provável do grupo para a carta, essa pessoa bebe.</p>
        <p>4- O primeiro a beber 5 vezes, perde.</p>
        <button className='button' onClick={play}>
          Ok
        </button>
      </div>
      <div id="canvas-container">
        <Canvas className='canvas'>
        <fog attach="fog" color="white" near={6.5} far={1} />
          {start ? <Card /> : <Ball/>}
        </Canvas>
      </div>
    </div>
  )
}




ReactDOM.render(<App />, document.getElementById('root'))
