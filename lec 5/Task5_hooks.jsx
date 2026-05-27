import img1 from "./assets/img1.jpg"
import hero from "./assets/hero.png"
import react from "./assets/react.svg"
import React,{useState} from 'react'

function Task5_hooks()
{
    const arr = [img1,hero,react]
    const [pic,setpic] = useState(arr[0])
    const hc =()=>
    {
        const r = Math.floor(Math.random()*arr.length)
        setpic(arr[r])
    }
    return(
        <>
            <img src={pic} height={200} width={200} />
            <button onClick={hc}>change image</button>
        </>
    )
}
export default Task5_hooks