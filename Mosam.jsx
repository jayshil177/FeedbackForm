import React ,{useState} from 'react'
import './Home.css';
import axios from 'axios'
import img from '../Faculty/download.png'
function Home8(){
  const [status, setStatus] = useState(null)
  const [form_data, setFormData] = useState(null)

  function form_shallow(event) {
    setFormData(e => ({
      ...form_data,
      ...{ [event.target.name]: event.target.value },
      "email": "jay726275@gmail.com"
    }))
  }


  function http_mail(e) {
    e.preventDefault()
    setFormData(e => ({
      ...form_data
    }))

    axios.get(`http://localhost:8001/send-mail`, {
      params: {
        data: form_data
      }
    })
      .then(response => setStatus(response.data))
      .catch(err => console.log(err))
  }
    return(
        <>
         
        <div id='b'>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
      <a class="navbar-brand" href="/Home">FeedBack</a>
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

      
    
     
    </ul> 

  </div>
</nav>
    </div>
    {
        status && alert('Mail Sent')
      }
        <div class="container" >
  <div class="left-side" >
    <div className='row' id='sample'>
    <div class="fcard" >
  <img src={img} alt="HOD" ></img>
</div>
</div>
<br></br>
<p id='mit'><u> <b>Mosam Panday</b></u></p>
<p><u>Teaching Subject:FCSP-2</u></p>
<p><u>Experince Of 4 Years in LJU.Overall 4 Years.</u></p>
</div>

    
<div class="right-side">
      <div class="center">
      
      <form onSubmit={(e) => http_mail(e)}>
        <label for="roll-number" >Roll Number:</label>
        <input type="number" id="roll-number" name="roll-number" min="1" max="400" required onChange={(e) => form_shallow(e)}></input>
        <br></br>
        <label for="rating">Rating:</label>
        <br></br>
        <div class="rating">
                <input type="radio" id="star10" name="rating" value="10" onChange={(e) => form_shallow(e)} required></input>
                <label for="star10"></label>
                <input type="radio" id="star9" name="rating" value="9" onChange={(e) => form_shallow(e)} required></input>
                <label for="star9"></label>
                <input type="radio" id="star8" name="rating" value="8" onChange={(e) => form_shallow(e)} required></input>
                <label for="star8"></label>
                <input type="radio" id="star7" name="rating" value="7" onChange={(e) => form_shallow(e)} required></input>
                <label for="star7"></label>
                <input type="radio" id="star6" name="rating" value="6" onChange={(e) => form_shallow(e)} required></input>
                <label for="star6"></label>
                <input type="radio" id="star5" name="rating" value="5" onChange={(e) => form_shallow(e)} required></input>
                <label for="star5"></label>
                <input type="radio" id="star4" name="rating" value="4" onChange={(e) => form_shallow(e)} required></input>
                <label for="star4"></label>
                <input type="radio" id="star3" name="rating" value="3" onChange={(e) => form_shallow(e)} required></input>
                <label for="star3"></label>
                <input type="radio" id="star2" name="rating" value="2" onChange={(e) => form_shallow(e)} required></input>
                <label for="star2"></label>
                <input type="radio" id="star1" name="rating" value="1" onChange={(e) => form_shallow(e)} required></input>
                <label for="star1"></label>
              </div>
        <br></br>
        <label for="comments">Comments:</label>
        <textarea id="comments" name="comments"  rows="4" required onChange={(e) => form_shallow(e)}></textarea>
        <br></br>
        {/* <a href="C:\Users\Lenovo\Desktop\Portfolio\feedback\src\Feedback\Home1.jsx">S</a> */}
        <input type="submit" value="Submit Feedback" ></input>
      </form>
    </div>
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
    )
}
export default Home8