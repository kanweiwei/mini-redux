function logger({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      console.log(action);
      next(action);
    };
  };
}

module.exports = logger;
