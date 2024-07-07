import logo from './logo.svg';
import './App.css';
import Signup from "./Signup";
import Login from "./Login";
import About from "./About";
import Home from "./Home";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
<BrowserRouter>
<Routes>
	<Route path = "/" element={<Login/>}/>
	<Route path = "/signup" element={<Signup/>}/>
	<Route path = "/home" element={<Home/>}/>
	<Route path = "/about" element={<About/>}/>
	<Route path = "/cp" element={<ChangePassword/>}/>
	<Route path = "/fp" element={<ForgotPassword/>}/>
	<Route path = "*" element={<Login/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
