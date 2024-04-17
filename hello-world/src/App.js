//import logo from './logo.svg';
import './App.css';

const changeText=(event)=>{
  console.log(event.target)
  event.target.innerText += "🐈"
}

const styleArgument = { fontSize: '100px', color: 'red' };

function App() {
  return (
    <div className="App">
      <h1 style = {styleArgument} onClick = {changeText}> 🐈
      </h1>
    </div>
  );
}


export default App;
