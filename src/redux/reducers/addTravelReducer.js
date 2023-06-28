export default (state, action) => {
  switch (action.type) {
    case "addTravel":
      return {
        travelList: action.payload,
      };
    default:
      return state;
  }
};
