import React from 'react';

import Logo from '../../Components/Molecules/Logo/Logo';
import FormSearchBreed from '../../Components/Molecules/FormSearchBreed/FormSearchBreed';

import '../../App/styles/app.css';
import './Home.css';

export function Home() {
  return (
    <>
      <Logo />
      <main className="main-content">
        <FormSearchBreed />
      </main>
    </>
  );
}
