import "./App.css";
import Navbar from './src/components/Navbar';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <hr />
      <Greeting />
      <hr />
      <Greeting />
      <hr />
    </div>
  );
}

export default App;
