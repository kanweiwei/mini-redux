function combineReducers(reducers) {
  Object.defineProperty(reducers, "@@isReducers", {
    configutable: true,
    enumerable: false,
    value: true,
  });
  return reducers;
}

module.exports = combineReducers;
