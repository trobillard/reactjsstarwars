import {Link} from "react-router-dom";

function Nav (){
    return(
        <nav className="bg-secondary">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/homepage">Homepage</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/spe">Spe</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/link">Link</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;