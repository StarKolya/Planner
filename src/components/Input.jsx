export default function Input({label, id, onChange}) {

    return (
        <>
            <p className="text-stone-600 text-lg uppercase font-bold">{label}</p>
            <input
                onChange={onChange}
                className= {`w-auto ${label === 'Description' ? 'h-24' : 'h-8'} mb-6 bg-stone-200 rounded-lg pl-2`}
                type={label === 'Due date' ? "date" : "text"}
            />
        </>
    )
}