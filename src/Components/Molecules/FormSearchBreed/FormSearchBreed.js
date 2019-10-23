import React from 'react';
import Label from '../../Atoms/Label/Label';
import Select from '../../Atoms/Select/Select';
import BreedSelect from '../../Molecules/BreedSelect/BreedSelect';
import ButtonSearch from '../../Atoms/ButtonSearch/ButtonSearch';

import './FormSearchBreed.css';

function FormSearchBreed() {
  return (
    <form className="form">
      <Label htmlFor="dog-selector" text="Elige la raza:" />
      <BreedSelect />
      <ButtonSearch type="submit" id="btn-submit" value="Pulsa para mostrar" />
    </form>
  );
}

export default FormSearchBreed;
