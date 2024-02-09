export default function TaskList({ tasks }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task} className='text-white'>{task}</li>
            ))}
        </ul>
    );
}