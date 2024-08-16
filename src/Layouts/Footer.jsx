const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#f8f8f8",
        padding: "20px",
        borderTop: "1px solid #ccc",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img src="logo.png" alt="HNG Boilerplate" />
        </div>
        <div>
          <p>&copy; 2024 HNG Boilerplate</p>
        </div>
        <div>
          <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
            <li>
              <a href="#github">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
