import { Member } from "../types";

export default [
  {
    name: "Kaveen Hiniduma",
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
  title: "PhD Student",
  advisor: "Prof. Suren Byna",
  image: require("@site/static/img/members/saha.jpg").default,
  links: {
    email: "saha.167@osu.edu",
},
type: "researcher",
},
{
  name: "Aparajit Talukdar",
  title: "PhD Student",
  advisor: "Prof. Suren Byna",
  image: require("@site/static/img/members/talukdar.jpg").default,
  links: {
    email: "talukdar.15@osu.edu",
  },
  type: "researcher",
},
{
  name: "Noah Lewis",
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
  title: "PhD Student",
  advisor: "Prof. Suren Byna",
  image: require("@site/static/img/members/ilyas.jpg").default,
  links: {
    email: "ilyas.22@osu.edu",
  },
  type: "researcher",
},
{
  name: "Dylan Ryan",
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
  title: "Senior Computer Scientist",
  affiliation: "Argonne National Laboratory",
  image: require("@site/static/img/members/madduri.jpg").default,
  type:"external"
},
{
  name:"Jean Luca Bez",
  title: "Career-Track Research Scientist",
  affiliation: "Lawrence Berkeley National Laboratory",
  image: require("@site/static/img/members/bez.jpg").default,
  type: "external",

},
{
  name: "Wei Zhang",
  title: "Postdoctoral Researcher",
  affiliation: "Lawrence Berkeley National Laboratory",
  image: require("@site/static/img/members/zhang.jpg").default,
  type: "external",
},
{
  name: "Houjun Tang",
  title: "Computer Research Scientist",
  affiliation: "Lawrence Berkeley National Laboratory",
  image: require("@site/static/img/members/tang.jpg").default,
  type: "external",
}

  
] as Member[];
