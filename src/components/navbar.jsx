import React from "react";

export function Navbar() {
    const navbarArray= ["home","about","posts", "health"]

    const mappedNavbar = navbarArray.map((navItem) =>{return <li key={navItem} className={`navbar navbar-${navItem}`}>{navItem}</li>})

    return(
            <ul className="navbar-ul">
                {mappedNavbar}
            </ul>
    );
}