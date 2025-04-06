import React from 'react'
import './Home.css'
import img1 from './Assets/profile.jpg'
import propilePic from './Assets/Myprofile.jpg'
import html from './Assets/html.png'
import css from './Assets/css.png'
import bootstrap from './Assets/bootstrap.jpg'
import js from './Assets/js.png'
import java from './Assets/java.png'
import nodejs from './Assets/nodejs.svg'
import expressjs from './Assets/expressjs.png'
import mongodb from './Assets/mongodb.jpg'
import vercel from './Assets/vercel.png'
import vscode from './Assets/vscode.png'
import reactjs from './Assets/reactjs.png'
import github from './Assets/github.png'
import firebase from './Assets/firebase.png'
import cloudinary from './Assets/cloudinary.png'
import frontenddevelopment from './Assets/frontenddevlopment.jpg'
import backenddevelopment from './Assets/backenddevelopment.jpg'
import webdevelopment from './Assets/webdevelopment.jpg'
import {Link} from 'react-router-dom'
import resume from './Assets/ShrutiKamble.pdf';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'ShrutiKamble.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='homesection'>
      <div className='details'>
        <div className='leftdetails'>
        <div className='myimg'>
                <img src={propilePic} alt='mtimage' width={50} height={50}/>
            </div>
        </div>
        <div className='rightdetails'>
        <p>Hi, my name is</p>
            <h1 style={{fontSize:'55px'}}>Shruti Kamble</h1>
            <p>I am a <span style={{color:'#FF4081', fontWeight:'bold'}}>Full Stack Developer.</span></p>
            <p>I am curious and hardworking, always eager to learn and take on new challenges. I strive to deliver my best work and achieve meaningful results. With a positive attitude, I look forward to growing and making valuable contributions.</p>
            <div className='smicons' id='hsemiicons'>
              <a href="https://www.facebook.com/profile.php?id=100044642193621" target='_blank' class="fa">&#xf09a;</a>
              <a href="https://www.linkedin.com/in/shruti-kamble-5b9733225/" target='_blank' class="fa fa-linkedin"></a>
              <a href="https://www.instagram.com/shruti.kamble_sk/" target='_blank' class="fa">&#xf16d;</a>
            </div>
            <button onClick={handleDownload} id='hdbtn'>Download CV</button>

        </div>
      </div>
      <div className='technicalSkills'>
          <h1>Technical Skills</h1>
          <div className='techskill'>
            <div className='top-skills'>
              <div className='frontenddiv'>
                <h1>Frontend</h1>
                <div className='frontenddiv-content'>
                  <div><img src={html} alt='HTML' />HTML</div>
                  <div><img src={css} alt='CSS' />CSS</div>
                  <div><img src={bootstrap} alt='Bootstrap' />Bootstrap</div>
                  <div><img src={reactjs} alt='React.js' />React.js</div>
                  <div><img src={js} alt='JavaScript' />JavaScript</div>
                </div>
              </div>

              <div className='backenddiv'>
                <h1>Backend</h1>
                <div className='backenddiv-content'>
                  <div><img src={java} alt='Java'/>Java </div>
                  <div><img src={nodejs} alt='Nodejs'/>Node.js</div>
                  <div><img src={expressjs} alt='Express.js'/>Express.js</div>
                  <div><img src={mongodb} alt='Mongodb'/>MongoDB</div>
                </div>
              </div>
            </div>

            <div className='bottom-skills'>
              <div className='otherdiv'>
                <h1>Other</h1>
                <div className='other-content'>
                  <div><img src={github} alt='github'/>GitHub</div>
                  <div><img src={vscode} alt='vscode'/>VS Code</div>
                  <div><img src={vercel} alt='vercel'/>Vercel </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className='techeducation'>
      <h1>Technical Educations</h1>
        <div className='maineducation'>
        <div className='education'>
            <h3>Bachelor of Engineering</h3>
            <p>Tulsiramji Gaikwad Patil College of Engineering and Technology Mohgaon, Nagpur</p>
            <h6>Academic Year : 2019 - 2023</h6>
        </div>
        <div className='education'>
            <h3>Higher Secondary Certificate</h3>
            <p>Shrimati Saraswati Bai Nistane Vidyalay Takalghat, Nagpur</p>
            <h6>Academic Year : 2018 - 2019</h6>
        </div>
        <div className='education'>
            <h3>Secondary School Certificate</h3>
            <p>Shrimati Saraswati Bai Nistane Vidyalay Takalghat, Nagpur</p>
            <h6>Academic Year : 2016 - 2017</h6>
        </div>
        </div>
      </div>
      <div className='expertise'>
        <h1>Expertise</h1>
        <div className='mainexpertiseee'>
            <div className='sexpertise'>
                <img src={frontenddevelopment} alt='frontendDev' width={300} height={180}/>
                <h3>Frontend Development</h3>
            </div>
            <div className='sexpertise'>
                <img src={backenddevelopment} alt='frontendDev'  width={300} height={180}/>
                <h3>Backend Development</h3>
            </div>
            <div className='sexpertise'>
                <img src={webdevelopment} alt='frontendDev' width={300} height={180}/>
                <h3>Responsive Web Design</h3>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
