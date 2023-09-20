import "./App.css";
import { useFoxContext } from "./context/FoxContext";
function App() {
  const { url, setUrl } = useFoxContext();
  return (
    <div className="App">
      <img src={{ url }} alt="Fox" />
    </div>
  );
}

export default App;
