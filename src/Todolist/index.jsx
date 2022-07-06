import React from 'react'

const TodoList = ({list, setList}) => {
    const completeTodo = (id) => {
       setList(list.map(todo => todo.id===id ? {...todo, complete: !todo.complete} : {...todo}))
    };
    return (
    <div className='todo-list'>
        {list.map((todo, index) => {
            return (
                <div key={index} className={`todo ${todo.complete ? 'finish' : ''}`}>
                    <div className="todo-left">
                        <i onClick={() => completeTodo(todo.id)} className={`fa-regular ${todo.complete ? 'fa-circle-check' : 'fa-circle'  }`}></i>
                        <span className={`${todo.complete ? 'done' : ''}`}>{todo.task}</span>
                    </div>
                    <i class="fa-solid fa-trash"></i>
                </div>
            )
        })}
    </div>
  )
}

export default TodoList