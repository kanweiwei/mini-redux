const Store = require("./store.js");

function createStore(reducers) {
  let store = new Store(reducers);
  return store;
}

module.exports = createStore;
