import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #F8F9FA;
    padding: 5px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderLeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    img {
        height: 60px;
        width: 60px;
    }
    nav {
        display: flex;
        gap: 16px;
        a {
            text-decoration: none;
            color: #575757;
            transition: color .2s ease-in-out;
            &:hover {
                color: #9d1519;
            }
        }
    }
`

export const HeaderRightSide = styled.div`
    button {
        background-color: transparent;
        border: 1px solid #9d1519;
        border-radius: 7px;
        font-size: 20px;
        padding: 6px 12px;
        color: #9d1519;
        cursor: pointer;
        transition: background-color .2s ease-in;

        &:hover {
            background-color: #9d1519;
            color: #F8F9FA;
        }
    }
`