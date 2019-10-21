import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../Components/Atoms/Title/Title';
import Footer from '../../Components/Molecules/Footer/Footer';

export function MyProjects() {
  return (
    <section className="list-projects">
      <Title>Página listado proyectos</Title>
      <Link to={`/`}>Volver al buscador</Link>
      <Footer />
    </section>
  );
}
