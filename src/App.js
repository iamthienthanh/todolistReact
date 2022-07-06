import { useState } from 'react';
import './App.css';
import AddToDo from './Todoinput';
import TodoList from './Todolist';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState([])

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayweek = date.getDay();
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const montharray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  return (
    <div className="App">
      <h1 className="AppTitle">TO DO LIST</h1>
      <div className='date'>
        <span className="dayweek">{`${weekday[dayweek]} `}</span>
        <span className="month">{`${montharray[month-1]}, `}</span>
        <span className="day">{`${day}, `}</span>
        <span className="year">{year}</span>
      </div>
      <AddToDo inputValue={inputValue} setInputValue={setInputValue} list={list} setList={setList}/>
      <TodoList list={list} setList={setList} />
    </div>
  );
}

export default App;
