import { useState, useEffect } from 'react'
import { ClipboardText } from 'phosphor-react'

import { SearchForm } from "./components/SearchForm";
import { Tasks } from "./components/Tasks";

import { HeaderContainer, HeaderContant, SectionEmpty } from "./styles";

import logoImg from '../../assets/logo.svg'

const LOCAL_STORAGE_KEY = 'todo:savedTasks'

export interface HomeProps {
    id: string;
    title: string;
    isCompleted: boolean;
}

export function Home () {
const [tasks, setTasks] = useState<HomeProps[]>([])

    function loadSavedTasks() {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
        if(saved) {
            setTasks(JSON.parse(saved))
        }
    }

    function setTasksAndSave(newTasks: HomeProps[]){
        setTasks(newTasks)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
    }

    function addTask(taskTitle: string) {
        setTasksAndSave([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title:taskTitle,
                isCompleted: false
            }
        ])
    }

    function deleteTaskById(taskId: string) {
        const newTasks = tasks.filter((task) => task.id != taskId)
        setTasksAndSave(newTasks)
    }

    function toggleTaskCompletedById(taskId: string){
        const newTasks = tasks.map((task) => {
            if(task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                }
            }
            return task
        })
        setTasksAndSave(newTasks)
    }

    useEffect(() => {
        loadSavedTasks()
    }, [])

    return (
        <>
        <HeaderContainer> 
            <HeaderContant>
                <img src={logoImg} alt="" />
            </HeaderContant>
        </HeaderContainer>
        <SearchForm onAddTask={addTask} />
        <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskCompletedById}/>
        {tasks.length <= 0 && (
            <SectionEmpty>
                <ClipboardText size={50}/>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize sus itens a fazer</span>
            </SectionEmpty>
        )}
        </>
    )
}