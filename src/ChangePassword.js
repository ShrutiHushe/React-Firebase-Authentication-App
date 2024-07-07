import NavBar from "./NavBar";
import {useEffect, useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {getAuth, updatePassword, onAuthStateChanged} from "firebase/auth";

function ChangePassword()
{
	const nav = useNavigate();
	useEffect ( () => {
		let un = localStorage.getItem("username");
		if(un == null)
			nav("/");
	}, []);

	const rPassword1 = useRef();
	const rPassword2 = useRef();

	const[password1, setPassword1] = useState("");
	const[password2, setPassword2] = useState("");
	const[msg, setMsg] = useState("");

	const hPassword1 = (event) => {setPassword1(event.target.value);}
	const hPassword2 = (event) => {setPassword2(event.target.value);}

	const change = (event) => {
		event.preventDefault();
		const auth = getAuth();
		onAuthStateChanged(auth, (user) =>{
		updatePassword(user, password1)
		.then(res => {
			localStorage.removeItem("username");
			nav("/");
		})
		.catch(err => setMsg("issue "+err));
		});
}

return(
<>
<center>
<NavBar/>
<h1> ChangePassword Page </h1>
<form onSubmit = {change}>
<input type = "password" placeholder="enter password" onChange={hPassword1} ref = {rPassword1} value={password1}/>
<br/><br/>
<input type = "password" placeholder="confirm password" onChange={hPassword2} ref = {rPassword2} value={password2}/>
<br/><br/>
<input type = "submit" value="Change Password"/>
</form>
<h2> {msg} </h2>

</center>
</>
);
}
export default ChangePassword;