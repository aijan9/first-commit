import "./App.css";
import Animal from "./components/Animals";

function App() {
  return <div className="App">
    
    <Animal animal="Cat" age={4} color="red" isHas/>
    <Animal animal="Dog" age={3} color="orange"/>
    <Animal animal="Monkey" age={2} color="blue" isHas/>
  </div>;
}

export default App;
