import React from "react";
import { Member } from "@site/src/types";

import MemberItem from "./MemberItem";

type MemberListProps = {
  data: Member[];
};

export default function MemberList({ data }: MemberListProps) {
  return (
    <div className="row">
      {data.map((member) => (
        <MemberItem member={member} key={member.name} />
      ))}
    </div>
  );
}
