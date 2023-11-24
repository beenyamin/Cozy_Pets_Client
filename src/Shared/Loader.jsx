/* eslint-disable react/prop-types */
// import { ScaleLoader } from "react-spinners";

import { SyncLoader } from "react-spinners";


const Loader = ({smallHeight}) => {
    return (
        <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <SyncLoader size={100} color='red' />
    </div>
    );
};

export default Loader;