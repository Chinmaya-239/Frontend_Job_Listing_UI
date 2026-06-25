export const JOBS = [
  { id: 1,  title: "Frontend Engineer",        company: "Acme Corp",       location: "Remote",     type: "Full-time",  salary: "₹12–18 LPA",  posted: "2025-06-20", tags: ["React", "CSS", "TypeScript"] },
  { id: 2,  title: "Backend Developer",         company: "Bright Solutions", location: "Bangalore",  type: "Full-time",  salary: "₹14–20 LPA",  posted: "2025-06-18", tags: ["Node.js", "PostgreSQL", "Docker"] },
  { id: 3,  title: "UI/UX Intern",              company: "Pixel Labs",       location: "Remote",     type: "Internship", salary: "₹15k/mo",     posted: "2025-06-22", tags: ["Figma", "Prototyping"] },
  { id: 4,  title: "React Developer",           company: "DevForge",         location: "Hyderabad",  type: "Full-time",  salary: "₹10–15 LPA",  posted: "2025-06-15", tags: ["React", "Redux", "GraphQL"] },
  { id: 5,  title: "Data Analyst Intern",       company: "Datamint",         location: "Mumbai",     type: "Internship", salary: "₹12k/mo",     posted: "2025-06-21", tags: ["Python", "SQL", "Excel"] },
  { id: 6,  title: "DevOps Engineer",           company: "CloudBase",        location: "Bangalore",  type: "Full-time",  salary: "₹18–26 LPA",  posted: "2025-06-10", tags: ["AWS", "Kubernetes", "CI/CD"] },
  { id: 7,  title: "Product Manager",           company: "LaunchPad",        location: "Delhi",      type: "Full-time",  salary: "₹20–30 LPA",  posted: "2025-06-17", tags: ["Roadmapping", "Agile", "Analytics"] },
  { id: 8,  title: "Mobile Developer",          company: "AppWorks",         location: "Remote",     type: "Contract",   salary: "₹80k/mo",     posted: "2025-06-19", tags: ["Flutter", "React Native"] },
  { id: 9,  title: "QA Engineer",               company: "TestPro",          location: "Pune",       type: "Full-time",  salary: "₹8–12 LPA",   posted: "2025-06-14", tags: ["Selenium", "Jest", "Cypress"] },
  { id: 10, title: "ML Engineer Intern",        company: "NeuralSpace",      location: "Bangalore",  type: "Internship", salary: "₹20k/mo",     posted: "2025-06-23", tags: ["Python", "PyTorch", "NLP"] },
  { id: 11, title: "Technical Writer",          company: "Docusign Inc",     location: "Remote",     type: "Part-time",  salary: "₹6–9 LPA",    posted: "2025-06-11", tags: ["Markdown", "API Docs", "Git"] },
  { id: 12, title: "Full Stack Developer",      company: "Horizon Tech",     location: "Chennai",    type: "Full-time",  salary: "₹12–18 LPA",  posted: "2025-06-16", tags: ["React", "Node.js", "MongoDB"] },
  { id: 13, title: "Cloud Architect",           company: "SkyScale",         location: "Hyderabad",  type: "Contract",   salary: "₹1.2L/mo",    posted: "2025-06-09", tags: ["AWS", "Azure", "Terraform"] },
  { id: 14, title: "iOS Developer",             company: "AppWorks",         location: "Mumbai",     type: "Full-time",  salary: "₹15–22 LPA",  posted: "2025-06-13", tags: ["Swift", "Xcode", "UIKit"] },
  { id: 15, title: "Design Systems Intern",     company: "Pixel Labs",       location: "Remote",     type: "Internship", salary: "₹15k/mo",     posted: "2025-06-24", tags: ["Figma", "Storybook", "CSS"] },
  { id: 16, title: "Security Engineer",         company: "CipherNet",        location: "Delhi",      type: "Full-time",  salary: "₹20–28 LPA",  posted: "2025-06-08", tags: ["Penetration Testing", "SIEM", "Python"] },
  { id: 17, title: "Android Developer",         company: "MobileCraft",      location: "Bangalore",  type: "Full-time",  salary: "₹12–17 LPA",  posted: "2025-06-12", tags: ["Kotlin", "Jetpack Compose"] },
  { id: 18, title: "Data Engineer",             company: "FlowData",         location: "Hyderabad",  type: "Full-time",  salary: "₹16–24 LPA",  posted: "2025-06-07", tags: ["Spark", "Kafka", "Airflow"] },
  { id: 19, title: "Scrum Master",              company: "AgileEdge",        location: "Pune",       type: "Part-time",  salary: "₹8–12 LPA",   posted: "2025-06-06", tags: ["Scrum", "JIRA", "Confluence"] },
  { id: 20, title: "Site Reliability Engineer", company: "InfraCore",        location: "Chennai",    type: "Full-time",  salary: "₹22–32 LPA",  posted: "2025-06-05", tags: ["SRE", "Go", "Prometheus"] },
];

export const LOCATIONS = [...new Set(JOBS.map(j => j.location))].sort();
export const JOB_TYPES = ["Full-time", "Part-time", "Internship", "Contract"];
