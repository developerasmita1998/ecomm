import React from 'react'
import './../App.css';
import myImg from './../assets/asmita.jpeg'

function Login() {
  return (
    <div className="container">

      <div className='myheader'>
      <div class="left-image">
      <img
      className='logo'
            alt='logo'
            //src={require('./../assets/asmita.jpeg')}
            src={myImg}
              />
    </div>
    <div className='right'>
      <span className='right1'>Sign Up</span>
      <span className='right2'>Login</span>
    
    </div>

      </div>

      <div className='mybody'>
        <div className='mybody1'>Login</div>
       <div className='myemail'> <input type='email' 
       id='email' placeholder='Enter Email' className='myemail1'/></div>

       <div className='mypassword'> <input type='password' 
       id='password' placeholder='Enter Password'className='mypassword1'/></div>

      <div className='mybutton'> 
       <button type='submit' id='button' className='mybutton1'>Login</button></div>
       </div>

      <div className='myfooter'>
        <h5>E-comm Dashboard</h5>
      </div>
      
    </div>
  );
}

export default Login;
