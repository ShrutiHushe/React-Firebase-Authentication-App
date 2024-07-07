import NavBar from "./NavBar";
import {useState, useRef, useEffect} from "react";
import app from "./Firebase";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";


function Signup()
{
	const nav = useNavigate();

	useEffect( () => {
		let un = localStorage.getItem("username");
		if(un != null)
			nav("/home");
	}, []);

	const rUsername = useRef();
	const rPassword1 = useRef();
	const rPassword2 = useRef();

	const[username, setUsername] = useState("");
	const[password1, setPassword1] = useState("");
	const[password2, setPassword2] = useState("");
	const[msg, setMsg] = useState("");

	const hUsername = (event) => {setUsername(event.target.value);}
	const hPassword1 = (event) => {setPassword1(event.target.value);}
	const hPassword2 = (event) => {setPassword2(event.target.value);}

	const save = (event) => {
		event.preventDefault();

		if(username == "")
		{
			alert("u did not enter email");
			setMsg("");
			rUsername.current.focus();
			return;
		}

		if(password1 == "")
		{
			alert("u did not enter password");
			setMsg("");
			rPassword1.current.focus();
			return;
		}

		if(password2 == "")
		{
			alert("u did not enter confirm password");
			setMsg("");
			rPassword2.current.focus();
			return;
		}

		if(password1 == password2)
		{
			const auth = getAuth();
			createUserWithEmailAndPassword(auth, username, password1)
			.then(res => nav("/"))
			.catch(err => setMsg("issue "+ err));

		}
		else
		{
			setMsg("Passwords did not match");
			setPassword1("");
			setPassword2("");
			rPassword1.current.focus();
		}
	}
return(
<>
<center>
<NavBar/>
<h1> Signup Page </h1>
<form onSubmit = {save}>
<input type = "email" placeholder="enter email" onChange={hUsername} ref = {rUsername} value={username}/>
<br/><br/>
<input type = "password" placeholder="enter password" onChange={hPassword1} ref = {rPassword1} value={password1}/>
<br/><br/>
<input type = "password" placeholder="confirm password" onChange={hPassword2} ref = {rPassword2} value={password2}/>
<br/><br/>
<input type = "submit" value="Register"/>
</form>
<h2> {msg} </h2>
</center>
</>
);
}
export default Signup;