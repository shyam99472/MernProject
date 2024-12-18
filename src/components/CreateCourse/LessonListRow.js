import Axios from "axios";
import {Link} from "react-router-dom"
export default function LessonListRow(props){
    const {_id,name,instructor} =props.obj;


    const handleClick =()=>{
        Axios.delete("https://mern-project-9m49.onrender.com/lessonRoute/delete-lesson/" +_id)
        .then((res)=>{
            if(res.status === 200){
                alert("Record is deleted");
            }  
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
    }


    return(
        <tr>
            <td>{name}</td>
            <td>{instructor}</td>
            <td class="d-flex justify-content-center">
                <button onClick={handleClick} class="btn btn-danger">
                    Delete Language
                </button>
            </td>
        </tr>
    )
}
