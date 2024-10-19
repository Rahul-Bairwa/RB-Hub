import React from "react";
import phoneImg from '../assets/signup.png'
import google from '../assets/google.png'
import { Link } from "react-router-dom";
const SignUp = () => {
    const handleSubmit=()=>{
    }
    return (
        <div className="signup-container">
            <div className="container">
                <div className="signup-image">
                    <img src={phoneImg} alt="Phone with shopping cart"/>
                </div>
                <div className="signup-form-container">
                    <h2>Create account</h2>
                    <p>Enter your details below</p>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />

                        <input className="create-account-btn" type="submit" value="Create Account" />
                        <button className="google-signup-btn" type="button">
                            <img
                                src={google}
                                alt="Google"
                                className="google-logo"
                            />
                            Sign up with Google
                        </button>
                    </form>

                    <p className="login-text">
                        Already have an account? <Link to={'/login'} >Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
