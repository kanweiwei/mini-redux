class Store {
  constructor(reducer, middlewars = []) {
    this.reducer = reducer;
    this.combined = "@@isReducers" in reducer;
    this.state = this.combined
      ? Object.keys(reducer).reduce((rootState, key) => {
          rootState[key] = reducer[key](undefined, { type: undefined });
          return rootState;
        }, {})
      : reducer(undefined, { type: undefined });
    this.listeners = [];
    this.middlewars = [];
  }

  dispatch = (action) => {
    this.state = this.combined
      ? Object.keys(this.reducer).reduce((rootState, key) => {
          rootState[key] = this.reducer[key](rootState[key], action);
          return rootState;
        }, this.state)
      : this.reducer(this.state, action);

    this.listeners.forEach((listener) => {
      listener(this.state);
    });
  };

  subscribe(fn) {
    if (typeof fn === "function") {
      this.listeners.push(fn);
    }
  }

  getState() {
    return this.state;
  }
}

module.exports = Store;
