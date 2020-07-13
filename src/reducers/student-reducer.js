const INITIAL_STATE = Object.create({
  details: {},
  error: {},
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_STUDENT_SUCCESS':
      return Object.assign({}, state, { details: action.payload });
    case 'GET_STUDENT_FAILURE':
      return Object.assign({}, state, { error: action.payload });      
    case 'CLEAR_STUDENT_FAILURE':
      return Object.assign({}, state, { error: {}, details: {} });
    default:
      return state;
  }
};