/*import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
*/

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
   
    return (
        <>
            <header>
                <div className="MonLogo">
                    <img src="./../../src/image/logo.png" alt="" />
                </div>
                <nav ref={navRef}>
                    <a href="/#">Accueil</a>
                    <a href="/#">A propos</a>
                    <a href="/#">Contacts</a>
                    <a href="/#">Avantages</a>
                    <button type="button" class="btn btn-outline">connexion</button>
                    <button type="button" class="btn btn">Inscription</button>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </header>
            </>
    );
 
}

export default Navbar;