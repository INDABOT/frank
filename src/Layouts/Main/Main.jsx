import MainContent from "../../Components/MainContent/MainContent";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main_Content}>
        <MainContent />
      </div>
    </div>
  );
};

export default Main;
