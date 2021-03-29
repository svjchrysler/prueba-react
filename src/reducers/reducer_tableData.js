export default function(state = null, action) {
  if (action.type === "TABLE_DATA") {
    return action.payload;
  }

  return state;
}
