import React, { useState } from "react";

const UserContext = React.createContext();

const currentUser = {
    name: "Duane",
    interests: ["Coding", "Biking", "Words ending in 'ing'"],
  };
//This is the context provider component
function UserProvider({ children }) {
    const [user,setUser] = useState(null)
    //The value of the prop will provide the context data andit will be available to the children components
  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
}
export { UserContext, UserProvider };
