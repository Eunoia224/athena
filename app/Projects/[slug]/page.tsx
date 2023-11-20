"use client";
import { project } from "@/utility/projects";
import { useParams } from "next/navigation";

const Project = () => {
  const { slug } = useParams();
  const currentProject: any = project.map((pr) => {
    if (pr.projectID === slug) {
      return (
        <div
          className="dark:bg-primary-10 bg-primary-0 flex flex-col justify-evenly p-4 rounded-lg shadow-xl items-center"
          key={pr.projectID}
        >
          <p className="text-2xl">Project Name: {pr.projectName}</p>
          <p>{pr.projectDesc}</p>
          <div className="flex flex-row flex-wrap text-sm gap-2">
            {pr.projectTags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className={`bg-[#${tag.tagColor}] p-1 rounded-xl mix-blend-screen`}
                  style={{ backgroundColor: tag.tagColor }}
                >
                  {tag.tagName}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  });

  return <div>{currentProject}</div>;
};

export default Project;
