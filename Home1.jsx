import React from "react";
import './Main.css'
import { useState } from "react";
import img from '../Faculty/download.png'

import './Main.css'
function Home1() {
  const [mybatch, setMybatch] = useState("Select");
  const handleChange = (event) => {
    if (event.target.value == 'Batch'){
      let  batch= document.querySelectorAll(".card");
      
      let Card = document.querySelectorAll('.card');

      Card.forEach(box => {
        box.style.display = 'none';
    });
    batch.forEach(box => {
    box.style.display = 'inline-flex';
    
  });
  
}
    if(event.target.value == "B1")
    {
      let B1 = document.querySelectorAll(".B1");
      
      let Card = document.querySelectorAll('.card');

      Card.forEach(box => {
        box.style.display = 'none';
        
      });
      B1.forEach(box => {
        box.style.display = 'inline-flex';
        
      });
      
    }
    if(event.target.value == 'B2')
    {
      let B2 = document.querySelectorAll(".B2");
      
      let Card = document.querySelectorAll('.card');

      Card.forEach(box => {
        box.style.display = 'none';
        
      });
      B2.forEach(box => {
        box.style.display = 'inline-flex';
        
      });
    }
    if(event.target.value == 'B3')
    {
      let B3 = document.querySelectorAll(".B3");
      
      let Card = document.querySelectorAll('.card');

      Card.forEach(box => {
        box.style.display = 'none';
        
      });
      B3.forEach(box => {
        box.style.display = 'inline-flex';
        
      });
    }
    
  setMybatch(event.target.value)
}
   return (
    <>
  <div id='b' action='/home'>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
      <a class="navbar-brand" href="/Home" >FeedBack</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#footer">Instruction</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Help
        </a>
        <div class="dropdown-menu" style={{'fontSize':'8px'}} aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#"  style={{'fontSize':'10px'}}>Contact Us</a>
          <a class="dropdown-item" href="#" style={{'fontSize':'10px'}}>Email Us</a>
          <a class="dropdown-item" href="/" style={{'fontSize':'10px'}}>Don't Visit Again!</a>
        </div>
      </li>
     
   
<li class="nav-item dropdown" >
<form style={{'paddingTop':'8px'}}>
<select value={mybatch} onChange={handleChange} >

<option selected>Batch</option>
<option value="B1" >B5</option>
<option value="B2">B6</option>
<option value="B3">B7</option>
</select>
</form>
</li>

    <li class="nav-item ml-auto mr-4" style={{paddingLeft:'875px'}}>
        <a class="nav-link" href="/">Logout</a>
        
      </li>
  
    </ul>

  </div>
  {/* <div class="nav-item ml-auto mr-4 " style={{width:'10px'}}>
<a clas="nav" href="#"  >
      Logout
      </a>
    </div> */}
   
</nav>

    </div>
<div>
 <center> <p><u>Computer Science & Engineering</u></p></center>
</div>
    
<div className='row' id='sample' >
     
<div class="card B1 B2 Hod">
  <img src={img} alt="HOD" ></img>
  <h1 style={{'fontSize':'13px'}}>Mitesh Thakkar (HOD)</h1>
  <p>L.J.University</p>
  <p><a class='an' href='/Feedback.Mitesh.Thakkar'>For Feedback Click Here.</a></p>
</div>
 <div class="card B2">
  <img src={img}
   alt="Tejas Sir" ></img>
  <h1 style={{'fontSize':'13px'}}>Tejas Thakkar (FCSP-2)</h1>
  <p>L.J.University</p>
  
  <p><a class='an' href="/Feedback.Tejas.Thakkar">For Feedback Click Here.</a></p>
</div>
<div class="card B3">
  <img src={img} alt="Urvish Sir" ></img>
  <h1 style={{'fontSize':'13px'}}>Urvish Maru <br></br>(COA)</h1>
  <p>L.J.University</p>
  
  <p><a class='an' href='/Feedback.Urvish.Maru'>For Feedback Click Here.</a></p>
</div> 
<div class="card B2 B1">
  <img src={img} alt="HOD" ></img>
  <h1 style={{'fontSize':'13px'}}>Zalak Prajapati (FSD-2)</h1>
  <p>L.J.University</p>
  
  
  <p><a class='an' href="/Feedback.Zalak.Prajapati">For Feedback Click Here.</a></p>
</div>
<div class="card B3">
  <img src={img} alt="HOD" ></img>
  <h1 style={{'fontSize':'13px'}}>Parth Sinroza (FCSP-2)</h1>
  <p>L.J.University</p>
  
  <p><a class='an' href="/Feedback.Parth.Sinroza">For Feedback Click Here.</a></p>
</div> 

     
<div class="card B2 B1">
  <img src={img} alt="HOD" ></img>
  <h1 style={{'fontSize':'13px'}}>Hardik Joshi (Mathematics)</h1>
  <p>L.J.University</p>
  
  <p><a class='an' href="/Feedback.Hardik.Joshi">For Feedback Click Here.</a></p>
</div>
 <div class="card B3">
  <img src={img} alt="Tejas Sir" ></img>
  <h1 style={{'fontSize':'13px'}}>Keval Patel <br></br>(FCSP-2)</h1>
  <p>L.J.University</p>
  
  <p><a class='an' href="/Feedback.Keval.Patel">For Feedback Click Here.</a></p>
</div>
<div class="card B2 B1">
  <img src={img} alt="Urvish Sir" ></img>
  <h1 style={{'fontSize':'13px'}}>Shefa Shah <br></br> (COA)</h1>
  <p>L.J.University</p>
  
  <p><a class='an' href='/Feedback.Shefa.Shah'>For Feedback Click Here.</a></p>
</div> 
<div class="card B3">
  <img src={img} alt="HOD" ></img>
  <h1 style={{'fontSize':'13px'}}>Sneha Shah <br></br>(FCSP-2)</h1>
  <p>L.J.University</p>
  <p><a class='an' href="/Feedback.Sneha.Shah">For Feedback Click Here.</a></p>
</div>
<div class="card B3">
  <img src={img} alt="HOD" ></img>
  <h1 style={{'fontSize':'13px'}}>Mosam Pandya (FCSP-2)</h1>
  <p>L.J.University</p>
  
  <p><a class='an' href="/Feedback.Mosam.Panday">For Feedback Click Here.</a></p>
</div> 
</div>


<footer id="footer">
<h2 class="h2" id="h2"><u>Feedback Form</u></h2>
    <p class="h2">We value your opinion and want to hear from you! Your feedback is essential in helping us improve our services and make your experience better. Please take a moment to provide us with your valuable insights.</p>

    <h3 class="h2" id="h3"><u>Instructions:</u></h3>
    <ol class="h2" id="ol">
      <li><strong>Rating:</strong> On a scale of 1 to 10, please rate your overall experience with our website (Rate Only in Integer value).</li>
      <li><strong>Specific Feedback:</strong> We appreciate specific feedback. If you have any positive experiences or suggestions for improvement, please let us know in the provided text box.</li>
      <li><strong>Areas of Improvement:</strong> We are committed to enhancing our services. If you encountered any challenges or areas where we can do better, please share your thoughts in the designated space.</li>
      <li><strong>Submission:</strong> Click the "Submit" button to send us your feedback. You can rest assured that your responses will be carefully reviewed by our team.</li>
    </ol>

    <h3 class="h2" id="h3"><u>Privacy Policy:</u></h3>
    <p class="h2">Your privacy matters to us. Any information you provide in this feedback form will be used solely for the purpose of improving our Educational services.</p>

    <p class="h2" >Thank you for taking the time to share your thoughts with us.</p>

    <p class="h2"><u>Your feedback matters!</u></p>
</footer>
    </>
  );
}
export default Home1;
