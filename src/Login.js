import NavBar from "./NavBar";
import {useState, useRef} from "react";
import app from "./Firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


function Login()
{
	useEffect( () => {
		let un = localStorage.getItem("username");
		if(un != null)
			nav("/home");
	}, []);


	const nav = useNavigate();
	const rUsername = useRef();
	const rPassword = useRef();

	const[username, setUsername] = useState("");
	const[password, setPassword] = useState("");
	const[msg, setMsg] = useState("");

	const hUsername = (event) => {setUsername(event.target.value);}
	const hPassword = (event) => {setPassword(event.target.value);}

	const login = (event) => {
		event.preventDefault();

		if(username == "")
		{
			alert("u did not enter email");
			setMsg("");
			rUsername.current.focus();
			return;
		}

		if(password == "")
		{
			alert("u did not enter password");
			setMsg("");
			rPassword.current.focus();
			return;
		}

		const auth = getAuth();
		signInWithEmailAndPassword(auth, username, password)
		.then(res =>{
			localStorage.setItem("username", username);
			nav("/home");	
		})
		.catch(err=> setMsg("issue "+ err));

}

return(
<>
<center>
<NavBar/>
<h1> Login Page </h1>
<form onSubmit = {login}>
<input type = "email" placeholder="enter email" onChange={hUsername} ref = {rUsername} value={username}/>
<br/><br/>
<input type = "password" placeholder="enter password" onChange={hPassword} ref = {rPassword} value={password}/>
<br/><br/>
<input type = "submit" value="Login"/>
</form>
<h2> {msg} </h2>
</center>
</>
);
}
export default Login;