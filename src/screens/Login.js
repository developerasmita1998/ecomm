import React from 'react'
import './../App.css';

function Login() {
  return (
    <div className="container">

      <div className='myheader'>
      <div class="left-image">
      <img
            alt='logo'
             src={'./../assets/asmita.jpeg'} />
    </div>
    <div className='right'>
      <span className='right1'>Sign Up</span>
      <span className='right2'>Lognin</span>
    
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
