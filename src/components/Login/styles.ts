import styled from 'styled-components'

export const StyledForm = styled.form`
    margin: 7rem auto;
    display: flex;
    flex-direction: column;
    width: 32rem;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    background-color: #ecf0f3;
    padding: 2rem;
    border-radius: 10px;

    input, textarea {
        width: 100%;
        border: none;
        background: #9d151933;
        resize: vertical;
        padding: .8rem;
        border-radius: 6px;
    }

    button {
        background: #9d1519b3;
        border: none;
        padding: .7rem 1.3rem;
        color: white;
        border-radius: 6px;
        cursor: pointer;
    }
`