import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Lesson(props) {
    const { name, instructor, description, time } = props.obj;
    const { user, setUser } = useContext(UserContext);

    const enrollCourse = async () => {
        try {
            const response = await fetch("https://mern-project-9m49.onrender.com/usersRoute/enroll", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: user.email, courseName: name })
            });

            const data = await response.json();

            if (data.success) {
                setUser((prevUser) => ({
                    ...prevUser,
                    courses: prevUser.courses ? [...prevUser.courses, name] : [name]
                }));
                alert("Successfully enrolled in a course");
            } else {
                alert("Already enrolled in this course");
            }
        } catch (error) {
            console.error("Error enrolling in course:", error);
            alert("An error occurred while enrolling in the course");
        }
    };

    return (
        <div className="col-md-3 mb-4">
            <div className="card course-card">
                <img src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/elementor/thumbs/woman-learning-english-online-e1625538535869-p9p4lrjtk1sd2tmdyid28uz6flhqadle7aui7qrlao.jpg" alt="Course" className="card-img-top" />
                <div className="card-body text-center">
                    <h3 className="card-title">{name}</h3>
                    <h6 className="card-text">{instructor}</h6>
                    <p className="card-text">{description}</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <i className="fas fa-play-circle"></i> {time} hrs
                        </li>
                    </ul>
                    <div className="rating mb-3">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i> 4.6
                    </div>
                        <button className="btn btn-custom btn-block bg-primary text-light" onClick={enrollCourse}>
                            Enroll Now
                        </button>

                </div>
            </div>
        </div>
    );
}
