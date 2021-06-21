const compose = require("lodash/fp/compose");

function applyMiddleware(...middlewares) {
  return (store) => {
    const chain = middlewares.map((m) =>
      m({
        dispatch: (action) => store.dispatch(action),
        getState: store.getState,
      })
    );
    const dispatch = compose(chain)(store.dispatch);
    store.dispatch = dispatch;
    return store;
  };
}

module.exports = applyMiddleware;
