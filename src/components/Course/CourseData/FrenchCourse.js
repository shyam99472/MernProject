import React, { useState, useEffect } from 'react';
import Nav from '../../Nav';
import axios from 'axios';

const CourseContent = () => {
    const [courseData, setCourseData] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [userResponses, setUserResponses] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        axios.get('https://mern-project-9m49.onrender.com/lessonRoute/lessonSchema')
            .then(response => {
                const course = response.data.find(course => course.name === "French");
                setCourseData(course);
            })
            .catch(error => {
                console.error('Error fetching course data:', error);
            });
    }, []);

    const handleSectionToggle = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const handleQuizOptionSelect = (questionIndex, optionIndex) => {
        setUserResponses({
            ...userResponses,
            [questionIndex]: optionIndex,
        });
    };

    const handleSubmitQuiz = () => {
        // Calculate score based on user responses
        let correctAnswers = 0;
        courseData.quizQuestions.forEach((quiz, index) => {
            if (userResponses[index] === quiz.correctOptionIndex) {
                correctAnswers++;
            }
        });
        const calculatedScore = (correctAnswers / courseData.quizQuestions.length) * 100;
        setScore(calculatedScore);
    };

    if (!courseData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Nav />
            <div className="container">
                <header className="my-4">
                    <h1 className="text-center">Course Details</h1>
                </header>
                <section className="course-info p-4">
                    <div className="about mb-4">
                        <h3>About This Course</h3>
                        <p>{courseData.description}</p>
                    </div>
                    <div className="learning mb-4">
                        <h3>What You'll Learn</h3>
                        <div className="row">
                            {courseData.modules.map((module, index) => (
                                <div key={index} className="col-md-6">
                                    <ul>
                                        <li>{module.moduleContent}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="curriculum">
                        <h2 className="text-center">Course Content</h2>
                        <div id="accordion">
                            {courseData.modules.map((module, index) => (
                                <div key={module._id} className="card curriculum-section">
                                    <div className="card-header" id={`heading${index}`}>
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="mb-0 collapsed" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                                    {module.moduleName}
                                                </h5>
                                            </div>
                                            <div className="col-auto">
                                                <h5 className="mb-0 collapsed" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                                    <i className="fas fa-chevron-down"></i>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div id={`collapse${index}`} className={`collapse ${activeSection === index ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-parent="#accordion">
                                        <div className="card-body">{module.moduleContent}</div>
                                    </div>
                                </div>
                            ))}
                            <div className="card curriculum-section">
                                <div className="card-header" id="headingQuiz">
                                    <h5 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseQuiz" aria-expanded="false" aria-controls="collapseQuiz">
                                        Quiz
                                    </h5>
                                </div>
                                <div id="collapseQuiz" className="collapse" aria-labelledby="headingQuiz" data-parent="#accordion">
                                    <div className="card-body text-center">
                                        {courseData.quizQuestions.map((quiz, questionIndex) => (
                                            <div key={quiz._id} className="quiz-container">
                                                <div className="question">{quiz.question}</div>
                                                <div className="options">
                                                    {quiz.options.map((option, optIndex) => (
                                                        <div
                                                            key={optIndex}
                                                            className={`option ${userResponses[questionIndex] === optIndex ? 'selected' : ''}`}
                                                            onClick={() => handleQuizOptionSelect(questionIndex, optIndex)}
                                                            style={{ cursor: 'pointer' }} // Ensure cursor pointer
                                                        >
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="navigation-buttons nav-button" onClick={handleSubmitQuiz}>Submit</button>
                                    {score !== null && (
                                        <div className="quiz-score">
                                            Your Score: {score.toFixed(2)}%
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CourseContent;
