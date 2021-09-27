import React from 'react'
import { Link } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Navbar = (props) => {

    const constNavClass = `navbar navbar-expand-lg navbar-light bg-dark  ${props.propclass}`;
    return (
        <>
            <nav className={constNavClass}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-black text-uppercase" to="/">Learn</Link>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-black" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/contact">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;