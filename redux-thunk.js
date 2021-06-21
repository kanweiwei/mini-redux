function thunk({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      if (typeof action === "function") {
        action(dispatch, getState);
      } else {
        next(action);
      }
    };
  };
}

module.exports = thunk;
