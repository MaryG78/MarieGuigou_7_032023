import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
