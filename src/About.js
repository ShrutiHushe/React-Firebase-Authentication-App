import NavBar from "./NavBar";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function About()
{
	const nav = useNavigate();

	useEffect( () => {
		let un = localStorage.getItem("username");
		if(un == null)
			nav("/");
}, []);
return(
<>
<center>
<NavBar/>
<h1> About Page </h1>
<p> My name is Shruti </p>
<p> I'm currently in my Fourth year of Engineering </p>
</center>
</>
);
}
export default About;