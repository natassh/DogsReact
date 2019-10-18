import React from 'react';

import { Logo } from '../../Components/Molecules/Logo/Logo';
import { Link } from 'react-router-dom';

import '../../App/styles/app.css';

export function Home() {
  return (
    <section className="home">
      <Logo />
      <Link className="button button__fixed" to="/projects">
        Proyectos
      </Link>
    </section>
  );
}
