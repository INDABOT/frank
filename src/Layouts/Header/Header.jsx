const Header = () => {
  return (
    <header
    className="header"
    style={{
      backgroundColor: "white",
      padding: "10px 20px",
      borderBottom: "1px solid #ccc",
    }}
  >
    <h1>HNG Boilerplate</h1>
    <nav>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header



