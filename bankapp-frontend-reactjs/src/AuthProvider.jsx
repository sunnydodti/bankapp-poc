const { useState, useContext } = require("react");
const { createContext } = require("react");

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const values = {
        user,
        setUser
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}