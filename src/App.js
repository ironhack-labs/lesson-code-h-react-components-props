import "./App.css";
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting firstName="Harper" />
      <hr />
      <Greeting firstName="Michelle" />
      <hr />
      <Greeting firstName="Andrea" />
      <hr />
    </div>
  );
}

export default App;
