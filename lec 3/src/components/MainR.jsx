import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Nopage from "./Nopage"

function MainR()
{
return(
    <>
    <Router>
        <div className="main-route">
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/Contact">Contact</Link></li>
                <li> <Link to="/About">About</Link></li>
            </ul>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="*" element={<Nopage/>}></Route>
        </Routes>
    </Router>
    </>
)}
export default MainR
