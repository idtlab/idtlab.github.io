import fs from "fs";
import path from "path";
import yaml from "js-yaml";

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

// Output directory
const OUTPUT_DIR = path.resolve(__dirname, "../data/members");

// Make sure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Let's use a simpler approach - eval the file contents
const membersTs = fs.readFileSync(
  path.resolve(__dirname, "../src/data/members.ts"),
  "utf8"
);

// Execute the script in a separate function to avoid variable conflicts
function getMembersArray() {
  // Use a simplified replacement approach to get the array
  const memberCode = membersTs
    .replace(/import { Member } from "..\/types";/, "")
    .replace(/export default /, "return ")
    .replace(/ as Member\[\];/, ";");

  // Intercept require calls to return empty strings for image paths
  const fakeRequire = (path: string) => ({ default: path });

  // Execute the code to get the members array
  try {
    // @ts-ignore
    return new Function("require", memberCode)(fakeRequire);
  } catch (error) {
    console.error("Error evaluating members.ts:", error);
    return [];
  }
}

const allMembers = getMembersArray();

// Filter members with type = "researcher"
const members = allMembers.filter(
  (member) => member.type === "researcher" || member.type === "engineer"
);

console.log(
  `Found ${allMembers.length} total members, filtering to ${members.length} researchers`
);

// Process each researcher member
members.forEach((member) => {
  // Create slug from name (with "Dr." prefix removed)
  const slug = slugify(member.name);

  // Create a clean object to export (removing defaults and functions)
  const cleanMember = { ...member };

  // Remove the image path and just keep the filename
  if (cleanMember.image && typeof cleanMember.image === "string") {
    // Extract just the filename if possible
    const imagePath = cleanMember.image;
    const matches = /.*\/(.+\.[a-zA-Z0-9]+)$/.exec(imagePath);
    if (matches && matches[1]) {
      cleanMember.image = matches[1];
    } else {
      cleanMember.image = path.basename(cleanMember.image);
    }
  }

  // Add a slug field
  cleanMember.slug = slug;

  // Add a bio field if not present
  if (!cleanMember.bio) {
    const bioTemplate = `${cleanMember.name} is a ${cleanMember.title} in the Department of Computer Science and Engineering at The Ohio State University and a member of the Innovative Data Technologies (IDT) Lab.`;
    const advisorText = cleanMember.advisor
      ? ` ${cleanMember.name} works under the guidance of ${cleanMember.advisor}.`
      : "";
    cleanMember.bio = bioTemplate + advisorText;
  }

  // Convert to YAML
  const yamlContent = yaml.dump(cleanMember, {
    noRefs: true,
    sortKeys: true,
    lineWidth: 100,
  });

  // Write to file
  const outputPath = path.join(OUTPUT_DIR, `${slug}.yaml`);
  fs.writeFileSync(outputPath, yamlContent, "utf8");

  console.log(`Created ${outputPath}`);
});

console.log(
  `\nFinished creating ${members.length} member YAML files in ${OUTPUT_DIR}`
);
