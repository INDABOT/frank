/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer";
import MainContent from "./Components/MainContent/MainContent";

const App = () => {
  return (
    <div className="app-container">
    <Header />
    <div className="main-content" style={{ display: "flex" }}>
      <Sidebar/>
      <MainContent />
    </div>
    <Footer />
  </div>
  )
}

export default App