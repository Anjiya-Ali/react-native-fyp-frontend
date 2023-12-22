import TeacherProfileContext from "./teacherProfileContext";
import React, { useState } from "react";

const TeacherProfileState = (props) => {
    const host = "http://192.168.0.107:3000"
    const userProfileInitial = []
    const [teacherProfile, setTeacherProfile] = useState(userProfileInitial)
    const [otherUserProfile, setOtherUserProfile] = useState(userProfileInitial)
    const [experience, setExperiences] = useState(userProfileInitial)
    const [languages, setLanguages] = useState(userProfileInitial)
    const [educations, setEducations] = useState(userProfileInitial)
    const [haw, setHaw] = useState(userProfileInitial)
    const [certifications, setCertifications] = useState(userProfileInitial)
    const [projects, setProjects] = useState(userProfileInitial)
    const [interests, setInterests] = useState(userProfileInitial)
    const [skills, setSkills] = useState(userProfileInitial)
    const [mySkills, setMySkills] = useState({})
    const [connections, setConnections] = useState(userProfileInitial)
    const [pendingConnections, setPendingConnections] = useState(userProfileInitial)
  
    const getTeacher = async () => {      
      try{
        const response = await fetch(`${host}/api/Teacher/GetProfile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNTNlZjdhOTFjZGRkMDYyNzFjZDhjIn0sImlhdCI6MTcwMDU3MzUyM30.7gJ7DSpDKXqwg9I909gV_uIgrti1cnd_9gPJwGruEYA"
          },
        });
        if (!response.ok) {
          console.error('Error fetching teacher profile:', response.status);
          return;
        }
        const json = await response.json()
        setTeacherProfile(json)
      }
      catch (error) {
        console.error('Error fetching teacher profile:', error.message);
      }
    }

    const addExperience = async (title, company, start_date, end_date, location) => {      
      try{
        const response = await fetch(`${host}/api/Teacher/AddExperience`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNTNlZjdhOTFjZGRkMDYyNzFjZDhjIn0sImlhdCI6MTcwMDU3MzUyM30.7gJ7DSpDKXqwg9I909gV_uIgrti1cnd_9gPJwGruEYA"
          },
          body: JSON.stringify({title, company, start_date, end_date, location})
        });
        if (!response.ok) {
          console.error('Error adding experience:', response.status);
          return;
        }
        const json = await response.json()
        setExperiences(json.experiences)
      }
      catch (error) {
        console.error('Error adding experience:', error.message);
      }
    }

    const addEducation = async (school, degree, start_date, end_date, grade) => {      
      try{
        const response = await fetch(`${host}/api/Teacher/AddEducation`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNTNlZjdhOTFjZGRkMDYyNzFjZDhjIn0sImlhdCI6MTcwMDU3MzUyM30.7gJ7DSpDKXqwg9I909gV_uIgrti1cnd_9gPJwGruEYA"
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

    const addCertification = async (title, issuer, link) => {      
      try{
        const response = await fetch(`${host}/api/Teacher/AddCertifications`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNTNlZjdhOTFjZGRkMDYyNzFjZDhjIn0sImlhdCI6MTcwMDU3MzUyM30.7gJ7DSpDKXqwg9I909gV_uIgrti1cnd_9gPJwGruEYA"
          },
          body: JSON.stringify({title, issuer, link})
        });
        if (!response.ok) {
          console.error('Error adding certification:', response.status);
          return;
        }
        const json = await response.json()
        setCertifications(json)
      }
      catch (error) {
        console.error('Error adding certification:', error.message);
      }
    }

    const addProject = async (title, description, start_date, end_date, link) => {      
      try{
        const response = await fetch(`${host}/api/Teacher/AddProjects`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNTNlZjdhOTFjZGRkMDYyNzFjZDhjIn0sImlhdCI6MTcwMDU3MzUyM30.7gJ7DSpDKXqwg9I909gV_uIgrti1cnd_9gPJwGruEYA"
          },
          body: JSON.stringify({title, description, start_date, end_date, link})
        });
        if (!response.ok) {
          console.error('Error adding project:', response.status);
          return;
        }
        const json = await response.json()
        setProjects(json)
      }
      catch (error) {
        console.error('Error adding project:', error.message);
      }
    }

    const addHaw = async (title, issuer, issue_date) => {      
      try{
        const response = await fetch(`${host}/api/Teacher/AddHAW`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNTNlZjdhOTFjZGRkMDYyNzFjZDhjIn0sImlhdCI6MTcwMDU3MzUyM30.7gJ7DSpDKXqwg9I909gV_uIgrti1cnd_9gPJwGruEYA"
          },
          body: JSON.stringify({title, issuer, issue_date})
        });
        if (!response.ok) {
          console.error('Error adding haw:', response.status);
          return;
        }
        const json = await response.json()
        setHaw(json)
      }
      catch (error) {
        console.error('Error adding haw:', error.message);
      }
    }

    const addLanguage = async (name, level) => {      
      try{
        const response = await fetch(`${host}/api/Teacher/AddLanguages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNTNlZjdhOTFjZGRkMDYyNzFjZDhjIn0sImlhdCI6MTcwMDU3MzUyM30.7gJ7DSpDKXqwg9I909gV_uIgrti1cnd_9gPJwGruEYA"
          },
          body: JSON.stringify({name, level})
        });
        if (!response.ok) {
          console.error('Error adding language:', response.status);
          return;
        }
        const json = await response.json()
        setLanguages(json)
      }
      catch (error) {
        console.error('Error adding language:', error.message);
      }
    }

    const addSkill = async (name) => {
      try{
        const response = await fetch(`${host}/api/Teacher/AddSkills`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNTNlZjdhOTFjZGRkMDYyNzFjZDhjIn0sImlhdCI6MTcwMDU3MzUyM30.7gJ7DSpDKXqwg9I909gV_uIgrti1cnd_9gPJwGruEYA"
          },
          body: JSON.stringify({name})
        });
        if (!response.ok) {
          console.error('Error adding skill:', response.status);
          return;
        }
        const json = await response.json()
        setMySkills(json)
      }
      catch (error) {
        console.error('Error adding skill:', error.message);
      }
    }
    
    return (
    <TeacherProfileContext.Provider value={{ teacherProfile, getTeacher, addExperience, addEducation, addCertification, addProject, addHaw, addLanguage, skills, addSkill }}>
      {props.children}
    </TeacherProfileContext.Provider>
    )
  }
  
  export default TeacherProfileState;