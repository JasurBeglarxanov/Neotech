import Header from "../components/header";
import Main from "../layout/homepage-layout/main";
import Footer from "../components/footer";
import './homepage.css'
import { useState, useEffect } from "react";

function HomePage() {
  
  const [darkMode, setDarkMode] = useState(false);  
  
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className="content">
      <div className="container">
        <Header toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <Main darkMode={darkMode} />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
