import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  state = {
    keyDown: null,
    keyUp: null,
    keyPress: null
  };
  render() {
    return (
      <div
        tabIndex="0"
        onKeyDown={event => {
          this.setState({
            keyDown: {
              key: event.key,
              keyCode: event.keyCode,
              keyChar: event.charCode
            }
          });
        }}
        onKeyUp={event => {
          this.setState({
            keyUp: {
              key: event.key,
              keyCode: event.keyCode,
              keyChar: event.charCode
            }
          });
        }}
        onKeyPress={event => {
          this.setState({
            keyPress: {
              key: event.key,
              keyCode: event.keyCode,
              keyChar: event.charCode
            }
          });
        }}
        onChange={event => {
          const input = event.target;
          if (input.value.length > 1) {
            input.value = input.value.substring(1);
          }
        }}
        style={{
          fontSize: "1em",
          // width: "1em",
          width: "96vw",
          height: "96vh",
          display: "block",
          margin: "auto"
        }}
      >
        <Fragment>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                textAlign: "center",
                borderRadius: "1em",
                background: "yellow",
                display: "inline-block",
                padding: ".3em",
                marginBottom: ".5em",
                marginLeft: "auto"
              }}
            >
              {this.state.keyDown ? this.state.keyDown.key : "Press any key"}
            </h1>
          </div>
          {Object.keys(this.state).map(keyEventName => {
            console.log(keyEventName);
            const keyEvent = this.state[keyEventName];
            console.log(keyEvent);
            return (
              <div
                style={{
                  background: "wheat",
                  margin: ".5em",
                  padding: ".2em",
                  fontFamily: "sans-serif",
                  borderRadius: ".5em"
                }}
              >
                <p
                  style={{
                    background: "white",
                    borderRadius: ".4em",
                    padding: ".2em"
                  }}
                >
                  {keyEventName}
                </p>
                {keyEvent &&
                  Object.keys(keyEvent).map(property => (
                    <p>
                      {property}: {keyEvent[property]}
                    </p>
                  ))}
              </div>
            );
          })}
        </Fragment>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
