import React from "react";
import clsx from "clsx";
import { Member } from "@site/src/types";

import styles from "./MemberItem.module.css";

function slugify(text: string): string {
  const nameWithoutTitle = text.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.|Prof\.)\s+/i, "");
  return nameWithoutTitle
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-");
}

type MemberItemProps = {
  member: Member;
};

export default function MemberItem({ member }: MemberItemProps) {
  const isInternal =
    member.type === "researcher" ||
    member.type === "engineer" ||
    member.type === "staff-researcher";

  const isExternalOrPrevious = member.type === "external" || member.type === "previous";

  const nameHref = isInternal
    ? `/members/${slugify(member.name)}`
    : isExternalOrPrevious
      ? member.links?.website
      : undefined;

  const Name = () => {
    if (!nameHref) {
      return (
        <div className={clsx("text--bold text--center", styles.name)}>
          {member.name}
        </div>
      );
    }

    const isExternalUrl = /^https?:\/\//i.test(nameHref);

    return (
      <a
        className={clsx("text--bold text--center", styles.name)}
        href={nameHref}
        {...(isExternalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {member.name}
      </a>
    );
  };

  const showNowLine =
    member.type === "previous" && Boolean(member.currentAffiliation);

  return (
    <div className="col col--4 padding-bottom--lg">
      <div className={styles.innerContainer}>
        <div className="padding-top--lg text--center">
          <img alt={member.name} className={styles.image} src={member.image} />
        </div>

        <Name />

        <div className="text--center">{member.title}</div>
        {member.affiliation && (
          <div className="text--center">{member.affiliation}</div>
        )}

        {showNowLine && (
          <div className={clsx("text--center", styles.nowLine)}>
            <span className={styles.nowLabel}>Currently at:</span>{" "}
            <span className={styles.nowText}>{member.currentAffiliation}</span>
          </div>
        )}

        <div className="padding-bottom--lg" />
      </div>
    </div>
  );
}
