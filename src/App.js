import './App.css';
import { Counter } from './components/counter/counter.component';
import { Search } from './components/search/search.component';
import { TodoList } from './components/todolist/todolist.component';
import { TodoItem } from './components/todoitem/todoitem.component';
import { CreateButton } from './components/createbutton/createbutton.component';


const list  =[
  {text:'asdas'},
  {text:'asdaas'},
  {text:'asdasaaa'},
]

function App() {
  return (
    <>
    <Counter/>
    <Search/>
    <TodoList>
      {list.map(element =>{
        return (
          <TodoItem key={element.text} text={element.text}/>
        )
      })}
    </TodoList>
    <CreateButton/>
    </>
  );
}

export default App;
