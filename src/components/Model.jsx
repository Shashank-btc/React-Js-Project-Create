import {  forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Model = forwardRef ( function Model({children , buttonCaptter}, ref){
    const dialog = useRef();
    console.log(children)
    useImperativeHandle (ref, () =>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
return createPortal(
    <dialog ref={dialog} className="backdrop:bg-ston4-9--/90 p-4 rounded-md shadow-md">
       {children}
        <form method="dialog" className="mt-4 text-right">
            <Button text={buttonCaptter} ></Button>
        </form>
    </dialog>
,document.getElementById('modal-root'))
})
export default Model;