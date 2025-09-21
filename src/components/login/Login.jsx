import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebase.init';
import { Link } from 'react-router';

const Login = () => {
    const [error, setError]= useState('')
    const [success, setSuccess] = useState(false);
    const emailRef = useRef();


// form function
    const handleForm =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        // reset 
        setSuccess(false)
        setError('');
        // login with firebase
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result.user)
            setSuccess(true)
        })
        .catch(error=>{
            // console.log(error.message)
            setError(error.message)
        })
    }
// for forget password 
const forgetPassword =()=>{
    console.log(emailRef.current.value)
   const email = emailRef.current.value;

    setError('');
    // send otp for change password
    sendPasswordResetEmail(auth, email)
    .then(() =>{
        alert("send an OTP for for change password please check your email ")
    })
    .catch(error =>{
        setError(error.message);
    })
}



    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleForm} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div><a onClick={forgetPassword} className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>New to this website? Please <Link to="/register" className='text-green-700 underline'>Register</Link></p>
                {
                    error && <p className='text-red-600'>{error}</p>
                }
                {
                    success && <p className='text-green-500'>User logged in successfully</p>
                }
            </div>
            </div>
        </div>
        </div>    
    );
};

export default Login;