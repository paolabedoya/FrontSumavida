import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #F8F9FA;
    padding: 5px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
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
        @media (max-width: 730px) {
            display: none;
        }
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
        @media (max-width: 730px) {
            display: none;
        }
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
    position: relative;

`

export const BurgerMenu = styled.div<{ isOpen: boolean }>`
    height: 2rem;
    width: 2rem;
    @media (min-width: 730px) {
        display: none;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    right: .4rem;
    bottom: -1rem;
    z-index: 1000;

    & > div {
        height: .3rem;
        width: 100%;
        background-color: black;
        border-radius: .4rem;
        transition: transform .3s ease-in-out;
    }

    & > div:nth-child(1) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translateY(12px) translateX(7px)' : 'translate(0)'};
    }
    & > div:nth-child(2) {
        transform: ${({ isOpen }) => isOpen ? 'translateX(40px)' : 'translate(0)'};
    }
    & > div:nth-child(3) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translateY(-8px) translateX(3px)' : 'translate(0)'};
    }

`

export const BurgerMenuContent = styled.div<{ isOpen: boolean }>`
    position: absolute;
    height: 100%;
    width: 85%;
    background-color: #f8f9fa;
    right: 0;
    top: 0;
    transition: right .3s ease-out;
    z-index: 0;
    right: ${({isOpen}) => isOpen ? '0' : '-40rem'};
`