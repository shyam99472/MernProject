import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Navbar from "../Navbar";
import { UserContext } from "../UserContext";

export default function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await Axios.post("https://mern-project-9m49.onrender.com/", { email, password });

            if (res.data === "exist") {
                setUser({ email });
                navigate("/home", { state: { id: email } });
            } else if (res.data === "not exist") {
                alert("Invalid credentials");
            }
        } catch (event) {
            alert("Wrong details");
            console.log(event);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="card mt-5 mx-auto" style={{ maxWidth: "425px" }}>
                    <div className="card-body">
                        <h2 className="card-title text-center">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onChange={(event) => setEmail(event.target.value)} className="form-control" placeholder="Enter Email"
                                    type="email" id="email"required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="form-control"
                                    placeholder="Enter Password"
                                    type="password"
                                    id="password"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Login
                            </button>
                            <div className="col-12 d-flex justify-content-center">
                                <label className="col-form-label me-2">Not a member?</label>
                                <Link to="/create-user" className=" mt-1">
                                    Signup Now
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
