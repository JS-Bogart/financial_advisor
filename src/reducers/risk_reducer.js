const riskReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case "SET_RISK":
      return Object.assign({}, action.risk, state);
    default:
      return state;
  }
}

export default riskReducer;