import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav>
            <Link to="/" className="nav"><h3>Social Media App</h3></Link>
        </nav>
    )
}

export default Navbar;