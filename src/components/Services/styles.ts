import styled from "styled-components";

export const StyledServices = styled.div`
    margin: 2 auto;
    h1 {
        color: #9d1519;
        font-size: 30px;
        font-weight: normal;
        text-align: center;
    }

`

export const StyledServiceList = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 2rem auto;
    background-color: white;
    color: #9d1519;

    h1 {
        color: inherit;
    }

    & > div:nth-child(odd) {
        background-color: #9d1519;
        color: white;
        h1 {
            color: inherit;
        }
    }

`
