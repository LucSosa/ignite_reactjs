import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`;

export const HeaderContant = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SectionEmpty = styled.section`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    color: ${props => props.theme["gray-300"]};
    text-align: center;

    svg {
        opacity: 0.3rem;
    }

    p {
        font-weight: bold;
    }
`