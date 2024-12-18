import { Link } from "react-router-dom";

export default function Lesson(props) {
    const { username } = props.obj;

    return (
        <h3 className="card-title">{username}</h3>
    );
}
