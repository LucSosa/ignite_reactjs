import {HomeProps} from '../../../Home'
import {Trash} from 'phosphor-react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {ButtonRadio, DeleteButton, TaskContainer, TaskText} from './styles'

interface TaskProps {
    task: HomeProps;
    onDelete: (taskId: string) => void
    onComplete: (taskId: string) => void
}

export function Task({task, onDelete, onComplete}: TaskProps) {
    return (
        <TaskContainer>
            <ButtonRadio onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </ButtonRadio>

            <TaskText variant={task.isCompleted}>{task.title}</TaskText>

            <DeleteButton onClick={() => onDelete(task.id)}>
                <Trash size={20} />
            </DeleteButton>
        </TaskContainer>
    )
}

