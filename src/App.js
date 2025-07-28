import './App.css';
import Message from './components/Message';
import CommentsList from './components/CommentsList';

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
    </div>
  );
}

export default App;
