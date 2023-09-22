import styled from "styled-components";

export const TasksContainer = styled.section`
    width: 100%;
    max-width: 920px;
    margin: 3rem auto;
    padding: 0 1.5rem;
`

export const HeaderTasks = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }

    span {
        background: ${props => props.theme["gray-500"]};
        color: ${props => props.theme["gray-100"]};
        border-radius: 8px;
        font-size: 0.75rem;
        padding: 3px 9px;
    }
`

interface HeaderTasksTextProps{
    variant: 'created' | 'completed'
}

export const HeaderTasksText = styled.p<HeaderTasksTextProps>`
        color: ${props => props.variant === 'created' ? props.theme["blue-300"] : props.theme["purple-500"]};
        font-size: 0.875rem;
        font-weight: bold;
`

export const BodyTasks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    margin-top: 1rem;
`