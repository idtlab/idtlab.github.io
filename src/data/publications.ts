import { ProjectId, Publication, PublicationTag } from "../types";

const publications: Publication[] = [
  {
    authors: [
      "N. Lewis",
      "J. L. Bez",
      "S. Byna"
    ],
    title:
      "I/O in Machine Learning Applications on HPC Systems: A 360-degree Survey",
    venue:
      "ACM Comput. Surv. 57, 10, Article 256, 42 pages",
    type: "Journal",
    date: "May, 2025",
    tags: [],
    links: {doi: "https://doi.org/10.1145/3722215"},
  },
  {
    authors: [
      "K. Hiniduma",
      "S. Byna",
      "J. L. Bez",
      
    ],
    title:
      "Data Readiness for AI: A 360-Degree Survey",
    venue:
      "ACM Comput. Surv. 57, 9, Article 219, 39 pages",
    type: "Journal",
    date: "April, 2025",
    tags: [
      "AIDRIN", "DRAI"
    ],
    links: {doi: "https://doi.org/10.1145/3722214"},
  },
 {
  authors: [
    "C. Egersdoerfer",
    "A. Sareen",
    "J. L. Bez",
    "S. Byna",
    "D. Xu",
    "D. Dai"],
  title:
    "IOAgent: Democratizing Trustworthy HPC I/O Performance Diagnosis Capability via LLMs",
  venue:
    "39th IEEE International Parallel & Distributed Processing Symposium",
  type: "Conference",
  date: "June 2025",
  tags: [
    
  ],
  links: {paper: "https://drive.google.com/file/d/1UBqxqErz3mc0Cgvte-aBHDS7U4B5iMMw/view"}
 },
 {
  authors: [
    "S. Breitenfeld",
    "H. Tang",
    "H. Zheng",
    "J. Henderson",
    "S. Byna",
  ],
  title:
    "HDF5 in the exascale era: Delivering efficient and scalable parallel I/O for exascale applications",
  venue:
    "The International Journal of High Performance Computing Applications (IJHPCA)",
  type: "Journal",
  date: "October 2024",
  tags: [
    "HDF5"
  ],
  links: {doi: "https://journals.sagepub.com/doi/10.1177/10943420241288244"},
 },
 {
  "authors": [
    "B. Dong", "A. Nayak", "V. R. Tribaldos",
    "K. Wu", "J. Ajo-Franklin", "Q. Zhang", "F. Guo",
    "S. Byna", "P. Dobson", "A. Sim"
  ],
  "title": "TensorSearch: Parallel Similarity Search on Tensors",
  "venue": "2024 IEEE International Conference on Big Data (BigData)",
  "type": "Conference",
  "date": "2024",
  "tags": ["Tensor", "Parallelism"],
  "links": {"preprint": "https://crd.lbl.gov/assets/Uploads/TensorSearch-final-version-paper.pdf"}
},
{
  "authors": [
    "R. Jain", "H. Tang", "A. Dhruv", "S. Byna"
  ],
  "title": "Enabling Data Reduction for Flash-X Simulations",
  "venue": "The 10th International Workshop on Data Analysis and Reduction for Big Scientific Data, SC24 Workshops",
  "type": "Workshop",
  "date": "2024",
  "tags": ["Data-Reduction"],
  "links": {"ieee": "https://ieeexplore.ieee.org/abstract/document/10820765"}
},
{
  "authors": [
    "C. Wang", "H. Tang", "J. L. Bez", "S. Byna"
  ],
  "title": "Object-Centric Data Management in HPC Workflows-A Case Study",
  "venue": "2024 IEEE International Conference on Cluster Computing Workshops (CLUSTER Workshops)",
  "type": "Workshop",
  "date": "2024",
  "tags": [],
  "links": {"preprint": "[Preprint PDF]"}
},
{
  "authors": [
    "K. Sanchez", "A. Gavin", "S. Byna", "K. Wu", "X. Zhang"
  ],
  "title": "A High-Performance Collective I/O Framework Leveraging Node-Local Persistent Memory",
  "venue": "30th International European Conference on Parallel and Distributed Computing (Euro-Par) 2024",
  "type": "Conference",
  "date": "2024",
  "tags": ["I/O", "Persistent Memory"],
  "links": {}
},
{
  authors: [
    "K. Hiniduma",
    "S. Byna",
    "J. L. Bez",
    "R. Madduri"
  ],
  title:
    "AI Data Readiness Inspector (AIDRIN) for Quantitative Assessment of Data Readiness for AI",
  venue:
    "SSDBM '24: Proceedings of the 36th International Conference on Scientific and Statistical Database Management. Article No.: 7, Pages 1 - 12",
  type: "Conference",
  date: "August, 2024",
  tags: [
    "AIDRIN", "DRAI"
  ],
  links: {doi: "https://doi.org/10.1145/3676288.3676296"},
},
{
  "authors": [
    "R. Han", "M. Zheng", "S. Byna", "H. Tang", "B. Dong",
    "D. Dai", "Y. Chen", "D. Kim", "J. Hassoun", "D.Thorsley", "M. Wolf"
  ],
  "title": "PROV-IO+: A Cross-Platform Provenance Framework for Scientific Data on HPC Systems",
  "venue": "IEEE Transactions on Parallel and Distributed Systems (TPDS)",
  "type": "Journal",
  "date": "2024",
  "tags": ["HPC"],
  "links": {}
},
{
  "authors": [
    "J. L. Bez", "H. Tang", "S. Breitenfeld", "H. Zheng",
    "W. Liao", "K. Hou", "Z. Huang", "S. Byna"
  ],
  "title": "h5bench: Exploring HDF5 Access Patterns Performance in Pre-Exascale Platforms",
  "venue": "Concurrency and Computation: Practice and Experience (CCPE)",
  "type": "Journal",
  "date": "2024",
  "tags": ["HDF5"],
  "links": {}
},
{
  "authors": [
    "J. L. Bez", "H. Ather", "Y. Xia", "S. Byna"
  ],
  "title": "Drilling Down I/O Bottlenecks with Cross-layer I/O Profile Exploration",
  "venue": "IPDPS 2024",
  "type": "Conference",
  "date": "2024",
  "tags": ["I/O Bottleneck"],
  "links": {}
},
{
  "authors": [
    "N. Rajesh", "K. Bateman", "S. Byna", "J. L. Bez",
    "A. Kougkas", "X. Sun"
  ],
  "title": "TunIO: An AI-powered Framework for Optimizing HPC I/O",
  "venue": "IPDPS 2024",
  "type": "Conference",
  "date": "2024",
  "tags": ["HPC", "I/O Optimization"],
  "links": {}
},
{
  authors: [
    "H. Oh",
    "W. Zhang",
    "C. D. Rickett",
    "S. R. Sukumar",
    "S. Byna"
  ],
  title:
    "Evaluating Performance Trade-offs of Caching Strategies for AI-Powered Querying Systems",
  venue:
    "2024 IEEE International Conference on Big Data (BigData)",
  type: "Conference",
  date: "2024",
  tags: [
  
  ],
  links: {doi: "https://doi.org/10.1109/BigData62323.2024.10825819"},
},
{
  "authors": [
    "D. K. Sung", "Y. Son", "A. Sim", "J. Wu", "S. Byna",
    "H. Tang", "H. Eom", "S. Kim"
  ],
  "title": "A2FL: Autonomous and Adaptive File Layout in HPC through Real-time Access Pattern",
  "venue": "IPDPS 2024",
  "type": "Conference",
  "date": "2024",
  "tags": ["HPC"],
  "links": {}
},
{
  "authors": [
    "W. Zhang", "H. Tang", "S. Byna"
  ],
  "title": "IDIOMS: Index-powered Distributed Object-centric Metadata Search for Scientific Data Management",
  "venue": "CCGrid 2024",
  "type": "Conference",
  "date": "2024",
  "tags": ["Metadata Management"],
  "links": {}
},
{
  "authors": [
    "B. Dong", "J. Wu", "S. Byna"
  ],
  "title": "The Art of Sparsity: Mastering High-Dimensional Tensor Storage",
  "venue": "ESSA 2024 in conjunction with IPDPS 2024",
  "type": "Workshop",
  "date": "2024",
  "tags": ["Tensor", "Storage", ],
  "links": {"preprint": "https://sbyna.github.io/research/papers/2024/202405-ESSA-art-of-sparsity.pdf"}
}
  


  
];

export default publications;

export function getPublicationsByAuthorShortName(
  authorShortName: string
): Publication[] | undefined {
  return publications.filter((publication) =>
    publication.authors.some((author) => author.includes(authorShortName))
  );
}

export function getPublicationsByTag(
  tag: PublicationTag
): Publication[] | undefined {
  return publications.filter((publication) => publication.tags.includes(tag));
}
