import React, { useState } from 'react';
import * as Icons from 'react-icons/fa';
import * as ioIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import navData from '../navData';
import "../nav.css"
import Navbar from './Navbar';

const Sidebar = () => {

    const [side, setSide] = useState(false);

    return (
        <>


            <div className="navbar" >
                <Link to="#" className="menubar" >
                    <Icons.FaBars onClick={() => { setSide(!side) }} />
                </Link>
                <nav className={side ? "nav-menu active" : "nav-menu"} >
                    <ul className="nav-menu-items" >
                        <li className="navbar-toggle" onClick={() => { setSide(!side) }}>
                            <Link to="#" className="menu-bars">
                                <ioIcons.IoMdCloseCircle />
                            </Link>
                        </li>
                        {navData.map((cur, index) => {
                            return (
                                <li key={index} className={cur.cName} onClick={() => { setSide(!side) }}>
                                    <Link to={cur.path}> {cur.icon} <span> {cur.title} </span> </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div style={{ color: "white", marginRight: "5vw" }} >
                    <button className="btn btn-danger"> Sagar </button> &nbsp;&nbsp;
                    <button className="btn btn-primary" > Account </button>
                </div>
            </div>

            <Navbar propclass={side ? "navshift" : "navdefault"} />
        </>
    );
};

export default Sidebar;