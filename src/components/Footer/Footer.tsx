import { FooterContent, StyledFooterContainer } from "./styles"
import PhoneIcon from '../../assets/phone-icon.png'
import EnvelopeIcon from '../../assets/envelope-icon.png'
import PinIcon from '../../assets/pin-icon.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram-icon.png'
import WhatsappIcon from '../../assets/whatsapp-icon.png'

function Footer() {
    return (
        <>
            <StyledFooterContainer>
                <hr />
                <FooterContent>
                    <div>
                        <h5>Consulta sin compromiso</h5>
                        <div className="consulta-opciones">
                            <span>
                                <img src={PhoneIcon} />
                                <a href="tel:+34678439520">+34678439520</a>
                            </span>
                            <span>
                                <img src={EnvelopeIcon} />
                                <a href="mailto:correo@gmail.com">correo@gmail.com</a>
                            </span>
                            <span>
                                <img src={PinIcon} />
                                <span>Madrid, Cuenca, Tarancon</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h5>Redes sociales</h5>
                        <div className="rrss-footer">
                            <a href="https://www.facebook.com/profile.php?id=100063635318080&locale=es_ES" title="Perfil facebook">
                                <img src={FacebookIcon} />
                            </a>
                            <a href="https://www.instagram.com/sumavidapierdepeso/" title="Perfil Instagram">
                                <img src={InstagramIcon} />
                            </a>
                            <a href="https://wa.me/+34673150114" title="Envianos un whatsapp">
                                <img src={WhatsappIcon} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5>Legales</h5>
                        <a href="*">Politica de privacidad</a>
                        <a href="*">Policita de cookies</a>
                    </div>
                </FooterContent>
            </StyledFooterContainer>
        </>
    )
}

export default Footer