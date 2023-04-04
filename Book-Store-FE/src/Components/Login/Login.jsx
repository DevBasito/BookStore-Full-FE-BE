import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import './Login.css';
import images from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../Redux/User";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    
    const dispatch = useDispatch();
    

    const handleSubmit = async(e) => {
        e.preventDefault()

        const user = {email, password}
        const response = await fetch ('http://localhost:5000/signin', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        if (!response.ok){
            setError(data.message)
            console.log(data.message)
            
        }
        else if (response.ok){
            setError(null);
            setEmail('');
            setPassword('');
            console.log('user signed in', data);
            dispatch(setData(data));
            navigate('/admin')
            // alert(data.message)
            


        }

    }

    return (
        <div id="Login" className="p-5">


            <div id="form" className="container  mx-auto col-lg-6 p-5 bg-white rounded-3">

                <div className="text-center">
                    <img src={images.JrLogo} alt="logo" className="img-fluid" />
                    <p className="mt-3">Welcome, Kindly Login</p>

                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={(e) =>
                            setEmail(e.target.value)} value={email}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="pswd" onChange={(e) =>
                            setPassword(e.target.value)} value={password}
                        />
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    {error && 
                            <div className="bg-danger text-white mt-3 p-3">
                                {error}
                            </div> }
                </form>
            </div>

        </div>
    )

}

export default Login;