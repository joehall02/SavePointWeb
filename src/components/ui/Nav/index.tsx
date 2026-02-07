import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link to={"/"}>Home</Link>
			<Link to={"/search"}>Search</Link>
			<Link to={"/collection"}>Collection</Link>
			<Link to={"/platforms"}>Platforms</Link>
		</nav>
	);
}

export default Nav;
