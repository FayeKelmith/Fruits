import "./App.css";
import { useFoxContext } from "./context/FoxContext";
function App() {
  const { url } = useFoxContext();

  console.log(url);
  return <div className="App">{<img src={url} alt="Fox" /> || <p>...</p>}</div>;
}

export default App;
