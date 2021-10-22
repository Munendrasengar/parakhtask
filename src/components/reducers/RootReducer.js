const initialState = {
  item: {},
};

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case "Add_Item":
      state.item[action.payload[0]] = action.payload[1];
      console.log("state.item========>>", state.item);
      return { item: state.item };

    case "Remove_item":
      delete state.item[action.payload[0]];
      console.log("Remove state.item========>>", state.item);
      return { item: state.item };

    default:
      return state;
  }
}
