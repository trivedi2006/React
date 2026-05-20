import React from 'react'

export default function Props2_task(props) {
  return (
    <div>
      <ul>
        <li>{props.name}</li>
        <li>{props.roll}</li>
        <li>{props.marks+1}</li>

      </ul>
    </div>
  )
}
