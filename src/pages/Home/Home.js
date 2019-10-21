import React from 'react';

import Logo from '../../Components/Molecules/Logo/Logo';
import Footer from '../../Components/Molecules/Footer/Footer';

import '../../App/styles/app.css';

export function Home() {
  return (
    <section className="home">
      <Logo />
      <Footer />
    </section>
  );
}
