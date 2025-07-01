import React from "react";
import clsx from "clsx";
import { Member } from "@site/src/types";

import styles from "./MemberItem.module.css";

// Function to create a slug from a name, removing title prefixes and converting to kebab-case
function slugify(text: string): string {
  // Remove common title prefixes (Dr., Mr., Ms., Mrs., etc.)
  const nameWithoutTitle = text.replace(
    /^(Dr\.|Mr\.|Ms\.|Mrs\.|Prof\.)\s+/i,
    ""
  );

  return nameWithoutTitle
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove non-word chars except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen
}

type MemberItemProps = {
  member: Member;
};

export default function MemberItem({ member }: MemberItemProps) {
  return (
    <div className="col col--4 padding-bottom--lg">
      <div className={styles.innerContainer}>
        <div className="padding-top--lg text--center">
          <img alt={member.name} className={styles.image} src={member.image} />
        </div>
        {member.type === "researcher" || member.type === "engineer" ? (
          <a
            className={clsx("text--bold text--center", styles.name)}
            href={`/members/${slugify(member.name)}`}
          >
            {member.name}
          </a>
        ) : (
          <div className={clsx("text--bold text--center", styles.name)}>
            {member.name}
          </div>
        )}
        <div className="text--center">{member.title}</div>
        {member.affiliation && (
          <div className="text--center">{member.affiliation}</div>
        )}
        <div className="padding-bottom--lg" />
      </div>
    </div>
  );
}
