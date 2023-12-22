import StudentProfileContext from "./studentProfileContext";
import React, { useState } from "react";

const studentProfileState = (props) => {
    const host = "http://192.168.0.147:3000"
    const userProfileInitial = []
    const [userProfile, setUserProfile] = useState(userProfileInitial)
    const [languages, setLanguages] = useState(userProfileInitial)
    const [educations, setEducations] = useState(userProfileInitial)
    const [interests, setInterests] = useState(userProfileInitial)
  
    const getStudent = async () => {      
      try{
        const response = await fetch(`${host}/api/Student/GetProfile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
          },
        });
        if (!response.ok) {
          console.error('Error fetching student profile:', response.status);
          return;
        }
        const json = await response.json()
        setUserProfile(json)
      }
      catch (error) {
        console.error('Error fetching student profile:', error.message);
      }
    }

    const addProfilePic = async (formData) => {      
        try{
          const response = await fetch(`${host}/api/Student/UploadProfilePicture`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
            },
            body:formData
          });
          if (!response.ok) {
            console.error('Error adding profile pic:', response.status);
            return;
          }
          await response.json()
        }
        catch (error) {
          console.error('Error adding profile pic:', error.message);
        }
    }
  
    const addBio = async (bio) => {      
        try{
          const response = await fetch(`${host}/api/Student/AddBio`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
            },
            body: JSON.stringify({bio})
          });
          if (!response.ok) {
            console.error('Error adding bio:', response.status);
            return;
          }
          await response.json()
        }
        catch (error) {
          console.error('Error adding bio:', error.message);
        }
    }

    const addLanguage = async (name, level) => {      
      try{
        const response = await fetch(`${host}/api/Student/AddLanguages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
          },
          body: JSON.stringify({name, level})
        });
        if (!response.ok) {
          console.error('Error adding language:', response.status);
          return;
        }
        const json = await response.json()
        setLanguages(json.languages)
      }
      catch (error) {
        console.error('Error adding language:', error.message);
      }
    }

    const editLanguage = async (name, level, id) => {      
      try{
        const response = await fetch(`${host}/api/Student/EditLanguage/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
          },
          body: JSON.stringify({name, level})
        });
        if (!response.ok) {
          console.error('Error updating language:', response.status);
          return;
        }
        await response.json()
      }
      catch (error) {
        console.error('Error updating language:', error.message);
      }
    }

    const deleteLanguage = async (languageId) => {
      try {
        const response = await fetch(`${host}/api/Student/DeleteLanguage/${languageId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
          },
        });

        if (!response.ok) {
          console.error('Error deleting language:', response.status);
          return;
        }
        const json = await response.json()
        setLanguages(json.languages);
      } catch (error) {
        console.error('Error deleting language:', error);
      }
    };

    const addInterest = async (title, description) => {      
      try{
        const response = await fetch(`${host}/api/Student/AddInterests`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
          },
          body: JSON.stringify({title, description})
        });
        if (!response.ok) {
          console.error('Error adding interest:', response.status);
          return;
        }
        const json = await response.json()
        setInterests(json.interests)
      }
      catch (error) {
        console.error('Error adding interest:', error.message);
      }
    }

    const editInterest = async (title, description, id) => {      
      try{
        const response = await fetch(`${host}/api/Student/EditInterest/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
          },
          body: JSON.stringify({title, description})
        });
        if (!response.ok) {
          console.error('Error updating interest:', response.status);
          return;
        }
        await response.json()
      }
      catch (error) {
        console.error('Error updating interest:', error.message);
      }
    }

    const deleteInterest = async (interestId) => {
      try {
        const response = await fetch(`${host}/api/Student/DeleteInterest/${interestId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
          },
        });

        if (!response.ok) {
          console.error('Error deleting interest:', response.status);
          return;
        }
        const json = await response.json()
        setInterests(json.interests);
      } catch (error) {
        console.error('Error deleting interest:', error);
      }
    };

    const addEducation = async (school, degree, start_date, end_date, grade) => {      
      try{
        const response = await fetch(`${host}/api/Student/AddEducation`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
          },
          body: JSON.stringify({school, degree, start_date, end_date, grade})
        });
        if (!response.ok) {
          console.error('Error adding education:', response.status);
          return;
        }
        const json = await response.json()
        setEducations(json)
      }
      catch (error) {
        console.error('Error adding education:', error.message);
      }
    }

    const editEducation = async (school, degree, start_date, end_date, grade, id) => {      
      try{
        const response = await fetch(`${host}/api/Student/EditEducation/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
          },
          body: JSON.stringify({school, degree, start_date, end_date, grade})
        });
        if (!response.ok) {
          console.error('Error updating education:', response.status);
          return;
        }
        await response.json()
      }
      catch (error) {
        console.error('Error updating education:', error.message);
      }
    }

    const deleteEducation = async (educationId) => {
      try {
        const response = await fetch(`${host}/api/Student/DeleteEducation/${educationId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8"
          },
        });

        if (!response.ok) {
          console.error('Error deleting education:', response.status);
          return;
        }
        const json = await response.json()
        setEducations(json.education);
      } catch (error) {
        console.error('Error deleting education:', error);
      }
    };
  
    return (
    <StudentProfileContext.Provider value={{ getStudent, userProfile, addLanguage, addProfilePic, addBio, languages, addEducation, educations, addInterest, deleteInterest, deleteEducation, deleteLanguage, editInterest, editLanguage, editEducation }}>
      {props.children}
    </StudentProfileContext.Provider>
    )
  }
  
  export default studentProfileState;