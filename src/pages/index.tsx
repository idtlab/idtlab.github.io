import HomepageFeatures from "@site/src/components/home/HomepageFeatures";
import HomepageProjects from "@site/src/components/home/HomepageProjects";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroBannerOverlay} />
      <div className={clsx("container", styles.heroBannerContainer)}>
        <h1 className={clsx("hero__title", styles.heroBannerText)}>
          {siteConfig.title}
        </h1>
        <p className={clsx("hero__subtitle", styles.heroBannerText)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-right--md"
            to="/research/projects"
          >
            Projects
          </Link>
          <Link
            className="button button--secondary button--lg margin-right--md"
            to="/news"
          >
            News
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/publications"
          >
            Publications
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="Home">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageProjects className={styles.sectionAlt} />
      </main>
    </Layout>
  );
}
