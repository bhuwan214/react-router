import { Routes,Route } from "react-router";
import { About } from "./About";
import { Contact } from "./contact";
import {Home} from "./Home"

export default function App() {
  return (
<>
<h1 className=" text-center text-3xl font-bold  p-5">Here is the tailwind & Reatrouter check</h1>
 <Routes>
  <Route path="/" element={<Home/>} /> 
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>}/>
 </Routes>
  
</>

)
}
