import React from 'react';

import Logo from '../../Components/Molecules/Logo/Logo';
import Form from '../../Components/Molecules/Form/Form';
import Footer from '../../Components/Molecules/Footer/Footer';

import '../../App/styles/app.css';
import './Home.css';

export function Home() {
  return (
    <section className="home">
      <Logo />
      <main className="main-content">
        <Form />
      </main>
      <Footer />
    </section>
  );
}
