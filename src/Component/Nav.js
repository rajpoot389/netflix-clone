import React, { useState, useEffect } from 'react'
import logo from './IMAGES/netflix1.png';
import avatar from './IMAGES/avatar2.png';
import './CSS/nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
            return () => {
                window.removeEventListener("scroll")
            };
        })
    }, [])
    return (
        <div className={show ?
            "new_nav" : "nav"}>
            <div className="logo">
                <img className="logo_img" src={logo} alt="netflix_logo" />
            </div>
            <div className="avatar">
                <img className="avatar_img" src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default Nav
