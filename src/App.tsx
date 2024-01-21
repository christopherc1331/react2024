import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState(['fooBar', 'anotherOne']);
  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    const value = e.target.value;
    setTodo(value);
  }

  const handleTodo = (e) => {
    e.preventDefault();
    setItems((prev) => {
      return [...prev, todo];
    });
    setTodo('');
  }

  return (
    <>
      <form onSubmit={handleTodo}>
        <label htmlFor="todo">Enter a new ToDo item</label>
        <input onChange={handleChange} value={todo} id="todo" />
      </form>
      {items.map((item) => (
       <Item item={item} />
      ))}
    </>
  )
}

const Item = ({item}) => {
  return (
    <div key={item}>
      <p>{item}</p> 
    </div>
  );
}

export default App
