"use client";
import { project } from "@/utility/projects";
import { tasks } from "@/utility/task";
import { useParams } from "next/navigation";

const Project = () => {
  const { slug } = useParams();

  const currentProject: any = project.map((pr) => {
    if (pr.projectID === slug) {
      return (
        <div
          className="dark:bg-primary-10 bg-primary-0 flex flex-col justify-evenly p-4 rounded-lg shadow-xl items-start"
          key={pr.projectID}
        >
          <p className="text-2xl">Project Name: {pr.projectName}</p>
          <p className="text-primary-8 dark:text-primary-1 text-sm">
            {pr.projectDesc}
          </p>
          {/* TODO WORK OUT THE UI FOR the tasks */}
          {tasks.map((task) => {
            if (task.projectId === pr.projectID) {
              return (
                <div key={task.taskID}>
                  {task.taskName}
                  {task.taskDesc}
                  {task.taskDate}
                  {task.taskStatus}
                </div>
              );
            }
          })}
        </div>
      );
    }
  });

  return <div className="my-8">{currentProject}</div>;
};

export default Project;
