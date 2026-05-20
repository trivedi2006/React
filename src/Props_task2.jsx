
import React from 'react'

export default function Props_task2(props) {
    var hc=()=>{
        alert("gaye guruu!!")
    }
  return (
    <>
    <div>
      {props.info.map(pr=>{
        return(
            <div>
                <img src={pr.pic} alt="Image1"/>
                <h3>{pr.Price}</h3>
                <h3>{pr.Name}</h3>
            </div>
        )
      })}
    </div>
    <button onClick={hc}>Click Here to see you future</button>
    </>
  )
}