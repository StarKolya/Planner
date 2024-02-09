import TaskList from "./TaskList";
import {useState} from "react";
import TaskForm from "./TaskForm.jsx";

export default function ProjectsSidebar() {
    const [buttonClicked, setButtonClicked] = useState(false)
    const [tasks, setTasks] = useState([])
    const [submittedData, setSubmittedData] = useState({
        title: '',
        description: '',
        date: ''
    })

    function clickHandler() {
        setTasks(prevTasks => [...prevTasks, submittedData.title])
        setButtonClicked(false)
    }


    function handleChange(id, event) {
        setSubmittedData((prevData) => ({...prevData, [id]: event.target.value}))
    }


    function handleClick() {
        setButtonClicked(true)
    }

    return (
        <>
            <div className="bg-black w-96 h-auto rounded-tr-2xl pl-12 pt-16 flex flex-col gap-10">
                <h2 className="text-white text-3xl font-bold">Your projects</h2>
                <button onClick={handleClick} className="bg-stone-600 w-36 h-12 rounded-lg text-stone-300">+ Add Project</button>
                <TaskList tasks={tasks} />
            </div>
            <div className="pt-16 w-full flex flex-col">
                {buttonClicked ? <TaskForm
                    submittedData={submittedData}
                    handleChange={handleChange}
                    clickHandler={clickHandler}
                    /> : null}
            </div>

        </>
    )

}