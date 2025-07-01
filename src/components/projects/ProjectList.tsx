import React from "react";
import { Project } from "@site/src/types";

import ProjectItem from "./ProjectItem";

type ProjectListProps = {
  data: Project[];
  isSorted?: boolean;
};

export default function ProjectList({
  data,
  isSorted = false,
}: ProjectListProps) {
  return (
    <div className="container">
      <div className="row">
        {(isSorted
          ? data.sort((p1, p2) => p1.name.localeCompare(p2.name))
          : data
        ).map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
