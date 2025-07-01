import React from "react";
import { Affiliation } from "@site/src/types";

import styles from "./AffiliationItem.module.css";

type AffiliationItemProps = {
  affiliation: Affiliation;
};

export default function AffiliationItem({ affiliation }: AffiliationItemProps) {
  return (
    <div className="col col--4">
      <div className={styles.innerContainer}>
        <div className="padding-top--lg text--center">
          <img alt={affiliation.name} className={styles.image} src={affiliation.image} />
        </div>
        <div className="padding-vert--sm text--center">
          <a href={affiliation.url} target="_blank">
            {affiliation.name}
          </a>
        </div>
      </div>
    </div>
  );
}
