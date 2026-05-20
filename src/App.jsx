import App2 from "./App2.jsx"
import App3 from "./App3.jsx"
import './App.css'
import hero from "./assets/hero.png"
import App4 from "./App4.jsx"
import App5 from "./App5.jsx"
import Props1 from "./Props1.jsx"
import Props2_task from "./Props2_task.jsx"
import Props1_task from "./Props1_task.jsx"
import Map from "./Map1.jsx"
import Props1_task2 from "./Props1_task2.jsx"
import OnClick1 from "./onClick1.jsx"

function App() {
  // var name = "Daksh"
  let x = "mobile"
  let data = {Name1:"Watch",Price:"2000"}
  return (
    <>
    {/* // <h1>Welcome {name}</h1>
    // <App2/>
    // <App3/>
    // <App4/>
    // <App5/>
    // <img src="Mountain.jpg" height={200} width={200}  />
    // <img src={hero}  height={200} width={200} /> */}
    {/* <Props1 Name={x} Price="10000"/>
    <Props1 Name="Laptop" Price="50000"/> */}
    {/* <Props1 obj={data}/> */}
    {/* <Props1_task/> */}
    {/* <Map/> */}
    <Props1_task2/>
    <OnClick1/>
     </>
  )
}

export default App
