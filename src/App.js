import './App.css';
import './components/TemperatureConverter.css';
import Message from './components/Message';
import CommentsList from './components/CommentsList';
import TemperatureConverter from './components/TemperatureConverter';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Message text = "Любовь — учительница,
      но нужно уметь её приобрести, 
      ибо она трудно приобретается, 
      дорого покупается, долгою работой
       и через долгий срок, ибо не на мгновение лишь случайное надо любить, 
       а на весь срок"/>

       <CommentsList/>

       <TemperatureConverter/>

       <ToDoList />
    </div>
  );
}

export default App;
