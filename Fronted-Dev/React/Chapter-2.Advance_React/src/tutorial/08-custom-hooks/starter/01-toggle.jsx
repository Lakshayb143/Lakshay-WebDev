// import { useState } from 'react';

// Instead we will use our Custom hook
import useToggle from './useToggle'

const ToggleExample = () => {
  // const [show, setShow] = useState(false);
  const { show , toggle } = useToggle(false);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
