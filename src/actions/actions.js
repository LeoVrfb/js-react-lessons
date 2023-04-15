// actions.js
export const addSelectedMedicine = (medicine) => {
    return {
      type: 'ADD_SELECTED_MEDICINE',
      payload: medicine
    }
  }
  
  export const removeSelectedMedicine = (medicine) => {
    return {
      type: 'REMOVE_SELECTED_MEDICINE',
      payload: medicine
    }
  }

  export const removeAllSelectedMedicines = () => {
    return {
      type: 'REMOVE_ALL_SELECTED_MEDICINES',
    };
  };
  