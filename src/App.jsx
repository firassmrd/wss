import React from "react";
import Counter from "./components/ahla";

class App extends React.Component {
  state = {
    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleShowPerson}
          style={{
            width: "20%",
            height: "20px",
            marginTop: "10%",
            backgroundColor: "grey",
            border: "none",
            
          }}
        >
          click
        </button>

        {this.state.show ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
