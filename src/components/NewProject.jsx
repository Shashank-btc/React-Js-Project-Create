import { useRef } from "react";
import Input from "./Input";
import Model from "./Model";

export default function NewProject({onAdd, onCancel}) {

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    const model = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDesc = description.current.value;
        const enteredDue = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDue.trim() === ''){
           model.current.open()
           return;
        }

    
        onAdd({
            title : enteredTitle,
            description : enteredDesc,
            dueDate : enteredDue
        })
    }

   


    return (
    <>
    <Model ref={model}  buttonCaptter="Okay">
        <h2 className='text-xl font-bold text-stone700 my-4' >Invalid Input</h2>
        <p className='mb-4'>oops ... looks like you forgot to enter a value</p>
        <p className='mt-2'>Please make sure you provide avalid value for every input filed</p>
    </Model>
    <div className="w-[35rem] mt-15">
        <menu className="flex item-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text:-stone-950" onClick={onCancel}>Cancel</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
            >Save</button></li>
        </menu>
        <form>
            <div>
                <Input type= "text" ref={title} lable='Title' />
                <Input ref={description} lable='Description' textArea />
                <Input type='date' ref={dueDate} lable='Due Date' />
            </div>
        </form>
    </div>
    </>
    )
}