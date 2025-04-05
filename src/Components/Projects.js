import React from 'react'
import './Projects.css'
import img1 from './Assets/Simple-to-do-list.png';
import img2 from './Assets/Calculator.png'

const Projects = () => {
  return (
    <div className='projects'>
      <h1 style={{marginTop:'5%'}}>Projects</h1>
      <div className='allprojects'>
        <div className='uprojects' style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <div className='p1'>
            <a href='https://simple-to-do-list-ruby.vercel.app/' target='_blank'><img src={img1} width={300} height={200} /></a>
            <h3>Simple To-Do-List App</h3>
            <p style={{ maxWidth: '300px', fontSize: '0.95rem', lineHeight: '1.5' }}>
              A basic to-do list app using HTML, CSS, and JavaScript. <br />
              You can add, edit, delete, and mark tasks as done. <br />
              It shows how many tasks are left to do. <br />
              Tasks are saved and the app is fully responsive.
            </p>
          </div>
          <div className='p2'>
            <a href='https://simple-calculator-app-navy.vercel.app/' target='_blank'><img src={img2} width={300} height={200} /></a>
            <h3>Simple Calculator App</h3>
            <p style={{ maxWidth: '300px', fontSize: '0.95rem', lineHeight: '1.5' }}>
              A clean calculator app built with HTML, CSS, and JavaScript. <br />
              It supports basic math functions and has clear/backspace. <br />
              The design is simple and easy to use. <br />
              It's fully responsive and works on all devices.
            </p>
          </div>
        </div>
      </div>
      <button style={{width:'200px', fontSize:'large'}}>Upcomming more</button>
    </div>
  )
}

export default Projects
