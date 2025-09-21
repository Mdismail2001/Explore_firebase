import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import React, {  useState } from 'react';
import { auth } from '../../firebase.init';
import { Link } from 'react-router';

const Register = () => {
    const [error, setError]=useState('')
    const [success, setSuccess]= useState(false)

    const handleBtn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // show error and success message
        setError('')
        setSuccess(false)

        // console.log(email, password);
        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (passwordRegExp.test(password) === false) {
        setError("Password must have at least 1 uppercase, 1 lowercase and be 6+ characters long.");
        return;
        }


        // create user using firebase
        createUserWithEmailAndPassword(auth,email, password)
        .then(result =>{
            // console.log(result)
            // setSuccess(true);
            // email verify check
            sendEmailVerification(auth, currentUser)
            .then(()=>{
            setSuccess(true);
            })
        })
        .catch(error =>{
            setError(error.message)
        })
    }


    return (
        <form onSubmit={handleBtn}>   {/* ✅ attach here */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email'  className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <button type="submit" className="btn btn-neutral mt-4">Register</button>
                                {
                                     error && <p  className='text-red-700'>{error}</p>
                                }
                                {
                                    success && <p className='text-green-600'>User created successfully</p>
                                }
                            </fieldset>
                            <p>Already have an account ? Please <Link to = "/login" className='text-green-500 underline'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;
