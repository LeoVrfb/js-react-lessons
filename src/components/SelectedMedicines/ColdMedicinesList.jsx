import React from 'react';
import { connect } from 'react-redux';
import { addSelectedMedicine } from '../actions/actions';

import '../ColdMedicinesList.css';

const ColdMedicinesList = ({ onMedicineSelect }) => {
  const tasks = ['paracétamol', 'ibuprofène', 'aspirine', 'pseudoéphédrine', 'chlorphénamine', 'loratadine'];

  const handleMedicineClick = (medicine) => {
    onMedicineSelect(medicine);
  };

  return (
    <div className="cold-medicines-list-container">
      <h2 className="cold-medicines-list-title">Médicaments pour soigner le rhume</h2>
      <ul className="cold-medicines-list">
        {tasks.map((medicineItem) => (
          <button onClick={() => handleMedicineClick(medicineItem)} key={medicineItem} className="cold-medicines-list-item">{medicineItem}</button>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = state => ({
  medicines: state.medicines
});
const mapDispatchToProps = dispatch => ({
  onMedicineSelect: (medicine) => dispatch(addSelectedMedicine(medicine))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColdMedicinesList);
