import { useEffect, useState } from "react"
import LessonListRow from "./LessonListRow";
import Axios from "axios";
import Nav from "../Nav"
import { Link } from "react-router-dom";


export default function LessonList(){
   
    const [arr,setArr]=useState([]);

    useEffect(()=>{
        Axios.get("https://mern-project-9m49.onrender.com/lessonRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[])


    const ListItems =()=>{
        return arr.map((val,ind)=>{
            return <LessonListRow obj={val} />
        })
    }
    return(
        <>
        <Nav/>
        <div class="text-center">
  <h2>Languages and Instructor List</h2>
</div>
        <table style={{maxWidth:"60%", margin:"50px auto"}} class="table table-bordered table-secondary table-striped">
            <thead>
                <tr>
                    <th class="text-center">Language Name</th>
                    <th class="text-center">Instructor</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                    {ListItems()}
            </tbody>
        </table>
        <Link to="/create-lesson"><button class="btn btn-primary d-block mx-auto my-3">Create New Course</button></Link>
        </>
    )
   
}
