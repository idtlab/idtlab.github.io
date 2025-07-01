import PublicationsTable from "../publications/PublicationsTable";
import React from "react";
import { ProjectId, PublicationTag } from "@site/src/types";
import { getProjectById } from "@site/src/data/projects";
import { getPublicationsByTag } from "@site/src/data/publications";

type ProjectPublicationsProps = {
  projectId?: ProjectId;
  tag?: PublicationTag;
};

export default function ProjectPublications({
  projectId,
  tag,
}: ProjectPublicationsProps) {
  let publications = [];
  if (projectId) {
    const { name } = getProjectById(projectId);
    publications = getPublicationsByTag(name as PublicationTag);
  } else if (tag) {
    publications = getPublicationsByTag(tag);
  } else {
    throw new Error("Either projectId or tag must be provided");
  }
  return (
    <PublicationsTable
      data={publications}
      isFooterVisible={false}
      isSearchInputVisible={false}
      isTagsColumnVisible={false}
    />
  );
}
