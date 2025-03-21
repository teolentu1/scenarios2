import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#modules">Modules</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>

      {/* Content */}
      <header className="main-content">
        <h1>Welcome to CyberShield</h1>
        <p>Explore cybersecurity modules, track progress, and secure your knowledge.</p>
        <button className="cta-button">Explore Modules</button>
      </header>
    </div>
  );
}

export default Main;
