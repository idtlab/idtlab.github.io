import React from "react";
import { Member } from "@site/src/types";

import styles from "./FacultyItem.module.css";
import useMemberLinksRenderer from "./useMemberLinksRenderer";

type FacultyItemProps = {
  faculty: Member;
};

export default function FacutlyItem({ faculty }: FacultyItemProps) {
  const { renderLinks } = useMemberLinksRenderer();
  return (
    <div className="col col--6">
      <div className={styles.innerContainer}>
        <div className="padding-top--lg text--center">
          <img alt={faculty.name} className={styles.image} src={faculty.image} />
        </div>
        <div className="text--bold text--center">{faculty.name}</div>
        <div className="text--center">{faculty.title}</div>
        <div className="text--center">{renderLinks(faculty.links)}</div>
        <div className="padding-horiz--lg padding-bottom--lg padding-top--md text--center">
          {faculty.bio}
        </div>
      </div>
    </div>
  );
}
