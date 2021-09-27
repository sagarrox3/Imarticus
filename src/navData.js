import React from 'react'
import * as faIcons from 'react-icons/fa';
import * as ioIcons from 'react-icons/io';


const Data = [
    {
        title: "Home",
        path:"/home",
        icon:<faIcons.FaHome />,
        cName : "nav-text"
    },
    {
        title: "Contact",
        path:"/contact",
        icon:<ioIcons.IoIosContact />,
        cName : "nav-text"
    },
    {
        title: "About",
        path:"/about",
        icon:<faIcons.FaCreativeCommonsBy />,
        cName : "nav-text"
    },
    {
        title: "Products",
        path:"/products",
        icon:<faIcons.FaProductHunt />,
        cName : "nav-text"
    }
];

export default Data;