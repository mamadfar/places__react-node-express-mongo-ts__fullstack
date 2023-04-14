import "./NavLinks.css";
import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/auth-context";

const NavLinks = (props: any) => {

    const navigate = useNavigate();
    const {isLoggedIn, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate("/", {replace: true})
    }

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">All Users</NavLink>
            </li>
            {isLoggedIn && (
                <>
                    <li>
                        <NavLink to="/u1/places">My Places</NavLink>
                    </li>
                    <li>
                        <NavLink to="/places/new">Add Place</NavLink>
                    </li>
                </>
            )}
            {!isLoggedIn && (
                <li>
                    <NavLink to="/auth">Authenticate</NavLink>
                </li>
            )}
            {isLoggedIn && (
                <li>
                    <button onClick={handleLogout}>LOGOUT</button>
                </li>
            )}
        </ul>
    )
}

export default NavLinks;
