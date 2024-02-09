import {useRef, useState} from "react";
import Input from "./Input";
export default function TaskForm({handleChange, clickHandler}) {

    return (
        <>

            <div className="w-2/3 flex flex-col">
                <div className="ml-auto mb-8">
                    <button>Cancel</button>
                    <button onClick={clickHandler} className="w-20 bg-black text-white rounded-xl h-10 ml-4">Save</button>
                </div>
                <Input
                    label={'Title'}
                    onChange={(event) => handleChange('title', event)}
                />

                <Input
                    label={'Description'}
                    onChange={(event) => handleChange('description', event)}
                />

                <Input
                    label={'Due date'}
                    onChange={(event) => handleChange('date', event)}
                />
            </div>
        </>
    )
}