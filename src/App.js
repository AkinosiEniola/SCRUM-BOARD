import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./Components/Sign-up/Sign-up";
import Signin from "./Components/Sign-in/Sign-in";
import Home from "./Components/Home/Home";
import { Scrumboard } from "./Components/Scrumboard/Scrumboard";


function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/scrumboard" element={<Scrumboard/>}/>
        </Routes>
        </BrowserRouter>
    ) 
}

export default App;