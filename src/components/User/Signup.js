import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';

export default function Signup() {
    const navigate = useNavigate();
    const[username, setUserName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function submit(e) {
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match. Please try again.");
            setPassword("");
            setConfirmPassword("");
        }
        else {
            try {
                const res = await axios.post("https://mern-project-9m49.onrender.com/signup", {
                    username,email, password
                    
                });alert("Signup Sucessful. Login to continue");
    
                if (res.data === "exist") {
                    alert("User already exists");
                } else if (res.data === "not exist") {
                    navigate("/login-user", { state: { id: email } });
                }
            } catch (e) {
                alert("Wrong details");
                console.log(e);
            }

        }

        
    }

    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="card mt-5 mx-auto" style={{ maxWidth: '425px' }}>
                <div className="card-body">
                <h2 className="card-title text-center">Sign In</h2>
        <h6 className="card-subtitle mb-2 text-muted text-center">Create your account</h6>
        <form onSubmit={submit}>
        <div>
            <div className="form-group">
                <label htmlFor="userName">UserName</label>
                <input onChange={(event)=>setUserName(event.target.value)} className="form-control" placeholder="Enter User Name" type="text" id="userName" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={(event)=>setEmail(event.target.value)} className="form-control" placeholder="Enter Email" type="email" id="langName" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={(event)=>setPassword(event.target.value)} className="form-control" placeholder="Enter Password" type="password"  id="password" required />
            </div>
            <div className="form-group">
                <label htmlFor="re-password">Confirm Password</label>
                <input onChange={(event)=>setConfirmPassword(event.target.value)} className="form-control" placeholder="Re-Enter Password" type="password"  id="re-password" required />
            </div>
            {errorMessage && <div className="text-danger">{errorMessage}</div>} 
            <button type="submit" className="btn btn-primary btn-block">Get started</button>
        </div>
        </form>
                </div>
            </div>
        </div>

        <div className="col-12 d-flex justify-content-center">
                    <label className="col-form-label me-2">Not a member?</label>
                    <Link to="/login-user" className=" mt-1">login Now</Link>
                </div>
        </>
    );
}