import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrintPage from "./components/PrintPage";

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/print" element={<PrintPage />} />
      </Routes>      
</Router>
      
  );
}

export default App;
