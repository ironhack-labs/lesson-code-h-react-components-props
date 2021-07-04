import "./App.css";
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';

import Badge from './components/Badge';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Greeting firstName="Harper" />
      <Greeting firstName="Michelle" />
      <Greeting firstName="Andrea" />
      
      <StudentCard name="Eva" week={7} info={{ city: 'BCN', course: "WEB" }} />
      <StudentCard name="Mat" week={8} info={{ city: 'MIA', course: "DATA" }} />
      
      <Badge badgeText="important" />
    </div>
  );
}

export default App;
