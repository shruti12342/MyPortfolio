import React from 'react'
import './Projects.css'
import img1 from './Assets/Simple-to-do-list.png';
import img2 from './Assets/Calculator.png'

const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='projecth1'>Projects</h1>
      <div className='allprojects'>
        <div className='uprojects'>
          <div className='p1'>
            <a href='https://simple-to-do-list-ruby.vercel.app/' target='_blank' rel="noreferrer">
              <img src={img1} alt="To-Do List App Screenshot" />
            </a>
            <h3>Simple To-Do-List App</h3>
            <p>
              A basic to-do list app using HTML, CSS, and JavaScript. 
              You can add, edit, delete, and mark tasks as done. 
              It shows how many tasks are left to do. 
              Tasks are saved and the app is fully responsive.
            </p>
          </div>
          <div className='p2'>
            <a href='https://simple-calculator-app-navy.vercel.app/' target='_blank' rel="noreferrer">
              <img src={img2} alt="Calculator App Screenshot" />
            </a>
            <h3>Simple Calculator App</h3>
            <p>
              A clean calculator app built with HTML, CSS, and JavaScript. 
              It supports basic math functions and has clear/backspace. 
              The design is simple and easy to use. 
              It's fully responsive and works on all devices.
            </p>
          </div>
        </div>
      </div>
      <button>Upcoming more</button>
    </div>
  )
}

export default Projects