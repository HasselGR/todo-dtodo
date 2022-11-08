import React, {useState} from 'react';
import './App.css';
import { Counter } from './components/counter/counter.component';
import { Search } from './components/search/search.component';
import { TodoList } from './components/todolist/todolist.component';
import { TodoItem } from './components/todoitem/todoitem.component';
import { CreateButton } from './components/createbutton/createbutton.component';


const defaultlist  =[
  {text:'Tarea 1', completed:true},
  {text:'To do 2', completed:false},
  {text:'Frogs are Friends', completed:false},
]

function App() {
  const [todos, setTodos]= useState(defaultlist)
  const [searchField, setSearchField] = useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let filteredTodos = [];

  if (searchField.length <= 1){
    filteredTodos = todos;
  } else{
    filteredTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(searchField.toLowerCase()))
  }

  const completeTodos = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text ===  text);
    const newTodos =[...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);
  }

  const deleteTodos = (text) =>{
    const newTodos = todos.filter(todo => todo.text !== text)
    setTodos(newTodos);
  }

  return (
    <>
    <Counter
     total={totalTodos}
     completed={completedTodos}
    />
    <Search
      searchField={searchField}
      setSearchField={setSearchField}
    />
    <TodoList>
      {filteredTodos.map(element =>{
        return (
          <TodoItem 
          key={element.text}
          text={element.text}
          completed={element.completed}
          onComplete={() => completeTodos(element.text)}
          onDelete={() => deleteTodos(element.text)}
          />
        )
      })}
    </TodoList>
    <CreateButton/>
    </>
  );
}

export default App;
