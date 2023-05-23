import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom"


const SignupForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    /* This is a useEffect hook that runs only once when the component mounts. It checks if there is an
    item with the key 'user' in the localStorage. If there is, it navigates the user to the home page
    using the `navigate` function from the `react-router-dom` library. This is used to prevent a
    logged-in user from accessing the sign-up page again. The empty array `[]` as the second argument to
    `useEffect` ensures that the effect only runs once. */
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, [])

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))

        navigate('/')
    }

    return (
        <div className="login-body">
            {/* <h1 style={{color: '#bc2525'}}>Sign Up</h1> */}
            <div className="login-body__form">
        <div className="login-body__input mb-16">
            <input  type="text" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
            <div className="login-body__input mb-16" >
            <input type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
           </div>
           <div className="login-body__input mb-16" >
            <input type="password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
            <button onClick={collectData} className="login-body__submit-btn" type="button">Sign Up</button>
        
        </div>
        </div>
    )
}
export default SignupForm;