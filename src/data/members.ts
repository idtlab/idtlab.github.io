import { Member } from "../types";

export default [

  {
    name: "Dr. Raqib Islam",
    lastName: "Islam",
    title: "Researcher",
    advisor: "Prof. Suren Byna",
    image: require("@site/static/img/members/islam.jpg").default,
    links: {
      email: "islam.301@osu.edu",
      linkedin: "https://www.linkedin.com/in/aa-raqibul-islam/",
      scholar: "https://scholar.google.com/citations?hl=en&user=H8zsAR8AAAAJ&view_op=list_works&sortby=pubdate",
      website: "https://biqar.github.io",
      github: "https://github.com/biqar"
    },
    researchInterests: ["Data Management", "Data Readiness for AI"],
    type: "staff-researcher",
  },

  {
    name: "Kaveen Hiniduma",
    lastName: "Hiniduma",
    title: "PhD Student",
    advisor: "Prof. Suren Byna",
    image: require("@site/static/img/members/hiniduma.jpg").default,
    links: {
      email: "hiniduma.1@osu.edu",
      linkedin: "https://www.linkedin.com/in/kaveen-hiniduma-79b822174/",
      scholar: "https://scholar.google.com/citations?user=Q5TgY0cAAAAJ&hl=en"
    },
    researchInterests: ["Data Management", "Data Readiness for AI"],
    type: "researcher",
  },
  {
    name: "Hyunju Oh",
    lastName: "Oh",
    title: "PhD Student",
    advisor: "Prof. Suren Byna",
    image: require("@site/static/img/members/oh.jpg").default,
    links: {
      email: "oh.693@osu.edu"
    },
    type: "researcher",
  },
  {
    name:"Arta Salimiparsa",
    lastName: "Salimiparsa",
    title: "PhD Student",
    advisor: "Prof. Suren Byna",
    image: require("@site/static/img/members/salimiparsa.jpg").default,
    links: {
      email: "salimiparsa.1@osu.edu"
  },
  type: "researcher",
},
{
  name:"Suben Kumer Saha",
  lastName: "Saha",
  title: "Master's Student",
  advisor: "Prof. Suren Byna",
  image: require("@site/static/img/members/saha.jpg").default,
  links: {
    email: "saha.167@osu.edu",
    website:"https://subenksaha.github.io/"
},
type: "previous",
},
{
  name: "Aparajit Talukdar",
  lastName: "Talukdar",
  title: "PhD Student",
  advisor: "Prof. Suren Byna",
  image: require("@site/static/img/members/default.jpg").default,
  links: {
    email: "talukdar.15@osu.edu",
  },
  type: "researcher",
},
{
  name: "Noah Lewis",
  lastName: "Lewis",
  title: "PhD Student",
  advisor: "Prof. Suren Byna",
  image: require("@site/static/img/members/lewis.jpg").default,
  links: {
    email: "lewis.3621@osu.edu",
  },
  type: "researcher",
},
{
  name:"Keegan Sanchez",
  lastName: "Sanchez",
  title: "PhD Student",
  advisor: "Prof. Suren Byna",
  image: require("@site/static/img/members/sanchez.jpg").default,
  links: {
    email: "sanchez.1413@osu.edu",
  },
  type: "researcher",
},
{
  name:"Ramlah Ilyas",
  lastName: "Ilyas",
  title: "PhD Student",
  advisor: "Prof. Suren Byna",
  image: require("@site/static/img/members/ilyas.jpg").default,
  links: {
    email: "ilyas.22@osu.edu",
  },
  type: "researcher",
},
{
  name: "Olivia Maynard",
  lastName: "Maynard",
  title: "Master's Student",
  advisor: "Prof. Suren Byna",
  image: require("@site/static/img/members/maynard.jpg").default,
  links: {
    email: "maynard.341@osu.edu",
  },
  type: "researcher",
},
{
  name: "Dylan Ryan",
  lastName: "Ryan",
  title: "Undergraduate Student",
  advisor: "Prof. Suren Byna",
  image: require("@site/static/img/members/ryan.jpg").default,
  links: {
    email: "ryan.1989@osu.edu",
  },
  type: "researcher",
},
{
  name: "Ravi K Madduri",
  lastName: "Madduri",
  title: "Senior Computer Scientist",
  affiliation: "Argonne National Laboratory",
  image: require("@site/static/img/members/madduri.jpg").default,
  type:"external",
  links: {
    website: "https://www.anl.gov/profile/ravi-k-madduri"
  }
},
{
  name:"Jean Luca Bez",
  lastName: "Bez",
  title: "Career-Track Research Scientist",
  affiliation: "Lawrence Berkeley National Laboratory",
  image: require("@site/static/img/members/bez.jpg").default,
  type: "external",
  links:{
    website: "https://jeanlucabez.io/"
  }

},
{
  name: "Wei Zhang",
  title: "Postdoctoral Researcher",
  image: require("@site/static/img/members/zhang.jpg").default,
  type: "previous",
  links: {
    website: "https://tacc.utexas.edu/about/staff-directory/wei-zhang/"
  },
  currentAffiliation: "Texas Advanced Computing Center (TACC)"
},
{
  name: "Houjun Tang",
  lastName: "Tang",
  title: "Computer Research Scientist",
  affiliation: "Lawrence Berkeley National Laboratory",
  image: require("@site/static/img/members/tang.jpg").default,
  type: "external",
  links: {
    website: "https://profiles.lbl.gov/22241-houjun-tang"
  }
}

  
] as Member[];
