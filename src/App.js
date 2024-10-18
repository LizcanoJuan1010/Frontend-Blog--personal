import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import EntriesPage from './components/EntriesPage';
import CreatePage from './components/CreatePage';
import DraftsPage from './components/DraftsPage'; // Importa DraftsPage

function App() {
  const [user, setUser] = useState(null); // Estado global para el usuario

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage setUser={setUser} />} />


        <Route path="/entries" element={<EntriesPage user={user} />} />
        <Route path="/create" element={<CreatePage user={user} />} />
        <Route path="/drafts" element={<DraftsPage user={user} />} /> 

      </Routes>
    </Router>
  );
}

export default App;
