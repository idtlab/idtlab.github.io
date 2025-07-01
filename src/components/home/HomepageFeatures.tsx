import React from "react";
import clsx from "clsx";

import styles from "./HomepageFeatures.module.css";
import SectionHeader from "../common/SectionHeader";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Data Management Systems for Science",
    Svg: require("@site/static/img/home/data-management-systems.svg").default,
    description: (
      <>
        Design and implementation of data management systems for scientific applications, including
        data-intensive workflows.
      </>
    ),
  },
  {
    title: "Efficient Parallel and Distributed I/O",
    Svg: require("@site/static/img/home/parallel-distributed-io.svg").default,
    description: <>
        Development of efficient parallel and distributed I/O systems, including data containers and
        storage hierarchies.
    </>,
  },
  {
    title: "Data Readiness and Security",
    Svg: require("@site/static/img/home/data-readiness-security.svg").default,
    description: (
      <>
        Research on data readiness for AI applications, ensuring data quality and compliance, and
        addressing security challenges in data management.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md padding-top--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <SectionHeader>Our research covers various aspects of data management</SectionHeader>
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
