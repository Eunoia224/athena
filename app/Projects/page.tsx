import { project } from "@/utility/projects";
import Link from "next/link";
import React from "react";

const Project = () => {
  const renderProjects = project.map((pr) => {
    return (
      <Link href={`Projects/${pr.projectID}/`} key={pr.projectID}>
        <div className="dark:bg-primary-10 bg-primary-0 flex flex-col justify-evenly p-4 rounded-lg shadow-xl items-center">
          <p className="text-2xl">{pr.projectName}</p>
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
      </Link>
    );
  });
  return (
    <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1 my-8">
      {renderProjects}
    </div>
  );
};

export default Project;
