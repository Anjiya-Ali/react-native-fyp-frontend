import UserContext from "./userContext";
import React, { useState } from "react";

const UserState = (props) => {
    const host = "http://192.168.0.147:3000"

    const registerUser = async (first_name, last_name, password, email, gender, country, dob, privilege) => {
        try {
            const response = await fetch(`${host}/api/User/CreateUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ first_name, last_name, password, email, gender, country, dob, privilege })
            });
            const json = await response.json()
            return json;
        }
        catch (error) {
            console.error('Error adding user:', error.message);
        }
    }

    return (
        <UserContext.Provider value={{ registerUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;