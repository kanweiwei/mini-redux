const createStore = require("../createStore.js");
const combineReducers = require("../combineReducers.js");
const applyMiddleware = require("../applyMiddleware.js");
const thunk = require("../redux-thunk.js");
const logger = require("../redux-logger.js");

function reducer(
  state = {
    msg: "hello",
  },
  action
) {
  switch (action.type) {
    case "update_msg":
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

applyMiddleware(thunk, logger)(store);

let date = +new Date();

store.subscribe((data) => {
  console.log("触发了", +new Date() - date);
  console.log(data);
  console.log(store.getState());
});

store.dispatch((dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "update_msg",
      payload: "hello xxx",
    });
  }, 1000);
});

store.dispatch({
  type: "update_msg",
  payload: "hello world",
});
