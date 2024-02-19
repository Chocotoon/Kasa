import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { useState } from 'react'

function Header() {
    const [currentPage, setCurrentPage] = useState("/")

    const isLinkActive = (link) => {
        return currentPage === link ? { textDecoration: "underline" } : {};
    };

    return (
        <div className='header'>
            <img className='logo' src={Logo} alt="logo Kasa" />
            <nav>
               <Link to="/" style={isLinkActive("/")} onClick= {() =>{setCurrentPage("/")}}>Accueil</Link>
               <Link to="/a_propos" style={isLinkActive("/a_propos")} onClick= {() =>{setCurrentPage("/a_propos")}}>A Propos</Link>
            </nav>
        </div>
    )
}

export default Header