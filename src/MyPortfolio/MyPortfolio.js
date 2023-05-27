import React from "react";
import { Link } from "react-router-dom";
import WebCard from "./WebCard";
import Skill from "./Skills";
// 
const MyPortFolio =()=>{
    return(
        <div>
           <div className="hero min-h-screen  w-[60%] ml-96" style={{ backgroundImage: `url("https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/301801075_585936859930173_8396258013080275926_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=znuogh9cf6EAX9k24Mx&_nc_oc=AQmxBAkfR2bABSukmpgSr9NOwubVb7k1D2Ct9zaF6iiV8aOKQ3gLGisKQ5WYry_ePG4&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfDJP12TGwQUfsrlpyKp0mimJByHvhuwMWDL828weRki5g&oe=647699A9` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    
      <h1 className="mb-5 text-[#0B0C10] text-5xl font-bold">Welcome To <span className="text-white">Ashiqur Rahman,s </span> Portfolio</h1>
      <p className="mb-5 text-4xl text-black">I'm a MERN Stack Developer._.</p>
     
    </div>
  </div>
</div>

<div>
<h1 className="mt-40 text-white ml-[40%] text-8xl"> My Skills</h1>
<div className="grid grid-cols-2 ml-[30%] lg:grid-cols-4  justfy-center mt-40   w-2/5" style={{ backgroundImage: `url("https://www.pixelstalk.net/wp-content/uploads/2016/05/Black-Wallpapers-Image-Free-Download.jpg")`  }}>
  <Skill name='React JS'  img='https://i.ibb.co/LCRyWnQ/download-removebg-preview-1.png'></Skill>
  <Skill name='HTML'  img='https://i.ibb.co/Nrvhs0S/download-removebg-preview-4.png'></Skill>
  <Skill name='CSS'  img='https://i.ibb.co/H72qdd2/download-removebg-preview-5.png'></Skill>
  <Skill name='Java Script'  img='https://i.ibb.co/8mmMm5G/download.png'></Skill>
  <Skill name='Node Js'  img='https://i.ibb.co/LrGs14Q/download-removebg-preview-3.png' className='w-10'></Skill>
  <Skill name='Tailwind' img='https://i.ibb.co/YfspX3r/download-removebg-preview-6.png'></Skill>
  <Skill name='Bootstrap' img='https://i.ibb.co/7XBKFB2/download-removebg-preview-7.png' className='w-10'></Skill>
  <Skill name='Netlify' img='https://i.ibb.co/r2ZGVs3/download-removebg-preview-10.png' className='w-10'></Skill>
  <Skill name='Json Web Token' img='https://jwt.io/img/pic_logo.svg' className='w-10'></Skill>
  <Skill name='GitHub' img='https://i.ibb.co/YWwx5M3/download-removebg-preview-9.png' className='w-10'></Skill>
  <Skill name='Vercel' img='https://i.ibb.co/gmCFkbZ/download-removebg-preview-11.png' className='w-10'></Skill>
  <Skill name='Express JS' img='https://i.ibb.co/hs0VQ1p/download-removebg-preview-2.png' className='w-10'></Skill>
  <Skill name='Firebase' img='https://i.ibb.co/T8pDnLf/download-removebg-preview-8.png' className='w-10'></Skill>
  <Skill name='Figma' img='https://i.ibb.co/VSPVTyk/download-removebg-preview-12.png' className='w-10'></Skill>
  <Skill name='Mongo DB' img='https://i.ibb.co/mHktBCK/erkxwhl1gd48xfhe2yld.png' className='w-10'></Skill>
 
  
</div>
</div>

<div >
  

 <div className="mt-60 text-white ml-[40%] text-8xl">
 <h1 >My Projects</h1>
 </div>


<div className="grid grid-cols-1 lg:grid-cols-3  justfy-center  ml-28 ">
      <WebCard link='https://assignment11-72007.web.app/' img="https://cdn3.vectorstock.com/i/1000x1000/39/82/3d-isometric-site-template-warehouse-vector-22653982.jpg"> </WebCard>
      <WebCard link='https://assignment8-db75a.web.app/' img="https://img.freepik.com/free-photo/white-coupe-sport-car-standing-road-front-view_114579-4005.jpg?w=900&t=st=1666548537~exp=1666549137~hmac=e65d0ea7f5d8b8224cf0aa19aba1a4abf1af630f32590640b24655f521e352ee"> </WebCard>
      <WebCard link='https://fabulous-croissant-f619b7.netlify.app/' img="https://t4.ftcdn.net/jpg/01/94/44/95/240_F_194449513_uWLw8YF931Swm2jzfPtRvWdxCRhRkNYU.jpg">  </WebCard>
</div>
</div>
<div>
  <h1 className="mt-20 ml-[40%]  text-5xl">About Me</h1>
  <h1 className="mt-20 w-[30%] justify-center ml-[35%]">
First of all, I am a passionate web developer. I love to build websites for various purposes. Websites made by me are arts of mine, I love to art. I am going to give HSC 2023 this year from govt Commerce College Chattogram. In five years, I want to start a company, It may be related to tech field, whatever it is, I would make it available online that is for sure. <span>My email address is ashiqurrahman2092003@gmail.com</span></h1>
</div>

        </div>
    )
}

export default MyPortFolio;