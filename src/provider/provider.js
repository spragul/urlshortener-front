import { createContext, useContext, useEffect, useState } from "react";


const AppContext =createContext();
const AppProvider = ({children})=>{
    const [tabledata, SetTabledata] = useState([])
    useEffect(() => {
    const getDetails = async () => {
        try {
            const response = await fetch("https://urlshortener-3bwd.onrender.com/url/list", {
                method: "GET"
            });
            const data = await response.json();
            console.log(data);
            SetTabledata(data.result)
        } catch (error) {
            console.log(error);
        }
    }
    getDetails();
}, [])
return(
    <AppContext.Provider
    value={{
        tabledata,
        SetTabledata
    }}>
        {children}
    </AppContext.Provider>
)
}

export const AppState=()=>{
    return useContext(AppContext)
}
export default AppProvider