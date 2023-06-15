import { NavLink } from "react-router-dom";

import './nav.css'

function Nav() {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-center">
                    <NavLink className="links-nav" to={'/'}>Home</NavLink>
                    <NavLink className="links-nav"  to={'/'}>Projetos</NavLink>
                    <NavLink className="links-nav"  to={'/'}>Sobre</NavLink>
                    <NavLink className="links-nav"  to={'/'}>Contato</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav;