import React,{useState} from "react";
import axios from 'axios'
import '../Login/Login.css'
import img from '../Feedback/logo.svg'
function Index2(){

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();
      if(username==="" || password===""){
          alert("All fields are required")
      }
      else{
          setUsername("")
          setPassword("")
          try{
              await axios.post("http://localhost:5000/signup",{
                  username,password
              })
              .then(res=>{
                  if(res.data=="exist"){
                      alert("User already exists")
                  }
                  else if(res.data=="notexist"){
                      alert("User sucessfully signed up")
                      window.location.replace("/")
                  }
              })
              .catch(e=>{
                  alert("wrong details")
                  console.log(e);
              })
          }
          catch(e){
              console.log(e);
  
          }
          
      }
  }

  return(
    <>
    <body style={{fontFamily: 'Arial, sans-serif',marginTop:'0',padding: '155px',backgroundSize:'0px',height:'800px' }}>
    <div  style={{display: 'flex', justifyContent : 'center', alignitems: 'center', height: '90vh',}}>
<div  style={{width: '500px',height:'300px',backgroundColor: '#fff',padding: '20px',borderRadius: '10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',textAlign: 'center'}}>
<h2 style={{color: '#007BFF',marginbottom: '20px'}}>Signup</h2>
<form style={{   display: 'flex',flexDirection: 'column'}} onSubmit={submit}>
  <label for="username" style={{textAlign: 'left',marginBottom: '5px'}}>Enrollment No</label>
  <input type='number' id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Enrollment No" style={{padding: '10px',marginBottom: '10px',border: '1px solid #ddd',borderRadius: '5px'}} required/>

  <label for="password" style={{'text-align': 'left','margin-bottom': '5px'}}>Create Password</label>
  <input type="password" id="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} style={{padding: '10px',marginBottom: '10px',border: '1px solid #ddd',borderRadius: '5px'}} required/>

  <button type='submit'  style={{padding: '5px',backgroundColor: '#007BFF',color: '#fff',border: 'none',borderRadius: '5px',cursor: 'pointer'}}>Sign Up</button>
  <p style={{fontSize:'15px'}}>Already have an account? <a href="/" style={{fontSize:'15px'}}>Login Here</a></p>
</form>
</div>
</div>
</body>
    </>
)
}
export default Index2