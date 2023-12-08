import CourseContext from "./courseContext";
import React, { useState } from "react";

const CourseState = (props) => {
  const host = "http://192.168.0.147:3000"
  const [course, setCourse] = useState(null)
  const [user, setUser] = useState(null)
  const [myCourses, setMyCourses] = useState(null);
  const [allCourses, setAllCourses] = useState(null);
  const [lessonsOfCourse, setLessonsOfCourse] = useState(null);
  const [orderCourseStatus, setOrderCourseStatus] = useState(null);
  const [percentage, setPercentage] = useState(0);

  const getMyCourses = async () => {
    try {
        const response = await fetch(`${host}/api/CourseProgression/GetMyCourses`, {
        method: 'GET',
        headers: {
              'Content-Type': 'application/json',
              "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
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
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
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
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
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
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
    });
    const json = await response.json()
    if(json.success)
      setCourse(json.courseWithLearningPost)
  }

  const payCourse = async (total, courseids) => {
    const response = await fetch(`${host}/api/CourseEnrollment/PayCourse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
      body: JSON.stringify({
        'amount': total,
        'courseIds': courseids
      })
    });
    await response.json();
  }

  const updateQuizGraduation = async (quizId, courseId, graduation) => {
    const response = await fetch(`${host}/api/CourseProgression/UpdateQuizGraduation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
      body: JSON.stringify({
        'quiz_id': quizId,
        'course_id': courseId,
        'graduation': graduation
      })
    });
    await response.json();
  }

  const markTopicCompleted = async (id) => {
    const response = await fetch(`${host}/api/CourseProgression/MarkTopicCompleted/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
    });
    await response.json();
  }

  const addTopicInProgress = async (id) => {
    const response = await fetch(`${host}/api/CourseProgression/AddTopicInProgress/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
    });
    await response.json();
  }

  const addQuizInProgress = async (id) => {
    const response = await fetch(`${host}/api/CourseProgression/AddQuizInProgress/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
    });
    await response.json();
  }

  const getOrderCourseStatus = async (id) => {
    
    const response = await fetch(`${host}/api/CourseEnrollment/GetOrderCourseStatus/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
    });
    const json = await response.json()
    if(json.success)
      setOrderCourseStatus(json.payment_status)
  }

  const getLessonsOfCourse = async (id) => {
    
    const response = await fetch(`${host}/api/CourseProgression/GetLessonsOfCourse/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
    });
    const json = await response.json()
    if(json.success)
      setLessonsOfCourse(json.lessons)
  }

  const getCerificateDetails = async (id) => {
    
    const response = await fetch(`${host}/api/CourseProgression/GetCerificateDetails/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
    });
    return await response.json();
  }

  const getLessonItems = async (id) => {
    
    const response = await fetch(`${host}/api/CourseProgression/GetLessonItems/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
    });
    return await response.json();
  }

  const getQuizQuestions = async (id) => {
    
    const response = await fetch(`${host}/api/CourseProgression/GetQuestions/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
    });
    return await response.json();
  }

  // will copy this in insha user

  const getUser = async (id) => {
    
    const response = await fetch(`${host}/api/User/GetUser/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzZjM3MzQ2OGQyYmRkMDc2NmNhNzZmIn0sImlhdCI6MTY5ODY0MTcxNn0.5b2g9o9TcDLFXU-0aTgJ5O3gL6xXQOPrUzIVwVibzQ8'
      },
    });
    const json = await response.json()
    if(json.success)
      setUser(json.user_data)
  }

  return (
    <CourseContext.Provider value={{ myCourses, payCourse, getMyCourses, getCourseCompletion, percentage, allCourses, getCourses, course, getSingleCourse, getUser, user, addTopicInProgress, updateQuizGraduation, addQuizInProgress, getOrderCourseStatus, orderCourseStatus, setCourse, getLessonsOfCourse, lessonsOfCourse, getLessonItems, markTopicCompleted, getQuizQuestions, getCerificateDetails }}>
      {props.children}
    </CourseContext.Provider>
  )
} 

export default CourseState;