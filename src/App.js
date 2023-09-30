import ImageContainer from "./components/ImageContainer";
import { FoxProvider } from "./context/FoxContext";
function App() {
  return (
    <FoxProvider>
      <ImageContainer id={5} />
    </FoxProvider>
  );
}

export default App;
