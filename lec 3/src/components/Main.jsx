// Create a React app to perform the following tasks using functional components:

// Implement the following components in your React application:

// Main.js to set up the router and define the routes.

// Home.js for the Home page.

// Product.js for the Product page.

// Create a React Router:

// Include two routes: Home and Product. Implement navigation between these routes.

// Create the following routes and components:

// When a user clicks on the Home page link, it should navigate to the Home page and display "Welcome Students" within an <h1> heading with blue color. Also, include link to product page.

// A Product page that displays three products' information (name, price, and image) using props. When a user clicks on the Product page link, it should navigate to the Product page and display three products' information name, price and product image using props.



import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from './Home';
import Product from './Product'
import Nopage from './Nopage';
import hero from "../assets/hero.png"

function Main() {
    const products=[{name:"p1",price:20000, pic:hero},{name:"p2",price:14000, pic:hero},{name:"p3",price:40000, pic:hero}]
return (
<div>
    <Router >
       <div className='main-route'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
              </ul>
        </div>        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product info={products}/>}/>
            <Route path="*" element={<Nopage/>}/>
        </Routes>
    </Router>

</div>
);
}
export default Main