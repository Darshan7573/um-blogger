import { createContext } from "react";

export const AppContext = createContext()

const AppConextProvider = (props) => {

    const value = {

    }

    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )

}

export default AppConextProvider