import React,{useState} from 'react'

export default function Task10() {
    
    const [task,settask] = useState({})
    

    const hc = (e) => {
       const {name,value} = e.target
       settask({...task,[name] : value})
    }

    const hs = (e) => {
        e.preventDefault()
        if(task.pwd === task.cpwd){
            alert(`Welcomeee !!`)
        }
        else{
            alert(`Passwords must be same !!`)
        }
    }

  return (
    <div>
        <form onSubmit = {hs}>
            <input type = 'email' name = 'email' onChange = {hc}/>
            <input type = 'password' name = 'pwd' onChange = {hc}/>
            <input type = 'password' name = 'cpwd' onChange = {hc}/>
            <input type = 'submit' value = 'submit'/>
        </form>
    </div>
  )
}
