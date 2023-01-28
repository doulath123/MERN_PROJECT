import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const [formData, updateFormData]=useState({
        email:'',
        password:''
    });
    const {email, password}=formData;
    const onChange=e=>updateFormData({...formData,[e.target.name]:e.target.value});
    const onSubmit=e=>{
        e.preventDefault();
        console.log('awesome!');
    }
  return (
    <div>
        <h1 className='large text-primary'>Log in</h1>
        <p className='cta'><i className='fas fa-sign-in-alt'></i>Log in to your account</p>
        <form className='form' onSubmit={e=>onSubmit(e)}>
        <div className='form-group'>
          <input type='email' placeholder="Email Address" name="email" value={email} onChange={e=>onChange(e)} required />
        </div>
        <div className='form-group'>
          <input type='password' placeholder="Password" name="password" value={password} onChange={e=>onChange(e)} minLength="4" />
        </div>
        <input type="submit" className='btn btn-primary' value="Login"/>
        </form>
        <p className='m'>
            Not registered yet? <Link to="/register">Register now</Link>
        </p>
    </div>
  )
}

export default Login
