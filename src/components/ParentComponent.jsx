import React from 'react';
import { connect } from 'react-redux';
import { addSelectedMedicine, removeSelectedMedicine } from '../actions/actions';
import ColdMedicinesList from './ColdMedicinesList';
import DisplaySelectedMedicine from './DisplaySelectedMedicine';
import ClearSelectedMedicinesButton from './ClearSelectedMedicinesButton';
import AskQuestion from './AskQuestion';

const ParentComponent = ({ medicines, selectedMedicines, addSelectedMedicine, removeSelectedMedicine }) => {
      
  return (
    <div>
      <h1>Liste des médicaments 1</h1>
      <ColdMedicinesList
        medicines={medicines}
        onMedicineSelect={addSelectedMedicine}
      />
      <h1>Médicaments sélectionnés</h1>
      <DisplaySelectedMedicine
        selectedMedicines={selectedMedicines}
        onMedicineRemove={removeSelectedMedicine}
      />
      <ClearSelectedMedicinesButton/>
      <AskQuestion/>


    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    medicines: state.medicines,
    selectedMedicines: state.selectedMedicines
  }
}

const mapDispatchToProps = {
  addSelectedMedicine,
  removeSelectedMedicine
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent);
