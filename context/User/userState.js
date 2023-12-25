import UserContext from "./userContext";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const handleUserLogin = async (email, password) => {      
        try{
          const response = await fetch(`${host}/api/User/LoginUser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
          });
          if (!response.ok) {
            console.error('Error loging user:', response.status);
            return;
          }
          const json = await response.json()
          if(json.success){
              await AsyncStorage.setItem('tokenn', json.authtoken);
              await AsyncStorage.setItem('role', json.role);
              await AsyncStorage.setItem('id', json.id);
          }
          return json;
        }
        catch (error) {
          console.error('Error loging user:', error.message);
        }
      }
  
      const emailVerification = async (email) => {      
          try{
            const response = await fetch(`${host}/api/User/ForgotPassword`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({email})
            });
            if (!response.ok) {
              console.error('Error verifying email:', response.status);
              return;
            }
            const json = await response.json()
            return json;
          }
          catch (error) {
            console.error('Error verifying email:', error.message);
          }
        }
  
        const codeVerification = async (email, codee, code) => {      
          try{
            const response = await fetch(`${host}/api/User/ValidateCode/${codee}/${email}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({code})
            });
            if (!response.ok) {
              console.error('Error verifying code:', response.status);
              return;
            }
            const json = await response.json()
            return json;
          }
          catch (error) {
            console.error('Error verifying code:', error.message);
          }
        }
  
        const passwordVerification = async (email, password, rePassword) => {      
          try{
            const response = await fetch(`${host}/api/User/ChangePassword/${email}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({password, rePassword})
            });
            if (!response.ok) {
              console.error('Error changing password:', response.status);
              return;
            }
            const json = await response.json()
            return json;
          }
          catch (error) {
            console.error('Error changing password:', error.message);
          }
        }

    return (
        <UserContext.Provider value={{ registerUser, handleUserLogin, emailVerification, codeVerification, passwordVerification }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;