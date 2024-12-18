import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import { UserProvider } from "./components/UserContext";


import Main from './components/Main';
import CreateUser from './components/User/Signup';
import Login from './components/User/Login';

import Home from './components/Home';
import YourCourses from './components/Course/YourCourses';
import CreateLesson from './components/CreateCourse/CreateLesson';
import LessonDisplay from './components/Course/LessonDisplay';

import EnglishCourse from './components/Course/CourseData/EnglishCourse';
import HindiCourse from './components/Course/CourseData/HindiCourse';
import FrenchCourse from './components/Course/CourseData/FrenchCourse';
import SpanishCourse from './components/Course/CourseData/SpanishCourse';
import GermanCourse from './components/Course/CourseData/GermanCourse';
import ArabicCourse from './components/Course/CourseData/ArabicCourse';


import LessonList from './components/CreateCourse/LessonList';

function App() {
  return (
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/login-user" element={<Login />} />


          <Route path="/home" element={<Home />} />
          <Route path="/lesson-display" element={<LessonDisplay />} />  
          <Route path="/your-courses" element={<YourCourses />} />
 
          <Route path="/course-content/English" element={<EnglishCourse />} />
          <Route path="/course-content/Hindi" element={<HindiCourse />} />
          <Route path="/course-content/French" element={<FrenchCourse />} />
          <Route path="/course-content/Spanish" element={<SpanishCourse />} />
          <Route path="/course-content/German" element={<GermanCourse />} />
          <Route path="/course-content/Arabic" element={<ArabicCourse />} />
          
          <Route path="/create-lesson" element={<CreateLesson />} />
          <Route path="/admin" element={<LessonList />} />


        </Routes>
      </HashRouter>
      </UserProvider>
  );
}




export default App;