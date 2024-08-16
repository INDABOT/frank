const Sidebar = () => {
  
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="#best-practices" className="active">
            Best Practices
          </a>
        </li>
        <li>
          <a href="#logging">
            Using Modular Architecture: Break Down your Application into Smaller
            Modules
          </a>
        </li>
        <li>
          <a href="#validation">
            Dependency Injection: Separate Services(Standalone Classes) from
            Clients
          </a>
        </li>
        <li>
          <a href="#exception">Use Middleware for Request Handling</a>
        </li>
        <li>
          <a href="#modules">Routing should be handled by Controllers</a>
        </li>
        <li>
          <a href="#dto">Make Cleaner Codes with Custom Decorators</a>
        </li>
        <li>
          <a href="#services">
            Ensure Data Validation with Data Transfer Objects
          </a>
        </li>
        <li>
          <a href="#config">Handle Exceptions Properly</a>
        </li>
        <li>
          <a href="#security">Using Interceptors for Cross-Cutting Concerns</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
