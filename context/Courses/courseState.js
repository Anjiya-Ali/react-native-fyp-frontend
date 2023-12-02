import CourseContext from "./courseContext";
import React, { useState } from "react";

const CourseState = (props) => {
  const host = "http://192.168.244.190:3000"
  const [course, setCourse] = useState(null)
  const [user, setUser] = useState(null)
  const [myCourses, setMyCourses] = useState(null);
  const [allCourses, setAllCourses] = useState(null);
  const [percentage, setPercentage] = useState(0);

  const getMyCourses = async () => {
    try {
        const response = await fetch(`${host}/api/CourseProgression/GetMyCourses`, {
        method: 'GET',
        headers: {
              'Content-Type': 'application/json',
              "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NWY0ZDc5OWI5NjU2OGI5NmVhYTdjIn0sImlhdCI6MTcwMTE4MDYzMX0.z88IOYXsPVSe--noUPvc-L3pj_u5-_6guOsSwbPhntc'
            },
        });
        const json = await response.json()
        if(json.success)
            setMyCourses(json.coursesWithLearningPosts);
    } catch (error) {
        console.error('Error during fetch:', error);
    }
  }

  const getCourses = async () => {
      try {
          const response = await fetch(`${host}/api/CourseEnrollment/GetCourses`, {
          method: 'GET',
          headers: {
                'Content-Type': 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NWY0ZDc5OWI5NjU2OGI5NmVhYTdjIn0sImlhdCI6MTcwMTE4MDYzMX0.z88IOYXsPVSe--noUPvc-L3pj_u5-_6guOsSwbPhntc'
              },
          });
          const json = await response.json()
          setAllCourses(json.coursesWithLearningPosts);
      } catch (error) {
          console.error('Error during fetch:', error);
      }
  }

  const getCourseCompletion = async (id) => {
      try {
          const response = await fetch(`${host}/api/CourseProgression/CalculateCourseCompletion/${id}`, {
          method: 'GET',
          headers: {
                'Content-Type': 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NWY0ZDc5OWI5NjU2OGI5NmVhYTdjIn0sImlhdCI6MTcwMTE4MDYzMX0.z88IOYXsPVSe--noUPvc-L3pj_u5-_6guOsSwbPhntc'
              },
          });
          const json = await response.json()
          if(json.success)
              setPercentage(json.completionPercentage);
      } catch (error) {
          console.error('Error during fetch:', error);
      }
  }

  const getSingleCourse = async (id) => {
    
    const response = await fetch(`${host}/api/CourseEnrollment/GetCourse/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NWY0ZDc5OWI5NjU2OGI5NmVhYTdjIn0sImlhdCI6MTcwMTE4MDYzMX0.z88IOYXsPVSe--noUPvc-L3pj_u5-_6guOsSwbPhntc'
      },
    });
    const json = await response.json()
    if(json.success)
        setCourse(json.courseWithLearningPost)
  }

  // will copy this in insha user

  const getUser = async (id) => {
    
    const response = await fetch(`${host}/api/User/GetUser/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NWY0ZDc5OWI5NjU2OGI5NmVhYTdjIn0sImlhdCI6MTcwMTE4MDYzMX0.z88IOYXsPVSe--noUPvc-L3pj_u5-_6guOsSwbPhntc'
      },
    });
    const json = await response.json()
    if(json.success)
      setUser(json.user_data)
  }

  return (
    <CourseContext.Provider value={{ myCourses, getMyCourses, getCourseCompletion, percentage, allCourses, getCourses, course, getSingleCourse, getUser, user }}>
      {props.children}
    </CourseContext.Provider>
  )
} 

export default CourseState;