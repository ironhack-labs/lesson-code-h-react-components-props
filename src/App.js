import logo from "./logo.svg";
import "./App.css";
import ExampleFuncA from "./components/ExampleFuncA";
import ExampleFuncB from "./components/ExampleFuncB";
import ExampleClassA from "./components/ExampleClassA";
import ExampleClassB from "./components/ExampleClassB";

function App() {
  return (
    <div className="App">
      <ExampleFuncA />
      <ExampleFuncB />
      <ExampleClassA />
      <ExampleClassB />
    </div>
  );
}

export default App;
