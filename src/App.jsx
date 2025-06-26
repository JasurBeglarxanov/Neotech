import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/aboutpage";
import HomePage from "./pages/homepage";
import AboutPage2 from "./pages/aboutpage2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about2" element={<AboutPage2/>} />
      </Routes>
    </>
  );
}

export default App;
