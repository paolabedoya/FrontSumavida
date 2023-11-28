import styled from 'styled-components'

export const ProfileContainer = styled.div`
    h2 {
        text-align: center;
        box-sizing: border-box;
        font-weight: 400;
        line-height: 32px;
        font-family: Roboto,sans-serif;
        margin: 0 0 16px;
        font-size: 30px;
        color: #9d1519;
        letter-spacing: 2.5px;
    }
`

export const ProfileInfoSection = styled.div`
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    border-top: 1px solid #9d1519;
    img {
        border-radius: 50%;
        height: 30rem;
    }

    .pi-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .p-name {
            margin: 0;
            font-weight: bold;
            font-size: 2.4rem;
        }
        .p-email {
            margin: 0;
            font-weight: normal;
            font-size: 1.7rem;
        }
        .p-phone {
            margin: 0;
        }
    }

`

export const GraphContainer = styled.div`
    .linechart {
        height: 400px;
        width: 100%;
    }
`
