import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Job } from "@site/src/types";
import {
  faArrowUpRightFromSquare,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./JobItem.module.css";

export default function JobItem({
  applicationLink,
  detailLink,
  detailText,
  location,
  postedAt,
  shortDescription,
  status,
  title,
}: Job) {
  const isOpen = status === "open";
  const isDetailLinkExternal = detailLink?.startsWith("http");
  return (
    <div className={clsx("margin-bottom--md padding--md", styles.container)}>
      <div className={styles.contentContainer}>
        <h3 className="margin-bottom--none">{title}</h3>
        <div className={clsx("margin-bottom--md", styles.periodContainer)}>
          {postedAt && (
            <>
              <FontAwesomeIcon
                className={clsx("margin-right--sm", styles.periodIcon)}
                icon={faClock}
                size="sm"
              />
              <span className={clsx("margin-right--md", styles.periodText)}>
                {postedAt}
              </span>
            </>
          )}
          {location && (
            <>
              <FontAwesomeIcon
                className={clsx("margin-right--sm", styles.periodIcon)}
                icon={faLocationDot}
                size="sm"
              />
              <span className={clsx("margin-right--md", styles.periodText)}>
                {location}
              </span>
            </>
          )}
        </div>
        <div className="margin-bottom--md">{shortDescription}</div>
        <div className={styles.buttonContainer}>
          <Link
            className={clsx("button button--primary", !isOpen && "disabled")}
            href={applicationLink}
          >
            {isOpen ? "Apply" : "Closed"}
          </Link>
          {detailLink && (
            <Link
              className="button button--link"
              href={detailLink}
              target={isDetailLinkExternal ? "_blank" : "_self"}
            >
              {detailText || "Details"}
              {isDetailLinkExternal && (
                <FontAwesomeIcon
                  className="margin-left--sm"
                  icon={faArrowUpRightFromSquare}
                  size="sm"
                />
              )}
            </Link>
          )}
        </div>
        {!isOpen && (
          <small className={styles.smallNote}>
            Please check back for future opportunities.
          </small>
        )}
      </div>
    </div>
  );
}
