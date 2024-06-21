import { useState, useEffect } from "react";
import {
  StyledHeader,
  HeaderLeftSide,
  HeaderRightSide,
  BurgerMenu,
  BurgerMenuContent,
} from "./styles";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  const size = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (size.width && size.width > 730) {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  }, [size, isMenuOpen]);

  return (
    <StyledHeader>
      <HeaderLeftSide>
        <img src="/logosumavida.jpg" />
        <nav>
          {!isAuthenticated ? (
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
        {!isLoading && (
          <button
            onClick={() => {
              if (isAuthenticated) {
                logout({
                  logoutParams: { returnTo: window.location.origin },
                });
              } else {
                loginWithRedirect();
              }
            }}
          >
            {isAuthenticated ? "Log Out" : "Log In"}
          </button>
        )}

        <BurgerMenu
          className="burger-menu"
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div></div>
          <div></div>
          <div></div>
        </BurgerMenu>
      </HeaderRightSide>
      <BurgerMenuContent isOpen={isMenuOpen}>
        <nav>
          {!isAuthenticated ? (
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
          <button
            onClick={() => {
              if (isAuthenticated) {
                logout({
                  logoutParams: { returnTo: window.location.origin },
                });
              } else {
                loginWithRedirect();
              }
            }}
          >
            {isAuthenticated ? "Log Out" : "Log In"}
          </button>
        </nav>
      </BurgerMenuContent>
    </StyledHeader>
  );
}

export default Header;
