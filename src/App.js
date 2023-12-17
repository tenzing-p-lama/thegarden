import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
