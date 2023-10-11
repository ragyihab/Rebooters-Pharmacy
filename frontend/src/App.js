import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Medicine from "./components/Medicine";
import PharmacistHome from "./pages/PharmacistHome";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pharmacist-home" element={<PharmacistHome />} />   
          <Route path="/medicine" element={<Medicine modelName="administrator"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;