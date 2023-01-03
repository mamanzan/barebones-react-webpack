import { Routes, Route, BrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";

const App = () => (
  <>
    <h1>Zano Min React App</h1>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </>
);

export default App;
