import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home1 from '../Feedback/Home1'
import Home from '../Faculty/HOD';
import Home10 from '../Faculty/PKV';
import Home2 from '../Faculty/UMM';
import Home3 from '../Faculty/ZMP';
import Home4 from '../Faculty/TAT';
import Home5 from '../Faculty/PS';
import Home6 from '../Faculty/Sneha';
import Home7 from '../Faculty/SDD';
import Home8 from '../Faculty/Mosam';
import Home9 from '../Faculty/HRJ';
import Login from '../Login/Login'
import Signup from '../Login/Signup'

// import Login from '../src/Login/Login'
function Main() {
  return (

    <>
    {/* <Home1 /> */} 
   <Router>
    
   <Routes>

    <Route index element={<Login />}></Route>
    {/* <Route path='/' element={<Home1 />}></Route> */}
    <Route path='/Feedback.Mitesh.Thakkar' element={<Home/>}></Route>
    <Route path='/Feedback.Urvish.Maru' element={<Home2/>}></Route>
    <Route path='/Feedback.Zalak.Prajapati' element={<Home3/>}></Route>
    <Route path='/Feedback.Tejas.Thakkar' element={<Home4/>}></Route>
    <Route path='/Feedback.Parth.Sinroza' element={<Home5/>}></Route>
    <Route path='/Feedback.Sneha.Shah' element={<Home6/>}></Route>
    <Route path='/Feedback.Shefa.Shah' element={<Home7/>}></Route>
    <Route path='/Feedback.Mosam.Panday' element={<Home8/>}></Route>
    <Route path='/Feedback.Hardik.Joshi' element={<Home9/>}></Route>
    <Route path='/Feedback.Keval.Patel' element={<Home10/>}></Route>
    <Route path='/Home' element={<Home1 />}></Route>
    <Route path='/Signup' element={<Signup />}></Route>
   </Routes>
   </Router>
    </>
    );
}
export default Main;
