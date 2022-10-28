import { useState } from "react"
import Todo from "./Todo";
import "./todoApp.css";

 export default function TodoApp() {

  const [ title, setTitle] = useState("Holaa");
  const [ todos, setTodos] = useState([]);

  function handleChange(event){
    const value = event.target.value;
    setTitle(value);
  }
  function handleSubmit(e){
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title:title,
      completed: false
    }
    const temp = [... todos];
    temp.unshift(newTodo);

    setTodos(temp)
    setTitle("");
  }
  function handleUpdate(id, value){
    const temp =[... todos];
    const item = temp.find((item) => item.id == id);
    item.title = value;
    setTodos(temp);

  }
  function handleDelete(id){
    const temp= todos.filter(item => item.id !=id );
    setTodos(temp)
  }

  return (
  <div className="todoContainer">
    <form className="todoCreateForm" onSubmit={handleSubmit} >
      <input onChange={handleChange} className="todoInput" type="text" value={title} />
      <input 
      onClick={handleSubmit} 
      type="submit" 
      className="buttonCreate"
       value="Añadir a la lista" />
    </form>

    <div className="todosContainer">
      {
        todos.map((item) => {
          return <Todo key={item.id} 
          item={item}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          />
        })
      }
    </div>

  </div>
  )
}



