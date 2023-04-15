// reducer.js
const initialState = {
  medicines: ['paracétamol', 'ibuprofène', 'aspirine', 'pseudoéphédrine', 'chlorphénamine', 'loratadine'],
  selectedMedicines: JSON.parse(localStorage.getItem('selectedMedicines')) || []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_SELECTED_MEDICINE':
      const updatedSelectedMedicines = [...state.selectedMedicines, action.payload];
      localStorage.setItem('selectedMedicines', JSON.stringify(updatedSelectedMedicines));
      return {
        ...state,
        selectedMedicines: updatedSelectedMedicines
  };

    case 'REMOVE_SELECTED_MEDICINE':
      return {
        ...state,
        selectedMedicines: state.selectedMedicines.filter(medicine => medicine !== action.payload)
      };

      case 'REMOVE_ALL_SELECTED_MEDICINES':
        return {
          ...state,
          selectedMedicines: [],
        };
      default:
        return state;
    }
};

export default reducer;
