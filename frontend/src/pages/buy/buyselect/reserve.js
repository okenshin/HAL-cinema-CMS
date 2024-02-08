// import React, { useState } from 'react';

// function ScreenComponent({ scheduleData }) {
//   const [rows, setRows] = useState(0);
//   const [cols, setCols] = useState(0);

//   // 初期化
//   if (scheduleData.length > 0) {
//     if (scheduleData[0].screenType === 'Large') {
//       setRows(10);
//       setCols(20);
//     } else if (scheduleData[0].screenType === 'Medium') {
//       setRows(10);
//       setCols(12);
//     } else if (scheduleData[0].screenType === 'Small') {
//       setRows(7);
//       setCols(8);
//     }
//   }

//   return (
//     <div>
//       <p>Rows: {rows}</p>
//       <p>Cols: {cols}</p>
//     </div>
//   );
// }

// export default ScreenComponent;
import React from "react";

export default class App extends React.Component {
  render() {
    return <h1>Hello World in React</h1>;
  }
}