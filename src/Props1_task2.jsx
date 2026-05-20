import React from 'react'
import hero from './assets/hero.png'
import react from './assets/react.svg'
import Props_task2 from './Props_task2'
export default function Props1_task2() {
    const prod=[{pic:hero,'Name':'P1','Price':5000},{pic:react,'Name':'P1','Price':5000}]
  return (
    <div>
      <Props_task2 info={prod}/>
    </div>
  )
}