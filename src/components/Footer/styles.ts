import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 98%;
    hr {
        height: 3px;
        color: #9d1519;
        background: #9d1519;
        width: 90%;
    }
`

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    & > div {
        h5 {
            font-size: 20px;
            color: #9d1519;
            font-weight: normal;
            margin-bottom: 1rem;
        }
        .consulta-opciones {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            span, a {
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: .5rem;
                font-size: 12px;
                color: #9d1519;
            }
            a:hover {
                text-decoration: underline;
            }
        }
        .rrss-footer {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }
        &:nth-child(3) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            a {
                color: #9d1519;
                text-decoration: none;
                margin-top: 1rem;
                font-size: 12px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

`