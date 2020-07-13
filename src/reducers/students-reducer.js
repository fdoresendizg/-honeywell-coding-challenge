const INITIAL_STATE = Object.create({
  students: [],
  error: null,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LIST_SUCCESS':
      const students = [...action.payload];
      return Object.assign({}, state, { students });
    case 'LIST_FAILURE':
      return Object.assign({}, state, { errors: action.payload });
    case 'DELETE_STUDENT_SUCCESS':
      /*const studentId = action.payload;
      let students = [...state.students];
      const found = students.findIndex(student => student.id === studentId);
      students.splice(found, 1);
      return Object.assign({}, state, { students });*/
      return Object.assign({}, state);
    case 'ADD_STUDENT_SUCCESS':
      return Object.assign({}, state);  
    default:
      return state;
  }
}