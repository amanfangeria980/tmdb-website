import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser, email, setEmail }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useCredentials = () => {
  const userDetails = useContext(UserContext);
  return userDetails;
};
