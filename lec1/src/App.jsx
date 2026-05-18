import App2 from "./App2.jsx"
import App3 from "./App3.jsx"
import './App.css'
import hero from "./assets/hero.png"
import App4 from "./App4.jsx"
function App() {
  var name = "Daksh"
  return (
    <>
    <h1>Welcome {name}</h1>
    <App2/>
    <App3/>
    <App4/>
    <img src="Mountain.jpg" height={200} width={200}  />
    <img src={hero}  height={200} width={200} />
         </>
  )
}

export default App
