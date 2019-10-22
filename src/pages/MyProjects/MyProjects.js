import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../Components/Atoms/Title/Title';

export function MyProjects() {
  return (
    <>
      <Title>Página listado proyectos</Title>
      <Link to={`/`}>Volver al buscador</Link>
    </>
  );
}
