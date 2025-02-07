import { createContext, useContext } from "react";        // 1st- Create a Context(like store)

const AppContext = createContext();           // Took createContext into a variable    


// 2nd- Created a Provider to access all app component or child component. 
// here children is AppComponent which is Wraaped by Provider in index.js file.
const AppProvider = ({children}) => {  
    return (
       <AppContext.Provider value={{ myName: "Deepak Prasad" }}>     
        {children}
       </AppContext.Provider>
    );
};

// custom hook 
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };

