import {Link} from "react-router-dom";

function Nav (){
    return(
        <nav className="bg-secondary">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/myList">My list</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/myProfil">My Profil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/link">Link</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;