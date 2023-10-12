import React from "react";
import { Slider } from "../Slider/Slider";
import ImgAlimentacion from '../../assets/alimentacion.png'
import ImgCompromiso from '../../assets/compromiso.png'
import ImgDeporte from '../../assets/deporte.png'
import styled from 'styled-components'

const ProfessionalsContainer = styled.div`
    background-color: #9D1519;
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

`

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
        gap: .6rem;
        font-size: 30px;
        color: #9D1519;
    }
`


export function Home() {
    return (
        <>
            <Slider />
            <div style={{
                backgroundColor: '#9D1519',
                color: "white",
                padding: '60px'
            }}>
                <p style={{ fontSize: '40px', textAlign: 'center', letterSpacing: '5px', lineHeight: '40px', padding: '0 60px' }}>
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
            <div style={{
                backgroundColor: '#9D1519',
                color: "white",
                padding: '1rem'
            }}>
                <p style={{ fontSize: '40px', textAlign: 'center', letterSpacing: '5px', margin: 0 }}>Nuestros profesionales</p>
            </div>
            <ProfessionalsContainer >
                <div>
                    <span className="profession">Nutricionista</span>
                    <img src={"https://sumavidapierdepeso.korpusdesign.es/assets/images/nutricionista.jpeg"} />
                    <span className="professional-name">Tamara</span>
                </div>
                <div>
                    <span className="profession">Nutricionista</span>
                    <img src={"https://sumavidapierdepeso.korpusdesign.es/assets/images/nutricionista.jpeg"} />
                    <span className="professional-name">Claudia</span>
                </div>
                <div>
                    <span className="profession">Psicologa</span>
                    <img src={"https://sumavidapierdepeso.korpusdesign.es/assets/images/nutricionista.jpeg"} />
                    <span className="professional-name">Sandra</span>
                </div>
                <div>
                    <span className="profession">Psicologo</span>
                    <img src={"https://sumavidapierdepeso.korpusdesign.es/assets/images/nutricionista.jpeg"} />
                    <span className="professional-name">Felipe</span>
                </div>
                <div>
                    <span className="profession">Entrenador</span>
                    <img src={"https://sumavidapierdepeso.korpusdesign.es/assets/images/nutricionista.jpeg"} />
                    <span className="professional-name">Cuenca</span>
                </div>
            </ProfessionalsContainer>
        </>
    )
}