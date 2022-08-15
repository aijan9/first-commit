import "./App.css";
import Form from "./components/Form";

function App() {
  function memory(t){
    console.log(t,"APP");
    alert(t)
  }
  return (
  <div className="App">
    <Form inputType="text" x={memory} />
  </div>
  );
  
}

export default App;
