import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToDo = ({inputValue, setInputValue, list, setList}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            setList([...list,{
            'id': list.length+1,
            'task': inputValue,
            'complete': false
        }]);
        setInputValue('')
        toast.success("Try your best!!!")
        }
        else {
            toast.error("empty input!!")
        }
        
        
        
    };
    return (
    <form onSubmit={handleSubmit} className='todo-input'>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="  Add todo" />
        <button type="submit">+</button>
        <ToastContainer />
    </form>
  )
}

export default AddToDo