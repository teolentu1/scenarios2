import './App.css';
import shieldLogo from './Cybersecurity_Hero.svg'; 

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#modules">Modules</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <header className="App-header">
        <div className="title-container">
          <img src={shieldLogo} alt="Cybersecurity Shield" className="logo" />
          <h1>CyberShield</h1>
        </div>
        <p>Your gateway to cybersecurity knowledge and protection.</p>
        <button className="cta-button">Learn More</button>
      </header>
    </div>
  );
}

export default App;
