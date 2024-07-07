import NavBar from "./NavBar";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import app from "./Firebase";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";

function ForgotPassword()
{
	const [username, setUsername] = useState("");
	const hUsername = (event) => {setUsername(event.target.value);}

	const nav = useNavigate();

	useEffect ( () => {
		let un = localStorage.getItem("username");
		if(un != null)
			nav("/home");
	}, []);

const sm = (event) =>{
	event.preventDefault();
	const auth = getAuth();
	sendPasswordResetEmail(auth, username)
	.then(res => nav("/"))
	.catch(err => alert("issue "+ err));
}

return(
<>
<center>
<NavBar/>
<h1> ForgotPassword Page </h1>
<form onSubmit = {sm}>
	<input type = "email" placeholder="enter reg email" onChange={hUsername}/>
	<br/><br/>
	<input type = "submit" value="Reset"/>
</form>
</center>
</>
);
}
export default ForgotPassword;