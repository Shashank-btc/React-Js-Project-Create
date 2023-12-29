
import image from '../assets/no-projects.png'
import Button from './Button'
export default function NoProjectSelected({ onStartAddProject }){

    
    return(
        <div className='mt-24 text-center w-2/3'> 
            <img src={image} alt='empty text' className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Projected Selected</h2>
            <p className='text-stone-400 mb-4'>Select the project or get started with a new one</p>
            <p className='mt-8'>
                {/* <button className=''></button> */}
                <Button text="Create new Project" onClick={onStartAddProject}></Button>
                             </p>
        </div>
    )
}