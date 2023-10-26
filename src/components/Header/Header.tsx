import { useState } from "react"
import { StyledHeader, HeaderLeftSide, HeaderRightSide, BurgerMenu, BurgerMenuContent } from "./styles"
import { NavLink } from "react-router-dom"

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <StyledHeader >
            <HeaderLeftSide>
                <img src="/logosumavida.jpg" />
                <nav>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/nosotros"}>Nosotros</NavLink>
                    <NavLink to={"/servicios"}>Servicio</NavLink>
                    <NavLink to={"/calendario"}>Calendario</NavLink>
                    <NavLink to={"/contacto"}>Contacto</NavLink>
                </nav>
            </HeaderLeftSide>
            <HeaderRightSide>
                <button>
                    Iniciar Sesion
                </button>
                <BurgerMenu className="burger-menu" isOpen={isMenuOpen} onClick={() => setIsMenuOpen(prev => !prev)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </BurgerMenu>
            </HeaderRightSide>
            <BurgerMenuContent isOpen={isMenuOpen}>
                <h2>This is the menu</h2>
            </BurgerMenuContent>
        </StyledHeader>
    )
}

export default Header