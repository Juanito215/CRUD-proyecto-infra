import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import EstudianteCard from './EstudianteCard';
import CursoCard from './CursoCard';
import '../styles/Home.css';

const Home = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/estudiantes')
      .then(res => res.json())
      .then(data => setEstudiantes(data));

    fetch('http://localhost:5000/api/cursos')
      .then(res => res.json())
      .then(data => setCursos(data));
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="section">
        <h2>Estudiantes Registrados</h2>
        <div className="cards">
          {estudiantes.map(e => (
            <EstudianteCard key={e.id} estudiante={e} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Cursos Disponibles</h2>
        <div className="cards">
          {cursos.map(c => (
            <CursoCard key={c.id} curso={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
