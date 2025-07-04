import fs from "fs";

import publications from "../src/data/publications";

console.log("%d publications found", publications.length);

const publicationsJson = JSON.stringify(publications, null, 2);

fs.writeFileSync("publications.json", publicationsJson, "utf-8");

console.log("publications.json file created");
