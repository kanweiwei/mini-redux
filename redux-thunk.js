function thunk({ getState }) {
  return function (dispatch) {
    return function (action) {
      if (typeof action === "function") {
        action(dispatch);
      } else {
        dispatch(action);
      }
    };
  };
}

module.exports = thunk;
