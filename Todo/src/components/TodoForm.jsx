import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    };

  return (
    <div className='todo-form'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='digite o titulo' value={value} onChange={(e) => setValue(e.target.value)}></input>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value=''>Selecione uma categoria</option>
                <option value='trabalho'>Trabalho</option>
                <option value='pessoa'>Pessoal</option>
                <option value='estudos'>Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm;