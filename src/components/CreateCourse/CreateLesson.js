import { useState } from "react";
import LessonForm from "./LessonForm";
import Axios from "axios";
import Nav from '../Nav';

export default function CreateLesson() {
    const [arr, setArr] = useState([]);

    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const data = {
            name: arr[0],
            instructor: arr[1],
            description: arr[2],
            time: arr[3],
            modules: arr[4],
            quizQuestions: arr[5]
        };
        Axios.post("https://mern-project-9m49.onrender.com/lessonRoute/create-lesson", data)
            .then((res) => {
                if (res.status === 200) {
                    alert("New record added");
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => {
                alert(err);
            });
        event.target.reset();
    }

    return (
        <>
            <Nav />
            <form onSubmit={handleSubmit}>
                <LessonForm getState={getState} />
                <button type="submit" className="btn btn-warning mt-3 w-auto">Submit</button>
            </form>
        </>
    )
}
