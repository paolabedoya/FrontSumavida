import styled from 'styled-components'

export const StyledUsPage = styled.div`
    margin: 2 auto;
    h1 {
        color: #9d1519;
        font-size: 30px;
        font-weight: normal;
        text-align: center;
    }
    .us-content {
        display: flex;
        align-items: center;
        gap: 2rem;
        width: 85%;
        margin: 0 auto;
        color: #9d1519;

        @media (max-width: 830px) {
            flex-direction: column;
        }

        p {
            font-size: 20px;
        }
        img {
            max-width: 20rem;
            // width: 95%;
        }
    }
`