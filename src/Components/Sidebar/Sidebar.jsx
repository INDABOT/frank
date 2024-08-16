import { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("best-practices");

  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <aside className="sidebar">
      <ol>
        <li>
          <a
            href="#best-practices"
            className={activeItem === "best-practices" ? "active" : ""}
            onClick={() => handleClick("best-practices")}
          >
            Best Practices
          </a>
        </li>
        <li>
          <a
            href="#logging"
            className={activeItem === "logging" ? "active" : ""}
            onClick={() => handleClick("logging")}
          >
            Using Modular Architecture: Break Down your Application into Smaller
            Modules
          </a>
        </li>
        <li>
          <a
            href="#validation"
            className={activeItem === "validation" ? "active" : ""}
            onClick={() => handleClick("validation")}
          >
            Dependency Injection: Separate Services (Standalone Classes) from
            Clients
          </a>
        </li>
        <li>
          <a
            href="#exception"
            className={activeItem === "exception" ? "active" : ""}
            onClick={() => handleClick("exception")}
          >
            Use Middleware for Request Handling
          </a>
        </li>
        <li>
          <a
            href="#modules"
            className={activeItem === "modules" ? "active" : ""}
            onClick={() => handleClick("modules")}
          >
            Routing should be handled by Controllers
          </a>
        </li>
        <li>
          <a
            href="#dto"
            className={activeItem === "dto" ? "active" : ""}
            onClick={() => handleClick("dto")}
          >
            Make Cleaner Codes with Custom Decorators
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeItem === "services" ? "active" : ""}
            onClick={() => handleClick("services")}
          >
            Ensure Data Validation with Data Transfer Objects
          </a>
        </li>
        <li>
          <a
            href="#config"
            className={activeItem === "config" ? "active" : ""}
            onClick={() => handleClick("config")}
          >
            Handle Exceptions Properly
          </a>
        </li>
        <li>
          <a
            href="#security"
            className={activeItem === "security" ? "active" : ""}
            onClick={() => handleClick("security")}
          >
            Using Interceptors for Cross-Cutting Concerns
          </a>
        </li>
      </ol>
    </aside>
  );
};

export default Sidebar;
