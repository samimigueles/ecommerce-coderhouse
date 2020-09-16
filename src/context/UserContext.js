import React, { useState, useContext } from "react";

export const UserContext = React.createContext();

export const useUserContext = useContext(UserContext);

export function UserProvider( children){

    return (
        <UserContext.Provider >
            { children}
        </UserContext.Provider>
    )
}