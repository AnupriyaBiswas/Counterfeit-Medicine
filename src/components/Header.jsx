import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Counterfeit Medicine Origin</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/verify">Verify</Link>
        <Link to="/manufacturer">Manufacturer</Link>
      </nav>
    </header>
  );
}
