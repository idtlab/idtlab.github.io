import PublicationsTable from "../publications/PublicationsTable";
import React from "react";
import { getPublicationsByAuthorShortName } from "@site/src/data/publications";

type MemberPublicationsProps = {
  authorShortName?: string;
};

export default function MemberPublications({
  authorShortName,
}: MemberPublicationsProps) {
  const publications = getPublicationsByAuthorShortName(authorShortName);
  return (
    <PublicationsTable
      data={publications}
      isFooterVisible={false}
      isSearchInputVisible={false}
      isTagsColumnVisible={false}
    />
  );
}
