export default (state, action) => {
  switch (action.type) {
   
    case "addTravel":
        console.log(action.payload)
      return {

        travelList: action.payload,
      };
    default:
      return state;
  }
};
