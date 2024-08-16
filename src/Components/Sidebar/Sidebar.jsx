import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <ul className={styles.S_ul}>
        <li>Introduction</li>
      </ul>
      <ol className={styles.S_ol}>
        <li>
          <a href="">
            Using Modular Architecture: <br />Break Down your Application into Smaller
            Modules
          </a>
        </li>
        <li><a href="">Centralize Business Logic in Services</a></li>
        <li><a href="">Dependency Injection: Separate Services(Standalone Classes) from Clients</a></li>
        <li><a href="">Use Middleware for Request Handling</a></li>
        <li><a href="">Routing should be handled by Controllers</a></li>
        <li><a href="">Make Cleaner Codes with Custom Decorators</a></li>
        <li><a href="">Ensure Data Validation with Data Transfer Objects</a></li>
        <li><a href="">Handle Exceptions Properly</a></li>
        <li><a href="">Using Interceptors for Cross-Cutting Concerns</a></li>
        <li><a href="">Ensure Security by Using Guides for Authorization</a></li>
      </ol>
    </div>
  );
};

export default Sidebar;
