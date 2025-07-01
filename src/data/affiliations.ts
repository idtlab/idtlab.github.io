import { Affiliation } from "../types";

export default [
  {
    name: "Illinois Institute of Technology",
    type: "university",
    url: "https://www.iit.edu/",
    image: require("@site/static/img/affiliations/iit.png").default,
  },
  {
    name: "Argonne National Laboratory",
    type: "laboratory",
    url: "https://www.anl.gov/",
    image: require("@site/static/img/affiliations/argonne.png").default,
  },
  {
    name: "Lawrence Berkeley National Laboratory",
    type: "laboratory",
    url: "https://www.lbl.gov/",
    image: require("@site/static/img/affiliations/lbl.jpg").default,
  },
  {
    name: "Lawrence Livermore National Laboratory",
    type: "laboratory",
    url: "https://www.llnl.gov/",
    image: require("@site/static/img/affiliations/llnl.png").default,
  },
  {
    name: "The HDF Group",
    type: "company",
    url: "https://www.hdfgroup.org/",
    image: require("@site/static/img/affiliations/hdfgroup.jpg").default,
  },
  {
    name: "National Science Foundation",
    type: "funding",
    url: "https://www.nsf.gov/",
    image: require("@site/static/img/affiliations/nsf.png").default,
  },
  {
    name: "Department of Energy",
    type: "funding",
    url: "https://www.energy.gov/",
    image: require("@site/static/img/affiliations/doe.png").default,
  },
  {
    name: "Hewlett Packard Enterprise",
    type: "company",
    url: "https://www.hpe.com/",
    image: require("@site/static/img/affiliations/hpe.png").default,
  },
  {
    name:"NVIDIA",
    type: "company",
    url: "https://www.nvidia.com/",
    image: require("@site/static/img/affiliations/nvidia.png").default,
  },
  {
    name: "National Energy Research Scientific Computing Center (NERSC)",
    type: "laboratory",
    url: "https://www.nersc.gov/",
    image: require("@site/static/img/affiliations/nersc.jpg").default,
  }
  
  
] as Affiliation[];
