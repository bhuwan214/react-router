import { Routes,Route,Link } from "react-router";
import { About } from "./About";
import { Contact } from "./contact";
import {Home} from "./Home"
import "./App.css"

export default function App() {
  return (
<>

<div className=" flex flex-row justify-center m-5 ">
<div className="floatingNav ">
<Link to="/">  Home </Link>
<Link to="/about"> About </Link>
<Link to="/contact"> Contact </Link>
</div></div>

<h1 className=" text-center text-3xl font-bold  p-5">Here is the tailwind & Reatrouter check</h1>

{/* Routes create wrapper for wraping different route */}

 <Routes>
  <Route path="/" element={<Home/>} /> 
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>}/>
 </Routes>
  
</>

)
}
