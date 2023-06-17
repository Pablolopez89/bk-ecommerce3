import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] =useState([]);
    const [carrito, setCarrito] =useState([]);

    useEffect(() => {
        axios("data.json").then((Response)=> setData(Response.data));
    }, []);
    return <dataContext.Provider value={{data, carrito, setCarrito}}>{children}</dataContext.Provider>;
};

export default DataProvider