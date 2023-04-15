import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAllSelectedMedicines } from '../actions/actions';

const ClearSelectedMedicinesButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeAllSelectedMedicines());
  };

  return (
    <button onClick={handleClick}>Effacer tous les médicaments sélectionnés</button>
  );
};

export default ClearSelectedMedicinesButton;
