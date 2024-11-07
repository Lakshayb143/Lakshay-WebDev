import { useState , createContext , useContext} from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {

    const [ name , setName ] = useState('Robert');
    // console.log(props)
    // console.log(props.children)

    return <GlobalContext.Provider value={{name, setName}}>
        
        {props.children}

    </GlobalContext.Provider>

}

export default AppContext;