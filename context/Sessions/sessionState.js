import SessionContext from "./sessionContext";
import React, { useState } from "react";

const UserState = (props) => {
    const host = "http://192.168.0.147:3000"
    const [currentSession, setCurrentSession] = useState('');

    const createSession = async (formData) => {
        try {
            const response = await fetch(`${host}/api/LiveSession/CreateLiveSession`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzYjA2NWJkODEyMDAxNzI0MzAxZGE1In0sImlhdCI6MTY5ODM2NzA2N30.kQiHaasuJ4MfwJS0DgkrMIk3CzJEL78BjGV11dpFsns"
                },
                body: formData
            });
            const json = await response.json()
            return json;
        }
        catch (error) {
            console.error('Error creating Session:', error.message);
        }
    }

    const UpdateLiveSessionHls = async (id, status) => {
        const response = await fetch(`${host}/api/LiveSession/UpdateLiveSessionHls/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzYjA2NWJkODEyMDAxNzI0MzAxZGE1In0sImlhdCI6MTY5ODM2NzA2N30.kQiHaasuJ4MfwJS0DgkrMIk3CzJEL78BjGV11dpFsns"
            },
            body: JSON.stringify({
                'status': status,
            })
        });
        await response.json();
    }

    const getMySessions = async () => {
        try {
            const response = await fetch(`${host}/api/LiveSession/GetMyLiveSession`, {
                method: 'GET',
                headers: {
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzYjA2NWJkODEyMDAxNzI0MzAxZGE1In0sImlhdCI6MTY5ODM2NzA2N30.kQiHaasuJ4MfwJS0DgkrMIk3CzJEL78BjGV11dpFsns"
                },
            });
            const json = await response.json()
            return json;
        }
        catch (error) {
            console.error('Error getting teacher Sessions:', error.message);
        }
    }

    const getLiveSessions = async () => {
        try {
            const response = await fetch(`${host}/api/LiveSession/GetAllCurrentLiveSessions`, {
                method: 'GET',
                headers: {
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
                },
            });
            const json = await response.json()
            return json;
        }
        catch (error) {
            console.error('Error getting teacher live Sessions:', error.message);
        }
    }

    return (
        <SessionContext.Provider value={{ createSession, getMySessions, currentSession, getLiveSessions, UpdateLiveSessionHls, setCurrentSession }}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default UserState;