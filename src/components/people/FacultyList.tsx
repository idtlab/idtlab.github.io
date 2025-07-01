import React from "react";
import { Member } from "@site/src/types";

import FacultyItem from "./FacultyItem";

type FacultyListProps = {
  data: Member[];
};

export default function FacultyList({ data }: FacultyListProps) {
  return (
    <div className="row">
      {data.map((faculty) => (
        <FacultyItem faculty={faculty} key={faculty.name} />
      ))}
    </div>
  );
}
