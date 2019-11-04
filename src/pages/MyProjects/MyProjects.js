import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../Components/Atoms/Title/Title';
import Project from '../../Components/Atoms/Project/Project';

import './MyProjects.css';

export function MyProjects() {
  return (
    <>
      <Title>Mis proyectos</Title>
      <div className="listProjects">
        <Project
          title="Buscador de películas en React"
          content="Jugando con componentes con estado, ciclo de vida, componentes controlados, react-router... "
          link="https://search-movies-natassh.netlify.com/"
          linkText="Ver el proyecto"
        />
        <Project
          title="Fotos de perritos"
          content="Aprendiendo JavaScript: ES6+, PostCSS, webpack, Netlify "
          link="https://dogs-sample-es6-webpack-project.netlify.com/"
          linkText="Ver el proyecto"
        />
        <Project
          title="Aprendiendo React."
          content="Mis primeros avances con React. Cambiando mi web estática de HTML/CSS a componentes funcionales. "
          link="https://vigilant-brattain-549909.netlify.com/"
          linkText="Ver el proyecto"
        />
        <Project
          title="Suminis"
          content="Desarrollador de WordPress creando tema desde cero. Login personalizado a la zona privada para gestionar productos, proveedores y clientes."
          link="https://suminis.com"
          linkText="Ver el proyecto"
        />
        <Project
          title="Solarpack"
          content="Desarrollador de WordPress creando tema desde cero. Login personalizado con zona privada."
          link="https://www.solarpack.es"
          linkText="Ver el proyecto"
        />
        <Project
          title="Fundación Eki"
          content="Desarrollador de WordPress creando tema desde cero con pasarela de donaciones."
          link="https://fundacioneki.org/"
          linkText="Ver el proyecto"
        />
        <Project
          title="Enlace a Linkedin donde puedes ver mis otros desarrollos"
          content=""
          link="https://www.linkedin.com/in/natacha-ivannikova-261478113/"
          linkText="Conóceme"
        />
      </div>
      <Link to={`/`} className="return">
        Volver al buscador
      </Link>
    </>
  );
}
