import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Nav from "../components/ui/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Router />
    </BrowserRouter>
  );
}

export default App;
