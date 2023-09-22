import { PlusCircle } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface SearchFormProps{
    onAddTask: (taskTitle: string) => void
}

export function SearchForm({onAddTask}: SearchFormProps) {
    const [title, setTitle] = useState('')
    const {handleSubmit} = useForm({})

    function addTask(){
        onAddTask(title)
        setTitle('')
    }

    function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
        // Use event.target.value para obter o valor atualizado do campo de entrada
        setTitle(event.target.value);
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(addTask)}>
            <input type="text" placeholder="Adicione uma nova tarefa" onChange={onChangeTitle} value={title}/>
            <button type="submit">
                Criar
                <PlusCircle size={20}/>
            </button>
        </SearchFormContainer>
    )
}