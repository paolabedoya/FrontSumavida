import { StyledHeader, HeaderLeftSide, HeaderRightSide } from "./styles"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <StyledHeader >
            <HeaderLeftSide>
                <img src="/logosumavida.jpg" />
                <nav>
                    <NavLink to={"/inicio"}>Home</NavLink>
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
            </HeaderRightSide>
        </StyledHeader>
    )
}

export default Header