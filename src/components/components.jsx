import React from "react"
import '../App.css'
export function Intro(){
  return(
    <>
    <h1>ASINGURA K PHILIP</h1>
      <p>
        Hello there <br /> My name is Asingura K Philip, a student at Uganda Christian University
        pursuing a bachelors degree in Computer Science. <br />
        This is my portfolio website
      </p>
    </>
  )
}

export function Content(){
  
  return(<>
  
  <hr />
      <h2>Profile photo</h2>
      <img
        src="/react-profile/profile.png"
        alt="profile"
        style={{ width: '300px' }}
      />
      <hr />
      <h2>Hobbies video</h2>
      <video width="600" height="340" controls>
        <source
          src="/react-profile/Bumblebee.mp4"
          type="video/mp4"
        />
      </video>
      <hr />
      
  </>)
}

export function PersonalDetails(){
  return(
    <>
    <hr />
      <h1>Personal details section</h1>
      <ul>
        <li>Name: ASINGURA K PHILIP</li>
        <li>ID: B20231</li>
        <li>Course and Year: BSCS 2:2</li>
        <li>Hobbies and Interests: Movies, gaming</li>
      </ul>
    </>
  )
}
export function ContactSection(){
  return(
    <>
    <h2>Contact section</h2>
      <p>Email: nguraphill@gmail.com</p>
      <p>GitHub: Asingura-Philip</p>
    </>
  )
}
export function Links(){
  return(
    <>
    <h2>Links</h2>
      <a href="https://github.com/Asingura-Philip">Check out my GitHub</a>
      <br />
      <a href="https://cse-ucu.com/robotics-ai-club/">Check out interesting robotics projects</a>
      <hr />
    </>
  )
}

export function Table(){
  const courses = [
    { coursename: "Understanding Old Testament",marks:88 ,grade: 5.0 },
    { coursename: "Writing and study skills",marks:73 , grade: 4.0 },
    { coursename: "Fundamentals in computing", marks:73 ,grade: 4.0 },
    { coursename: "Essentials in hardware",marks:88 , grade: 5.0 },
    { coursename: "Structured programming", marks:81 ,grade: 5.0 },
    { coursename: "Discrete Math",marks:66 ,grade: 3.5 },
  ];
  return (
    <>
      <h2>Results table</h2>
      <table style={{ border: '2px solid black' }}>
        <thead>
          <tr>
            <th>Courseunit</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the array of courses to create rows dynamically */}
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.coursename}</td>
              <td>{course.marks}</td>
              <td>{course.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </>
  );
}

