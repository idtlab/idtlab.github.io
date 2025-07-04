import React from "react";
import { Affiliation } from "@site/src/types";

import AffiliationItem from "./AffiliationItem";

type AffiliationListProps = {
  data: Affiliation[];
};

export default function AffiliationList({ data }: AffiliationListProps) {
  return (
    <div className="margin-bottom--lg row">
      {data.map((affiliation) => (
        <AffiliationItem affiliation={affiliation} key={affiliation.name} />
      ))}
    </div>
  );
}
