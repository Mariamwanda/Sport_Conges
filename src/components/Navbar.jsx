import { useRef } from "react";
import React from "react";
/*import {FaBars, FaTimes} from "react-icons/fa"*/

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
   
    return (
        <>
            <header>
                <div className="MonLogo">
                    <img src="./../../src/images/balle.webp" alt="" />
                </div>
                <nav ref={navRef}>
                    <a href="/#">Accueil</a>
                    <a href="/#">A propos</a>
                    <a href="/#">Contacts</a>
                    <a href="/#">Avantages</a>
                    <button type="button" className="btn btn-outline">connexion</button>
                    <button type="button" className="btn btn">Inscription</button>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                   
                </button>
            </header>
            </>
    );
 
}

export default Navbar;