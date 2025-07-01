import fs from "fs";
import path from "path";
import yaml from "js-yaml";

// Configuration
const MEMBERS_YAML_DIR = path.resolve(__dirname, "../data/members");
const MEMBERS_MDX_DIR = path.resolve(__dirname, "../src/pages/members");

// Make sure the output directory exists
if (!fs.existsSync(MEMBERS_MDX_DIR)) {
  fs.mkdirSync(MEMBERS_MDX_DIR, { recursive: true });
}

// Helper function to get authorShortName
function getAuthorShortName(name: string): string {
  // Remove common title prefixes for processing
  const nameWithoutTitle = name.replace(
    /^(Dr\.|Mr\.|Ms\.|Mrs\.|Prof\.)\s+/i,
    ""
  );

  const parts = nameWithoutTitle.split(" ");
  if (parts.length < 2) return nameWithoutTitle;

  const firstName = parts[0];
  const lastName = parts[parts.length - 1];

  return `${firstName[0]}. ${lastName}`;
}

// Main function to convert a YAML file to MDX
function convertYamlToMdx(yamlFilePath: string): void {
  try {
    // Read the YAML file
    const yamlContent = fs.readFileSync(yamlFilePath, "utf8");
    const memberData = yaml.load(yamlContent) as any;

    // Skip if no data
    if (!memberData) {
      console.warn(`No data found in ${yamlFilePath}`);
      return;
    }

    // Create the MDX content
    const authorShortName = getAuthorShortName(memberData.name);
    // Build the research interests list
    const researchInterests = memberData.researchInterests || [];
    const researchInterestsContent =
      researchInterests.length > 0
        ? `\n## Research Interests\n\n${researchInterests
            .map((interest) => `- ${interest}`)
            .join("\n")}\n`
        : "";

    // Build the links object for MemberLinks component
    const links = memberData.links || {};

    // Generate the content with MemberLinks component
    const mdxContent = `import MemberLinks from "@site/src/components/people/MemberLinks";
import MemberPublications from "@site/src/components/people/MemberPublications";

# ${memberData.name}

<div style={{display: 'flex', flexDirection: 'row'}}>

<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>

<MemberLinks
  links={{
${links.email ? `    email: "${links.email}",\n` : ""}${
      links.github ? `    github: "${links.github}",\n` : ""
    }${links.linkedin ? `    linkedin: "${links.linkedin}",\n` : ""}${
      links.twitter ? `    twitter: "${links.twitter}",\n` : ""
    }${links.scholar ? `    scholar: "${links.scholar}",\n` : ""}${
      links.orcid ? `    orcid: "${links.orcid}",\n` : ""
    }${links.website ? `    website: "${links.website}",\n` : ""}  }}
/>

${
  memberData.bio ||
  `${memberData.name} is a ${
    memberData.title
  } in the Department of Computer Science and Engineering at The Ohio State University
and a member of the Innovative Data Technologies (IDT) Lab. ${
    memberData.advisor
      ? `${memberData.name} works under the guidance of ${memberData.advisor}.`
      : ""
  }`
}

</div>

<div style={{paddingLeft: 32}}>

<img
  src={"/img/members/${memberData.image}"}
  alt="${memberData.name}"
  style={{ borderRadius: 16, width: "160px" }}
/>

</div>

</div>
${researchInterestsContent}
## Publications

<MemberPublications authorShortName="${authorShortName}" />
`;

    // Write the MDX file
    const outputFileName = `${memberData.slug}.mdx`;
    const outputFilePath = path.join(MEMBERS_MDX_DIR, outputFileName);

    fs.writeFileSync(outputFilePath, mdxContent, "utf8");
    console.log(`Created ${outputFilePath}`);
  } catch (error) {
    console.error(`Error processing ${yamlFilePath}:`, error);
  }
}

// Main function
async function main() {
  try {
    // Get all YAML files
    const files = fs.readdirSync(MEMBERS_YAML_DIR);
    const yamlFiles = files.filter(
      (file) => file.endsWith(".yaml") || file.endsWith(".yml")
    );

    console.log(`Found ${yamlFiles.length} YAML files to convert`);

    // Process each file
    for (const file of yamlFiles) {
      const filePath = path.join(MEMBERS_YAML_DIR, file);
      convertYamlToMdx(filePath);
    }

    console.log("Finished converting YAML files to MDX");
  } catch (error) {
    console.error("Error in main function:", error);
  }
}

main();
