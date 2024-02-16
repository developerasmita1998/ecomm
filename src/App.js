import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='myheader'>
      <div class="left-image">
        <img src={logo} width="40px" height="40px"/>
    </div>
    <div className='right'>
      <span className='right1'>sign Up</span>
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
        E-comm Dashboard
      </div>
      
    </div>
  );
}

export default App;
