// import React, { Component } from 'react';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export function Loader({ onSpinner }) {
  const { loading } = onSpinner;

  return (
    loading && (
      <div>
        <ThreeDots
          height={80}
          width={80}
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          // wrapperStyle={{}}
          // wrapperClassName=""
          // visible={true}
        />
      </div>
    )
  );
}

// export class Loader extends Component {

//   render() {
//     const { loading } = this.props.onSpinner;
//     return (
//       loading && (
//         <div>
//           <ThreeDots
//             height="80"
//             width="80"
//             radius="9"
//             color="#4fa94d"
//             ariaLabel="three-dots-loading"
//             wrapperStyle={{}}
//             wrapperClassName=""
//             visible={true}
//           />
//         </div>
//       )
//     );
//   }
// }

// export default Loader;
