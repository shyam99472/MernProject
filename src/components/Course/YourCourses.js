import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import Nav from "../Nav";

const YourCourses = () => {
    const { user } = useContext(UserContext);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            if (user) {
                try {
                    const response = await fetch(`https://mern-project-9m49.onrender.com/usersRoute/courses/${user.email}`);
                    const data = await response.json();
                    if (response.ok) {
                        setCourses(data.courses);
                    } else {
                        console.error("Failed to fetch courses:", data.message);
                    }
                } catch (error) {
                    console.error("Error fetching courses:", error);
                }
            }
        };

        fetchCourses();
    }, [user]);

    const handleUnenroll = async (courseName) => {
        if (!window.confirm(`Are you sure you want to unenroll from ${courseName}?`)) {
            return;
        }

        try {
            const response = await fetch("https://mern-project-9m49.onrender.com/usersRoute/unenroll", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: user.email, courseName: courseName })
            });

            const data = await response.json();

            if (data.success) {
                setCourses((prevCourses) => prevCourses.filter((course) => course !== courseName));
                alert(data.message);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error unenrolling from course:", error);
            alert("An error occurred while unenrolling from the course");
        }
    };

    return (
        <>
            <Nav />
            <div style={{ margin: '20px', textAlign: 'center' }}>
                <h2>Your Enrolled Courses</h2>
                <div style={{
                    width: '80%',
                    maxWidth: '500px',
                    padding: '20px',
                    textAlign: 'center',
                    margin: '0 auto'
                }}>
                    {courses.map((course, index) => (
                        <div key={index} style={{
                            borderRadius: '8px',
                            padding: '20px',
                            marginBottom: '20px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: '180px',
                            lineHeight: '2',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{ textAlign: 'left' }}>
                                <h2 style={{ marginBottom: '5px', color: '#134274' }}>{course}</h2>
                            </div>
                            <div style={{ textAlign: 'left' }}><Link to={`/course-content/${course}`}>
                                <button className="btn view" style={{
                                    padding: '12px 24px',
                                    marginTop: '8px',
                                    marginBottom: '8px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
                                    display: 'block',
                                    width: '100%',
                                    backgroundColor: '#007bff',
                                    color: '#fff'
                                }}>View Course</button></Link>
                                <button className="btn unenroll" style={{
                                    padding: '12px 24px',
                                    marginTop: '8px',
                                    marginBottom: '8px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s ease, color 0.3s ease',
                                    display: 'block',
                                    width: '100%',
                                    backgroundColor: '#dc3545',
                                    color: '#fff'
                                }} onClick={() => handleUnenroll(course)}>Unenroll</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default YourCourses;
