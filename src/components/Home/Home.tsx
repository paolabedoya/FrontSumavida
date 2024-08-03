import { Slider } from "../Slider/Slider";
import ImgAlimentacion from "../../assets/alimentacion.png";
import ImgCompromiso from "../../assets/compromiso.png";
import ImgDeporte from "../../assets/deporte.png";
import ImgNutricion from "../../assets/nutricion.jpeg";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import LoginContext from "../../context/LoginContext";
import { useAuth0 } from "@auth0/auth0-react";

const ProfessionalsContainer = styled.div`
  background-color: #9d1519;
  color: white;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 6rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.4rem;
    img {
      border-radius: 100%;
      height: 12rem;
    }
  }
`;

const StyledFeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3rem 0;
  flex-wrap: wrap;
  gap: 6rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    font-size: 30px;
    color: #9d1519;
  }
`;

const NutritionServices = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 6rem;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      max-width: 300px;
      color: #9d1519;
      font-size: 20px;
      font-weight: normal;
      text-align: center;
    }
    img {
      width: 300px;
    }
  }
`;

export function Home() {
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const handleRedirect = async () => {
      const token = await getAccessTokenSilently();
      console.log("token: ", token);
    };
    if (!isLoading && isAuthenticated) {
      handleRedirect();
    }
  }, [isLoading, isAuthenticated, getAccessTokenSilently]);

  return (
    <>
      <Slider />
      <div
        style={{
          backgroundColor: "#9D1519",
          color: "white",
          padding: "60px",
        }}
      >
        <p
          style={{
            fontSize: "40px",
            textAlign: "center",
            letterSpacing: "5px",
            lineHeight: "40px",
            padding: "0 60px",
          }}
        >
          Una buena dieta es aquella en la que parece que no estás a dieta.
        </p>
      </div>
      <StyledFeaturesContainer>
        <div>
          <img src={ImgAlimentacion} alt="alimentacion image" />
          <span>Alimentacion</span>
        </div>
        <div>
          <img src={ImgCompromiso} alt="compromiso image" />
          <span>Compromiso</span>
        </div>
        <div>
          <img src={ImgDeporte} alt="deporte image" />
          <span>Deporte</span>
        </div>
      </StyledFeaturesContainer>
      <div
        style={{
          backgroundColor: "#9D1519",
          color: "white",
          padding: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "40px",
            textAlign: "center",
            letterSpacing: "5px",
            margin: 0,
          }}
        >
          Nuestros profesionales
        </p>
      </div>
      <ProfessionalsContainer>
        <div>
          <span className="profession">Nutricionista</span>
          <img
            src={
              "https://sumavidapierdepeso.korpusdesign.es/assets/images/nutricionista.jpeg"
            }
          />
          <span className="professional-name">Tamara</span>
        </div>
        <div>
          <span className="profession">Nutricionista</span>
          <img
            src={
              "https://sumavidapierdepeso.korpusdesign.es/assets/images/nutricionista.jpeg"
            }
          />
          <span className="professional-name">Claudia</span>
        </div>
        <div>
          <span className="profession">Psicologa</span>
          <img
            src={
              "https://sumavidapierdepeso.korpusdesign.es/assets/images/nutricionista.jpeg"
            }
          />
          <span className="professional-name">Sandra</span>
        </div>
        <div>
          <span className="profession">Psicologo</span>
          <img
            src={
              "https://sumavidapierdepeso.korpusdesign.es/assets/images/nutricionista.jpeg"
            }
          />
          <span className="professional-name">Felipe</span>
        </div>
        <div>
          <span className="profession">Entrenador</span>
          <img
            src={
              "https://sumavidapierdepeso.korpusdesign.es/assets/images/nutricionista.jpeg"
            }
          />
          <span className="professional-name">Cuenca</span>
        </div>
      </ProfessionalsContainer>
      <h1
        style={{
          fontWeight: "normal",
          color: "#9d1519",
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        Servicios de nutricion
      </h1>
      <NutritionServices>
        <div>
          <img src={ImgNutricion} alt="imagen nutricion" />
          <h4>Menus semanales</h4>
        </div>
        <div>
          <img src={ImgNutricion} alt="imagen nutricion" />
          <h4>Control de peso cada semana</h4>
        </div>
        <div>
          <img src={ImgNutricion} alt="imagen nutricion" />
          <h4>Guia diaria</h4>
        </div>
        <div>
          <img src={ImgNutricion} alt="imagen nutricion" />
          <h4>Deporte en grupo</h4>
        </div>
        <div>
          <img src={ImgNutricion} alt="imagen nutricion" />
          <h4>Control presencial o virtual 1 vez por mes</h4>
        </div>
      </NutritionServices>
    </>
  );
}

