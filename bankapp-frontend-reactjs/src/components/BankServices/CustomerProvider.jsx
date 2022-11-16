const { useState, useContext } = require("react");
const { createContext } = require("react");

const customerContext = createContext();

export const useCustomerData = () => {
    return useContext(customerContext)
}

export const CustomerProvider = ({ children }) => {
    const [customer, setCustomer] = useState(null);

    const values = {
        customer,
        setCustomer
    };

    return <customerContext.Provider value={values}>{children}</customerContext.Provider>
}