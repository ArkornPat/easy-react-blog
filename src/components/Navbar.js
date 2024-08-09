import { Link } from "react-router-dom";
import "./Navbar.css"
export default function Navbar(){
    return(
        <nav>
            <Link to="/" className="logo"><h3>Blog App</h3></Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
        </nav>
    );
}