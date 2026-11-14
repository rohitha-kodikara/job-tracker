export const applications = [
  {
    id: 1,
    company: "Northwind",
    role: "Frontend Developer",
    workType: "Remote",
    status: "Applied",
  },
  {
    id: 2,
    company: "Contoso",
    role: "React Engineer",
    workType: "Hybrid",
    status: "Interviewing",
  },
  {
    id: 3,
    company: "Fabrikam",
    role: "UI Developer",
    workType: "Onsite",
    status: "Offer",
  },
  {
    id: 4,
    company: "Tailspin",
    role: "Web Developer",
    workType: "Remote",
    status: "Rejected",
  },
  {
    id: 5,
    company: "Adventure Works",
    role: "Full Stack Developer",
    workType: "Hybrid",
    status: "Applied",
  },
];

export const interviews = [
  {
    id: 1,
    company: "Contoso",
    role: "React Engineer",
    date: "2026-11-20",
    type: "Technical",
    done: false,
  },
  {
    id: 2,
    company: "Fabrikam",
    role: "UI Developer",
    date: "2026-11-12",
    type: "HR",
    done: true,
  },
  {
    id: 3,
    company: "Contoso",
    role: "React Engineer",
    date: "2026-11-25",
    type: "Final",
    done: false,
  },
];

export const statuses = ["All", "Applied", "Interviewing", "Offer", "Rejected"];
export const workTypes = ["Remote", "Hybrid", "Onsite", "All Work Types"];
export const interviewTypes = ["Phone", "Technical", "HR", "Final"];

export const statusStyles = {
  Applied: "bg-sky-100 text-sky-700 ring-sky-200",
  Interviewing: "bg-amber-100 text-amber-700 ring-amber-200",
  Offer: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  Rejected: "bg-red-100 text-red-700 ring-red-200",
};
