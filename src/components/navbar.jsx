import React, {useState} from "react";

export function Navbar() {
    const navbarArray= ["Latest","About","Posts"]
    const mappedNavbar = navbarArray.map((navItem) =>{return <a key={navItem} className={`navbar navbar-${navItem}`} href= {`/${navItem}`}>{navItem}</a>})
    const [nav, setNav] = useState()
    const websiteNavbar= () =>{
        let navHeight=document.getElementsByClassName("site-navbar")
        if(navHeight.style.height == "0%"){
            setNav(navHeight.style.height="100%")
        };
        if(navHeight.style.height == "100%"){
            setNav(navHeight.style.height="0%")
        };
    }
    
    return(
        <nav className="site-navbar">
            <div className="overlay">
                <a href="javascript:void(0)" className="closebtn" onClick={websiteNavbar}>&times;</a>
                <div className="navbar-parent">
                    {mappedNavbar}
                </div>
            </div>
            <span className="nav-hamburger" onClick={websiteNavbar}>&#9776; open</span>
        </nav>
    );
}