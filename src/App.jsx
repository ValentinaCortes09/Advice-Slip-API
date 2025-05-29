// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './supabase';

import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Surprise from './pages/Surprise';
import Profile from './pages/Profile';
import About from './pages/About';
import Login from './components/login';
import Registro from './components/registro';
import BottomNav from './components/BottomNav';
import Usuario from './pages/usuario';
import './index.css';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }

    verificarSesion();

    // Escuchar cambios en la sesión
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });

    // Limpieza
    return () => {
      listener?.subscription?.unsubscribe?.();
    };
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <Router>
      <div style={{ paddingBottom: usuario ? '60px' : '0' }}>
        <Routes>
          <Route path="/" element={usuario ? <Home /> : <Navigate to="/login" />} />
          <Route path="/search" element={usuario ? <Search /> : <Navigate to="/login" />} />
          <Route path="/favorites" element={usuario ? <Favorites /> : <Navigate to="/login" />} />
          <Route path="/surprise" element={usuario ? <Surprise /> : <Navigate to="/login" />} />
          <Route path="/profile" element={usuario ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/usuario" element={usuario ? <Usuario /> : <Navigate to="/login" />} />
          <Route path="/about" element={usuario ? <About /> : <Navigate to="/login" />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {usuario && <BottomNav />}
      </div>
    </Router>
  );
}

export default App;
