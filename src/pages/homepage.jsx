import Header from "../components/header";
import Main from "../layout/homepage-layout/main";
import Footer from "../components/footer";
import "./homepage.css";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../themeContext";

function HomePage() {
  const {darkMode}= useContext(ThemeContext);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className="content">
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
