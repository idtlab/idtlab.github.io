import { Member } from "../types";

export default [
  {
    name: "Dr. Suren Byna",
    title: "Professor",
    bio: "Prof. Byna is the director of the Innovative Data Technologies (IDT) Lab at OSU. He is also a Visiting Faculty Scientist in the Scientific Data Division at Lawrence Berkeley National Lab. His research interests are in scalable scientific data management, particularly focusing on optimizing parallel storage and I/O performance and on developing systems for managing scientific data. He successfully led the Exascale Computing Project (ECP) funded ExaHDF5 and ExaIO projects. He is currently leading an object-centric data management system (Proactive Data Containers - PDC) project, and experimental and observational data management (EOD-HDF5) projects, funded by Department of Energy (DOE).  He also leads NSF funded S2-D2 (Securing Self-describing Data formats) project.",
    image: require("@site/static/img/faculty/byna.jpg").default,
    links: {
      email: "byna.1@osu.edu",
      scholar: "https://scholar.google.com/citations?user=EnK8668AAAAJ",
      website: "https://sbyna.github.io/",
    },
  }
] as Member[];
