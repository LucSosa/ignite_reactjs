import styled from "styled-components";

export const TaskContainer = styled.div`
    width: 100%;
    background: ${props => props.theme["gray-700"]};
    border: 1px solid ${props => props.theme["gray-600"]};
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
`
interface TaskTextProps {
    variant ?: boolean
}

export const TaskText = styled.p<TaskTextProps>`
    font-size: 0.875rem;
    line-height: 1.18rem;
    margin-right: auto;
    color: ${props => props.variant ? props.theme["gray-300"] : props.theme["gray-100"]};
    text-decoration: ${props => props.variant ? 'line-through' : 'none'};
`

export const ButtonRadio = styled.button`
    min-width: 1.125rem;
    height: 1.125rem;
    background: none;
    border: none;

    div {
        width: 100%;
        height: 100%;
        border: 2px solid ${props => props.theme["blue-300"]};
        border-radius: 50%;
    }

    svg {
        width: 100%;
        height: 100%;
        color: ${props => props.theme["purple-500"]};
    }
`

export const DeleteButton = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme["gray-300"]}
`