import styled from "styled-components";

export const SearchFormContainer = styled.form`
    width: 100%;
    max-width: 920px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    gap: 2rem;

    margin-top: -2rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background-color: ${props => props.theme["gray-600"]};
        color: ${props => props.theme["gray-100"]};
        padding: 1rem;

        &::placeholder{
            color: ${props => props.theme["gray-500"]};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border: 0;
        padding: 1rem;
        background: ${props => props.theme["blue-300"]};
        border: 1px solid transparent;
        color: ${props => props.theme.white};
        font-weight: bold;
        border-radius: 6px;

        &:hover {
            background: transparent;
            border:1px solid ${props => props.theme["blue-300"]};
            color: ${props => props.theme["blue-300"]};
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }
    }
`