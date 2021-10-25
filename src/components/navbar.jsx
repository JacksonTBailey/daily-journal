import React from "react";

export function Navbar() {
    const navbarArray= ["Latest","About","Posts"]
    const mappedNavbar = navbarArray.map((navItem) =>{return <a key={navItem} className={`navbar navbar-${navItem}`} href= {`/${navItem}`}>{navItem}</a>})
    const openNav /*https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp */

    return(
        <nav className="site-navbar">
            <div className="overlay">
                <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
                <div className="navbar-parent">
                    {mappedNavbar}
                </div>
            </div>
            <span onClick="openNav()">open</span>
        </nav>
    );
}