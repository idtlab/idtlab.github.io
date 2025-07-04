import React, { PropsWithChildren } from "react";

export default function SectionHeader({ children }: PropsWithChildren) {
  return (
    <div className="container padding-bottom--lg padding-top--md">
      <h2 className="text--center">{children}</h2>
    </div>
  );
}
