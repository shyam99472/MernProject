import { useEffect, useState } from "react";
import Lesson from "./Lesson";
import Axios from "axios";
import Nav from '../Nav';

export default function LessonDisplay() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("https://mern-project-9m49.onrender.com/lessonRoute/")
            .then((res) => {
                if (res.status === 200) setArr(res.data);
                else Promise.reject();
            })
            .catch((err) => alert(err));
    }, []);

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <Lesson key={ind} obj={val} />;
        });
    };

    return (
        <>
            <Nav />
            <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f4f4ff' }}>
                <div className="container">
                    <div className="row mt-5">
                        {ListItems()}
                    </div>
                </div>
            </div>
        </>
    );
}
