import React, { useState } from "react";

export default function LessonForm(props) {
    const [name, setName] = useState("");
    const [instructor, setInstructor] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [modules, setModules] = useState([]);
    const [quizQuestions, setQuizQuestions] = useState([]);

    const handleModuleChange = (index, key, value) => {
        const updatedModules = [...modules];
        updatedModules[index][key] = value;
        setModules(updatedModules);
    };

    const handleQuizQuestionChange = (index, key, value) => {
        const updatedQuestions = [...quizQuestions];
        updatedQuestions[index][key] = value;
        setQuizQuestions(updatedQuestions);
    };

    const handleModuleAdd = () => {
        setModules([...modules, { moduleName: "", moduleContent: "" }]);
    };

    const handleQuizQuestionAdd = () => {
        setQuizQuestions([...quizQuestions, {
            question: "",
            options: ["", "", "", ""],
            correctOption: ""
        }]);
    };

    const handleClick = () => {
        const arr = [name, instructor, description, duration, modules, quizQuestions];
        props.getState(arr);
    };

    return (
        <>
            <div className="container">
                <div className="card mt-5 mx-auto" style={{ maxWidth: '425px' }}>
                    <div className="card-body">
                        <h2 className="card-title text-center">Get started</h2>
                        <h6 className="card-subtitle mb-2 text-muted text-center">Create the complete course</h6>
                        <div>
                            <div className="form-group">
                                <label htmlFor="langName">Language Name</label>
                                <input onChange={(event) => setName(event.target.value)} className="form-control" placeholder="Enter Language Name" type="text" id="langName" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="instName">Instructor Name</label>
                                <input onChange={(event) => setInstructor(event.target.value)} className="form-control" placeholder="Enter Instructor Name" type="text" id="instName" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="coursedesc">Course Description</label>
                                <input onChange={(event) => setDescription(event.target.value)} className="form-control" placeholder="Enter Course Description" type="text" id="coursedesc" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="coursetime">Course Duration</label>
                                <input onChange={(event) => setDuration(event.target.value)} className="form-control" placeholder="Enter Course Duration" type="number" id="coursetime" required />
                            </div>

                            {modules.map((module, index) => (
                                <div key={index}>
                                    <div className="form-group">
                                        <label htmlFor={`moduleName${index}`}>Module {index + 1} Name</label>
                                        <input
                                            onChange={(event) => handleModuleChange(index, 'moduleName', event.target.value)}
                                            className="form-control"
                                            placeholder={`Enter Module ${index + 1} Name`}
                                            type="text"
                                            id={`moduleName${index}`}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={`moduleContent${index}`}>Module {index + 1} Content</label>
                                        <textarea
                                            onChange={(event) => handleModuleChange(index, 'moduleContent', event.target.value)}
                                            className="form-control"
                                            placeholder={`Enter Module ${index + 1} Content`}
                                            id={`moduleContent${index}`}
                                            required
                                        />
                                    </div>
                                </div>
                            ))}

                            <button type="button" onClick={handleModuleAdd} className="btn btn-info">Add Module</button>

                            {quizQuestions.map((question, index) => (
                                <div key={index}>
                                    <div className="form-group">
                                        <label htmlFor={`quizQuestion${index}`}>Quiz Question {index + 1}</label>
                                        <input
                                            onChange={(event) => handleQuizQuestionChange(index, 'question', event.target.value)}
                                            className="form-control"
                                            placeholder={`Enter Quiz Question ${index + 1}`}
                                            type="text"
                                            id={`quizQuestion${index}`}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={`options${index}`}>Options (Separate with commas)</label>
                                        <input
                                            onChange={(event) => handleQuizQuestionChange(index, 'options', event.target.value.split(","))}
                                            className="form-control"
                                            placeholder={`Enter Options for Question ${index + 1}`}
                                            type="text"
                                            id={`options${index}`}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={`correctOption${index}`}>Correct Option (Index)</label>
                                        <input
                                            onChange={(event) => handleQuizQuestionChange(index, 'correctOption', event.target.value)}
                                            className="form-control"
                                            placeholder={`Enter Correct Option Index for Question ${index + 1}`}
                                            type="number"
                                            id={`correctOption${index}`}
                                            required
                                        />
                                    </div>
                                </div>
                            ))}

                            <button type="button" onClick={handleQuizQuestionAdd} className="btn btn-info">Add Quiz Question</button>

                            <button type="button" onClick={handleClick} className="btn btn-primary btn-block mt-3">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
