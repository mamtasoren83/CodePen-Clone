import {createContext,useState} from "react";

export const DataContext = createContext(null);


const DataProvider = ({children}) => {

    const[css,setCss] = useState('');
    const[html,setHtml] = useState('');
    const[js,setJs] = useState('');

    return (
        <DataContext.Provider value={{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs

            }}
        >
                {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
