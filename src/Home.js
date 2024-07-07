import NavBar from "./NavBar";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Home()
{

	const nav = useNavigate();
	const [msg, setMsg] = useState("");

	useEffect( () => {
		let un = localStorage.getItem("username");
		if(un == null)
			nav("/");
		else
		{
			setMsg("Welcome " + un);
		}
}, []);

	const Io = (event) => {
		event.preventDefault();
		localStorage.removeItem("username");
		nav("/login");
	}

return(
<>
<center>
<NavBar/>
<h1> Home Page </h1>
<h2> {msg} </h2>
<form onSubmit = {Io} >
	<input type = "submit" value="Logout" />
</form>
</center>
</>
);
}
export default Home;