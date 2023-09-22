import {HomeProps} from '../../../Home'
import { Task } from "../Task";
import { BodyTasks, HeaderTasks, HeaderTasksText, TasksContainer } from "./styles";

interface TasksProps{
    tasks: HomeProps[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}
export function Tasks({tasks, onDelete, onComplete}: TasksProps) {
    const taskQuantity = tasks.length
    const completedTasks = tasks.filter(task => task.isCompleted).length

    return(
        <TasksContainer>
            <HeaderTasks>
                <div>
                    <HeaderTasksText variant="created">Tarefas Criadas</HeaderTasksText>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <HeaderTasksText variant="completed">Concluídas</HeaderTasksText>
                    <span>{completedTasks} de {taskQuantity}</span>
                </div>
            </HeaderTasks>
            <BodyTasks>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
                ))}
            </BodyTasks>
        </TasksContainer>
    )
}