import { useState } from 'react';


const useToggle = (defaultVal) => {
    const [ show , setShow ] = useState(defaultVal);

    const toggle = () => {
        setShow(!show);
    }

    return { show , toggle };

}


 export default useToggle;
