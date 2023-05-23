import React, { useEffect } from 'react'
import {Link,  useNavigate } from 'react-router-dom'
const LoginForm = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    }, [])

    const handleLogin = async () => {
/* This line of code is sending a POST request to the server at the URL "http://localhost:5000/login"
with the email and password entered by the user in the body of the request. The `await` keyword is
used to wait for the server to respond before continuing with the execution of the code. The
response from the server is stored in the `result` variable. */
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
/* This code block is handling the login functionality. It sends a POST request to the server with the
email and password entered by the user. If the server returns an authentication token (result.auth),
it stores the user object and the token in the local storage and navigates the user to the home
page. If the server does not return an authentication token, it displays an alert message asking the
user to enter the correct details. */
        if (result.email) {
           /* `localStorage.setItem('user', JSON.stringify(result.user));` is storing the user object
           returned by the server in the browser's local storage. The `JSON.stringify()` method is
           used to convert the user object to a string before storing it in the local storage. This
           allows the user object to be accessed and used throughout the application, even if the
           user refreshes the page or closes the browser. */
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate("/")
        } else {
            alert("Please enter correct details")
        }
    }

    return (
        // <div className='login'>
        //     <h1>Login</h1>
        //     <input type="text" className="inputBox" placeholder='Enter Email'
        //         onChange={(e) => setEmail(e.target.value)} value={email} />
            // <input type="password" className="inputBox" placeholder='Enter Password'
            //     onChange={(e) => setPassword(e.target.value)} value={password} />
        //     <button onClick={handleLogin} className="appButton" type="button">Login</button>
        // </div>


       <div className="login-body">
       <div className="login-body__form">
         <h1>Sign In</h1>
         <div className="login-body__input mb-16">
           <input
             type="text"
             placeholder="Email or phone number"
             onChange={(e) => setEmail(e.target.value)} value={email} />
           
         </div>
         <div className="login-body__input">
           <input
             type="password"
             placeholder="Enter Password"
             onChange={(e) => setPassword(e.target.value)} value={password} />
         </div>
         <button className="login-body__submit-btn" onClick={handleLogin}>
           Sign In
         </button>
         <div className="login-body__options">
           <span>Remember me</span>
           <span className="login-body__need-help"><Link to="/forgotPassword">Forget Password</Link></span>
         </div>
         <div className="login-body__footer">
           <div className="login-body__fb">
             <img
               src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
               alt="fb"
             />
             <span>Login with Facebook</span>
           </div>
           <div className="login-body__new-to-nl">
             <span>New to Netflix ?</span>
             <span className='login-body__sign-up'><Link to="/signup">Sign up now</Link></span>
             {/* <span className="login-body__sign-up" >Sign up now.</span> */}
           </div>
           <div className="login-body__google_captcha">
             This page is protected by Google reCAPTCHA to ensure you're not a
             bot.
             <span className="login-body__learn-more">Learn more.</span>
           </div>
         </div>
       </div>
     </div>
   );
    }



export default LoginForm;