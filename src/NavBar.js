import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
function NavBar()
{

	const[username, setUsername] = useState("");

	useEffect ( () => {
		setUsername(localStorage.getItem("username"));
	}, []);

return(
<>
<center>
<div className = "nav">
{ (username == null) && <Link to = "/" >Login </Link> }
{ (username == null) && <Link to = "/signup"> Signup </Link> }
{ (username == null) &&<Link to = "/fp" > ForgotPassword </Link> }
{ (username != null) && <Link to = "/home" > Home </Link> }
{ (username != null) &&<Link to = "/about" > About </Link> }
{ (username != null) &&<Link to = "/cp" > ChangePassword </Link> }

</div>
</center>
</>
);
}
export default NavBar;