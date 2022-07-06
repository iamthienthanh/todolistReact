import React from 'react'

const AddToDo = ({inputValue, setInputValue, list, setList}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list,{
            'id': list.length+1,
            'task': inputValue,
            'complete': false
        }]);
        setInputValue('')
        console.log(list);
    };
    return (
    <form onSubmit={handleSubmit} className='todo-input'>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="  Add todo" />
        <button type="submit">+</button>
    </form>
  )
}

export default AddToDo