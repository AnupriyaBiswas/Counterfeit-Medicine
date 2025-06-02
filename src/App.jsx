import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'flex-wrap',
      alignItems: 'space-between',
      padding: '1rem',
      backgroundColor: '#f8f8f8',
      borderBottom: '1px solid #ddd',
    }}>
      <h2>Counterfeit Medicine Origin</h2>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/verify" style={linkStyle}>Verify</Link>
        <Link to="/manufacturer" style={linkStyle}>Manufacturer</Link>
      </nav>
    </header>
  )
}

const linkStyle = {
  marginRight: '1rem',
  textDecoration: 'none',
  color: '#333',
};

function Home() {
  return <h3>Welcome to Home Page</h3>;
}

function Verify() {
  return <h3>Verify Medicine Page</h3>
}

function Manufacturer() {
  return <h3>Manufacturer Dashboard</h3>
}

function App() {
  return (
      <Router>
        <Header>
          <main style={{ padding: '2rem' }}>
            <Routes>
              <Route path="/" element={<Home />}> </Route>
              <Route path="/verify" element={<Verify />}></Route>
              <Route path="/manufacturer" element={<Manufacturer />}></Route>
            </Routes>
          </main>   
        </Header>
      </Router>
  )
}

export default App
