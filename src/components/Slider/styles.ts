import styled from "styled-components";

export const StyledSlider = styled.div`
    position: relative;
    z-index: -1;

    .image-container {
        display: flex;
        transition: transform .6s ease-in-out;
        img {
            min-width: 100%;
        }
    }

    .slider-button-container {
        top: 0;
        width: 100%;
        position: absolute;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .slider-information {
            display: flex;
            flex-direction: column;
            align-items: center;
            * {
                margin-bottom: 12px;
            }

            .slider-information__selectors {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .4rem;

                button {
                    cursor: pointer;
                    height: 3px;
                    width: 2.3rem;
                    background-color: rgba(0,0,0,.5);
                    transition: background-color .2s ease-in-out;
                    &:hover {
                        background-color: rgba(0,0,0,1);
                    }
                }
            }
        }

        button {
            height: 100%;
            width: 170px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 4rem;
            &:hover {
                background-color: rgba(255,255,255,0.3);
            }
        }
    }
`