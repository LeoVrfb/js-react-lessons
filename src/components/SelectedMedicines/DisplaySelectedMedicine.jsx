import React from 'react';


const DisplaySelectedMedicine = ({ selectedMedicines, onMedicineRemove }) => {
  return (
    <div>
      <h2>Informations sur le médicament sélectionné</h2>
      {selectedMedicines.map((medicine, index) => (
        <div key={index}>
          <p>{medicine}</p>
          <button onClick={() => onMedicineRemove(medicine)}>Supprimer</button>
        </div>
        // Ajouter d'autres informations sur le médicament ici
      ))}
    </div>
  );
};

export default DisplaySelectedMedicine;
