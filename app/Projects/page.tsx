import { project } from "@/utility/projects";
import Link from "next/link";
import React from "react";

const Project = () => {
  const renderProjects = project.map((pr) => {
    return (
      <Link href={`Projects/${pr.projectID}/`} key={pr.projectID}>
        <div className="dark:bg-primary-10 bg-primary-0 flex flex-col justify-evenly p-4 rounded-lg shadow-xl items-start border border-secondary-6">
          <p className="text-2xl">{pr.projectName}</p>
          <p className="text-sm text-primary-1">{pr.projectDesc}</p>

          {/* <div className="flex flex-row flex-wrap text-sm gap-2 mt-4">
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
          </div> */}
        </div>
      </Link>
    );
  });
  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1 my-8">
      {renderProjects}
    </div>
  );
};

export default Project;
