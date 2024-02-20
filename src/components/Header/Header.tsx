import { useState, useEffect, useContext } from "react"
import { StyledHeader, HeaderLeftSide, HeaderRightSide, BurgerMenu, BurgerMenuContent } from "./styles"
import { NavLink } from "react-router-dom"
import { useWindowSize } from "@uidotdev/usehooks"
import LoginContext from "../../context/LoginContext"

function Header() {
    const { token, refresh_token, setToken, setRefreshToken } = useContext(LoginContext)
    const size = useWindowSize()

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        if(size.width && size.width > 730) {
            if (isMenuOpen) {
                setIsMenuOpen(false)
            }
        }
    }, [size, isMenuOpen])

    const logOut = () => {
        setToken!("")
        setRefreshToken!("")
    }

    return (
        <StyledHeader >
            <HeaderLeftSide>
                <img src="/logosumavida.jpg" />
                <nav>
                    {!token || !refresh_token ? (
                        <>
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/nosotros"}>Nosotros</NavLink>
                            <NavLink to={"/servicios"}>Servicio</NavLink>
                            <NavLink to={"/eventos"}>Calendario</NavLink>
                            <NavLink to={"/contacto"}>Contacto</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to={"/profile"}>Perfil</NavLink>
                            <NavLink to={"/history"}>Historia clinica</NavLink>
                            <NavLink to={"/recommendations"}>Recomendaciones</NavLink>
                            <NavLink to={"/events"}>Eventos</NavLink>
                        </>
                    )}
                </nav>
            </HeaderLeftSide>
            <HeaderRightSide>
                {token && refresh_token ? (
                    <button onClick={logOut}>
                        Cerrar sesion
                    </button>
                ) : (
                    <NavLink className={"loginbutton"} to={"/login"}>
                        Iniciar sesion
                    </NavLink>
                )}
                <BurgerMenu className="burger-menu" isOpen={isMenuOpen} onClick={() => setIsMenuOpen(prev => !prev)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </BurgerMenu>
            </HeaderRightSide>
            <BurgerMenuContent isOpen={isMenuOpen}>
                <nav>
                    {!token || !refresh_token ? (
                        <>
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/nosotros"}>Nosotros</NavLink>
                            <NavLink to={"/servicios"}>Servicio</NavLink>
                            <NavLink to={"/calendario"}>Calendario</NavLink>
                            <NavLink to={"/contacto"}>Contacto</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to={"/profile"}>Perfil</NavLink>
                            <NavLink to={"/history"}>Historia clinica</NavLink>
                            <NavLink to={"/recommendations"}>Recomendaciones</NavLink>
                            <NavLink to={"/events"}>Eventos</NavLink>
                        </>
                    )}
                    {token && refresh_token ? (
                        <button onClick={logOut}>
                            Cerrar sesion
                        </button>
                    ) : (
                        <NavLink onClick={() => setIsMenuOpen(false)} className={"loginbutton"} to={"/login"}>
                            Iniciar sesion
                        </NavLink>
                    )}
                </nav>
            </BurgerMenuContent>
        </StyledHeader>
    )
}

export default Header