import { Project, ProjectId } from "../types";

const projects: Project[] = [
  
  {
    id: "aidrin",
    name: "AIDRIN",
    title: "AI Data Readiness Inpector",
    shortDescription:
      "AIDRIN is a framework designed accross centralized and decentralized (eg: federated learning) workflows to assess the readiness of data for AI applications, ensuring that datasets meet quality and compliance standards.",
    link: "/research/projects/aidrin",
    isFeatured: true,
    isOurs: true,
    researchStatus: "r&d",
    // sourceLink: "https://github.com/idtlab/aidrin",
    status: "active",
    type: "funded",
  },
  {
    id: "pdc",
    name: "PDC",
    title: "Proactive Data Containers",
    shortDescription:
      "Formulation of object-oriented PDCs and their mapping in different levels of the exascale storage hierarchy; Efficient strategies for moving data in deep storage hierarchies using PDCs. Techniques for transforming and reorganizing data based on application requirements. Novel analysis paradigms for enabling data transformations and user-defined analysis on data in PDCs",
    link: "https://sdm.lbl.gov/pdc/",
    sourceLink: "https://github.com/hpc-io/pdc",
    isFeatured: true,
    isOurs: true,
    researchStatus: "r&d",
    status: "active",
    type: "funded",
  },
  {
    id: "h5bench",
    name: "h5bench",
    title: "h5bench: a Parallel I/O Benchmark Suite for HDF5",
    shortDescription:
      "h5bench is a suite of parallel I/O benchmarks or kernels representing I/O patterns that are commonly used in HDF5 applications on high performance computing systems. H5bench measures I/O performance from various aspects, including the I/O overhead, observed I/O rate, etc. ",
    link: "https://h5bench.readthedocs.io/en/latest/",
    sourceLink: "https://github.com/hpc-io/h5bench",
    isFeatured: false,
    isOurs: true,
    researchStatus: "r&d",
    status: "active",
    type: "funded",
  },
  {
    id:"drishti",
    name: "Drishti",
    title: "Drishti: I/O Insights for All",
    shortDescription:
      "Dristhi is a novel interactive web-based analysis framework to visualize I/O traces, highlight bottlenecks, and help understand the I/O behavior of scientific applications.",
    link: "https://drishti-io.readthedocs.io/en/latest/",
    sourceLink: "https://github.com/hpc-io/drishti",
    isFeatured: true,
    isOurs: true,
    researchStatus: "r&d",
    status: "active",
    type: "funded",
  },
  {
    id: "s2d2",
    name: "S2-D2",
    title: "S2-D2: Securing Self-describing Data, Formats, and Libraries",
    shortDescription:
      "This project will apply comprehensive testing, evaluation, issue identification, hardening, and validation to correct security deficiencies in self-describing file formats and libraries. The specific R&D tasks include: (1) assessing and fixing file format vulnerabilities, (2) protecting data access libraries, (3) exploring security solutions for metadata and data, and (4) constructing a security framework, called S2-D2.",
    link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2419722",
    // sourceLink: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2419722",
    isFeatured: true,
    isOurs: true,
    researchStatus: "r&d",
    status: "active",
    type: "funded",
  },
  {
    id: "fadas",
    name: "",
    title: "A Full-stack Approach to Declarative Analytics at Scale",
    shortDescription:
    "The project investigates full-stack implementation methodologies for expressive programming systems that effectively bridge the gap between human-level specification and high-performance implementation of complex reasoning tasks at scale.",
    link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2316158",
    isFeatured: false,
    isOurs: false,
    researchStatus: "r&d",
    status: "active",
    type: "funded",
  },
  {
    id: "storehub",
    name: "StoreHub",
    title: "StoreHub: A Community Infrastructure for Shaping the Future of Data Storage Research",
    shortDescription:
      "This project focuses on planning activities associated with the realization of the StoreHub research infrastructure, which aims to support next-generation data storage research. The infrastructure is envisioned to provide a secure, flexible, and collaborative platform for researchers to design, test, and improve data storage technologies.",
    link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2346505",
    isFeatured: false,
    isOurs: true,
    researchStatus: "r&d",
    status: "active",
    type: "funded",
  },
  {
    id:"fastensor",
    name: "FasTensor",
    title: "Fastensor: Big Data Analytics on Arrays",
    shortDescription:
      "FasTensor, formerly known as ArrayUDF, is a generic parallel programming model for big data analyses with any user-defined functions (UDF). These functions may express data analysis operations from traditional database (DB) systems to advanced machine learning pipelines.",
    link: "https://sdm.lbl.gov/fastensor/",
    sourceLink: "https://sdm.lbl.gov/fastensor/",
    isFeatured: false,
    isOurs: true,
    researchStatus: "r&d",
    status: "active",
    type: "funded",
  }




  
];

export default projects;

export function getProjectById(id: ProjectId): Project | undefined {
  return projects.find((project) => project.id === id);
}
