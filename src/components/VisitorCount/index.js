import React, { Component } from "react";
import "./index.css";

const getLocalCountData = () => {
  const newCountData = localStorage.getItem("count");
  if (!newCountData) {
    return 0;
  }
  return JSON.parse(newCountData);
};

class VisitorCount extends Component {
  state = {
    count: getLocalCountData(),
  };

  componentDidMount() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        const { count } = this.state;
        localStorage.setItem("count", JSON.stringify(count));
      }
    );
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 className="visitors">
          Visitors Count: <span className="count">{count}</span>
        </h1>
      </div>
    );
  }
}

export default VisitorCount;