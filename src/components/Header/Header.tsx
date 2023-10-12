import { StyledHeader, HeaderLeftSide, HeaderRightSide } from "./styles"

function Header() {
    return (
        <StyledHeader >
            <HeaderLeftSide>
                <img src="/logosumavida.jpg" />
                <nav>
                    <a href="*">Home</a>
                    <a href="*">Nosotros</a>
                    <a href="*">Servicio</a>
                    <a href="*">Calendario</a>
                    <a href="*">Contacto</a>
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