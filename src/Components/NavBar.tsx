import { Link } from "react-router"
import "../index.css"

function NavBar (){
    
    return (
        <>
            <nav className="gap-5 list-none pr-5 flex">
                <li className="hover:text-pink-500 underline-hover"><Link to={'/'}>Inicio</Link></li>
                <li className="hover:text-pink-500 underline-hover"><Link to={'/mods'}>Mods</Link></li>
                <li className="hover:text-pink-500 underline-hover"><Link to={'/sobre'}>Sobre</Link></li>
            </nav>
        </>
    )
    
}

export default NavBar