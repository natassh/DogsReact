import React from 'react';
import { Link } from 'react-router-dom';

export function MyProjects() {
  return (
    <section className="list-projects">
      <h1>Página listado proyectos</h1>
      <Link to={`/`}>Volver al buscador</Link>
    </section>
  );
}
