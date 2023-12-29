import Button from "./Button";

export default function ProjectSideBar({ onStartAddProject, projects , onSelectProject, selectProjectId  }) {
    console.log(projects)
    return (<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
            Your Projects
        </h2>
        <Button text="+ Add Project" onClick={onStartAddProject} />
        {projects !== undefined ?
        <ul className="mt-8">
            {projects.map((project) => {

let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-ston-200 hover:bg-stone-800"
if(project.id === selectProjectId){
    cssClass +=' bg-stone-800 text-stone-200'
} else{
    cssClass += ' text-stone-400'
}
                return(
                    <li key={project.id}>
                        <button className={cssClass}
                        onClick={() => onSelectProject(project.id)}>
                            {project.title}
                        </button>
                    </li>)
})
            }
        </ul> : <h2>projects is undefined </h2>}
    </aside>
    )
}