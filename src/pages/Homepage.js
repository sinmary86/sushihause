import React, { useEffect, useState} from "react";
import { gsap } from "gsap";
import Navbar from "../Navbar"; 
import "../styles/Homepage.css"; 
import { Link } from 'react-router-dom';

const Homepage = () => {

   const [menuOpen, setMenuOpen] = useState(false); 
      const toggleMenu = () => {
          setMenuOpen((prev) => !prev);
      };
  

    useEffect(() => {
        gsap.fromTo(
            ".homepage-content h1",
            { opacity: 0, x: -350 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.in" }
        );

        gsap.fromTo(
            ".homepage-content h3",
            { opacity: 0, x: 350 },
            { opacity: 1, x: 0, duration: 2, ease: "power3.out", delay: 0.5 }
        );
    }, []);

    return (
        <div className="homepage">
    
        <video className="background-video" src="/sushivideo.mp4" autoPlay loop muted />
            
            <div className="navbar-overlay">
                <Navbar />
            </div>


            <div className="homepage-content">
                <h1>Herzlich Willkommen!</h1>
                <h3>Lass uns eine kleine Reise nach Asien machen</h3>
                
                <div className="button-row">
                <Link className="btnLink" to="/bestellung" onClick={toggleMenu}>
                    <span>Jetzt bestellen</span>
                </Link>
                <Link className="btnLink" to="/restaurants" onClick={toggleMenu}>
                    <span>Tisch reservieren</span>
                </Link>
    </div>
            </div>
            
        </div>
    );
};

export default Homepage;
