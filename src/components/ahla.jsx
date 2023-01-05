import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    Person: {
      fullName: "si firas",
      bio: "the only one",
          imgSrc: '' ,
      profession: "dont talk im too lazy RN",
    },
    show: true,
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
  render() {
    return (
      <div>
        {this.state.show && (
          <>
            <h1 style={{ color: "Blue" }}>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.bio}</h2>
            <img
              src={this.state.Person.imgSrc}
              alt="ahla bik sidi khouya"
              style={{ width: "30%", borderRadius: "100%" }}
            ></img>
            <h2>{this.state.Person.profession}</h2>

            <h2> {this.state.timer}</h2>
            <br></br>
          </>
        )}
      </div>
    );
  }
}
