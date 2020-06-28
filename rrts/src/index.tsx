import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class APP extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }
  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App color={"red"} />
  </Provider>,
  document.getElementById("root")
);
