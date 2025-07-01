import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faOrcid,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./MemberLinks.module.css";

type LinkType =
  | "email"
  | "github"
  | "linkedin"
  | "orcid"
  | "twitter"
  | "website"
  | "scholar";

interface LinkProps {
  type: LinkType;
  url: string;
}

interface MemberLinksProps {
  links: Record<LinkType, string>;
  columns?: 1 | 2;
}

// Function to get the icon component for a link type
const getIcon = (type: LinkType) => {
  switch (type) {
    case "email":
      return <FontAwesomeIcon icon={faEnvelope} />;
    case "github":
      return <FontAwesomeIcon icon={faGithub} />;
    case "linkedin":
      return <FontAwesomeIcon icon={faLinkedin} />;
    case "orcid":
      return <FontAwesomeIcon icon={faOrcid} />;
    case "twitter":
      return <FontAwesomeIcon icon={faTwitter} />;
    case "website":
      return <FontAwesomeIcon icon={faGlobe} />;
    case "scholar":
      return <FontAwesomeIcon icon={faGraduationCap} />; // Using graduation cap for Google Scholar
    default:
      return <FontAwesomeIcon icon={faGlobe} />;
  }
};

// Function to format the display text for each link type
const formatLinkText = (type: LinkType, url: string): string => {
  switch (type) {
    case "email":
      // Show just the email address
      return url.replace("mailto:", "");

    case "github":
      // Extract the username from the GitHub URL
      const githubMatch = url.match(/github\.com\/([^\/]+)/);
      return githubMatch ? `@${githubMatch[1]}` : url;

    case "linkedin":
      // Extract the username from the LinkedIn URL
      const linkedinMatch = url.match(/linkedin\.com\/in\/([^\/]+)/);
      return linkedinMatch ? linkedinMatch[1] : "LinkedIn";

    case "orcid":
      // Extract the ORCID ID
      const orcidMatch = url.match(/orcid\.org\/(\d{4}-\d{4}-\d{4}-\d{4})/);
      return orcidMatch ? orcidMatch[1] : "ORCID";

    case "twitter":
      // Extract the username from the Twitter URL
      const twitterMatch = url.match(/twitter\.com\/([^\/]+)/);
      return twitterMatch ? `@${twitterMatch[1]}` : "Twitter";

    case "website":
      // Display a cleaner version of the website URL
      return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

    case "scholar":
      return "Google Scholar";

    default:
      return url;
  }
};

// Individual link component
const LinkItem: React.FC<LinkProps> = ({ type, url }) => {
  // Add mailto: prefix if it's an email without it
  const href =
    type === "email" && !url.startsWith("mailto:") ? `mailto:${url}` : url;

  // Get tooltip text
  const tooltipText = formatLinkText(type, url);

  return (
    <a
      href={href}
      target={type === "email" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={styles.linkItem}
      title={tooltipText}
      aria-label={`${type}: ${tooltipText}`}
    >
      <span className={styles.icon}>{getIcon(type)}</span>
    </a>
  );
};

// Define the order of social links
const linkOrder: LinkType[] = [
  "email", // Primary contact method first
  "scholar", // Academic profiles
  "orcid", // Academic identifier
  "github", // Code repository third
  "linkedin", // Professional network second
  "twitter", // Social media fourth
  "website", // Personal website last
];

// Main component
const MemberLinks: React.FC<MemberLinksProps> = ({ links, columns = 2 }) => {
  // Filter out undefined or empty links
  const validLinks = Object.entries(links || {})
    .filter(([_, value]) => value)
    .map(([key, value]) => ({ type: key as LinkType, url: value }))
    // Sort based on the predefined order
    .sort((a, b) => {
      const aIndex = linkOrder.indexOf(a.type);
      const bIndex = linkOrder.indexOf(b.type);
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    });

  if (validLinks.length === 0) {
    return null;
  }

  return (
    <div
      className={`${styles.linksContainer} ${
        columns === 1 ? styles.singleColumn : styles.twoColumns
      }`}
    >
      {validLinks.map((link, index) => (
        <LinkItem key={index} type={link.type} url={link.url} />
      ))}
    </div>
  );
};

export default MemberLinks;
