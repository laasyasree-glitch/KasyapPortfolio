// import React, { Component } from "react";
// import "./index.css";

// let count = 0;

// // const getLocalCountData = () => {
// //   const newCountData = localStorage.getItem("count");
// //   if (!newCountData) {
// //     return 0;
// //   }
// //   return JSON.parse(newCountData);
// // };

// class VisitorCount extends Component {
//   //   state = {
//   //     count: getLocalCountData(),
//   //   };

//   componentDidMount() {
//     // this.setState(
//     //   (prevState) => ({
//     //     count: prevState.count + 1,
//     //   }),
//     //   () => {
//     //     const { count } = this.state;
//     //     localStorage.setItem("count", JSON.stringify(count));
//     //   }
//     // );
//     count += 1;
//   }

//   render() {
//     //const { count } = this.state;
//     return (
//       <div>
//         <h1 className="visitors">
//           Visits: <span className="count">{count}</span>
//         </h1>
//       </div>
//     );
//   }
// }

// export default VisitorCount;

import React, { Component } from "react";
import "./index.css";

let count = 0;

class VisitorCount extends Component {
  render() {
    count += 1;
    return (
      <div>
        <h1 className="visitors">
          Visits: <span className="count">{count}</span>
        </h1>
      </div>
    );
  }
}

export default VisitorCount;
