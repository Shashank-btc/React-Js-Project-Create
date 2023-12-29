import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";
import NewTask from "./components/NewTask";

function App() {

  const [projectName, setProjectName] =useState({
    selectProjectId : undefined,
    projects:[],
    tasks : []
  });

  function handleAddTask(text){
    setProjectName((prevState) =>{
      const taskId = Math.random()
      const newTask ={
        text :text,
        id : taskId,
        projectId : prevState.selectProjectId,
      }
        return{
          ...prevState,
          tasks: [newTask, ...prevState.tasks]
        }
      }
    )
  }

  function handleDeleteTask(id){
    setProjectName(
      prevState =>{
        return{
          ...prevState,
          tasks : prevState.tasks.filter((task) => task.id !== id),
           
        }
      }
    )
  }

  function handleStartAddingProject(){
    setProjectName(
      prevState =>{
        return{
          ...prevState,
          selectProjectId : null,

        }
      }
    )
  }

  function handleCancelAddProject(){
    setProjectName(
      prevState =>{
        return{
          ...prevState,
          selectProjectId : undefined,

        }
      }
    )
  }



  const selectProject = projectName.projects.find(project => project.id === projectName.selectProjectId)

  //console.log(selectedProject)
  let content = <SelectedProject project={selectProject} onDelete={handleDelete} onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask}
  tasks={projectName.tasks}
  />;
if(projectName.selectProjectId === null){
  content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
} else if (projectName.selectProjectId === undefined) {
  content =  <NoProjectSelected onStartAddProject={handleStartAddingProject} />
}

function handleAddProject(projectData){
  setProjectName(
    prevState =>{
const NewProject ={
 ...projectData,
 id : Math.random()
}

      return{
        ...prevState,
        selectProjectId : undefined,
        projects: [...prevState.projects,NewProject ]
      }
    }
  )
}

function handleSelectProject(id){
  setProjectName(
    prevState =>{
      return{
        ...prevState,
        selectProjectId : id,

      }
    }
  )
}

function handleDelete(){
  setProjectName(
    prevState =>{
      return{
        ...prevState,
        selectProjectId : undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectProjectId),
         
      }
    }
  )
}


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddingProject} projects={projectName.projects} 
      onSelectProject={handleSelectProject}/>
     {content}
    </main>
  );
}

export default App;
