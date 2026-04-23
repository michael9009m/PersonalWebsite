export const data = {
  name: "Michael Martinez",
  title: "Software Engineer & Solutions Engineer",
  location: "Yorba Linda, CA",
  email: "michaelmartinez9009@gmail.com",
  linkedin: "https://linkedin.com/in/michael-martinez-cs",
  github: "https://github.com/michael9009m",

  about: "Recent CS graduate from California Baptist University with hands-on engineering experience at Cisco, NeuroLeap, and IBM. I build production systems across cloud infrastructure, REST APIs, and AI-powered applications and translate that technical depth into clear business value for customers and stakeholders.",

  experience: [
    {
      company: "Cisco Systems Inc.",
      role: "Software Engineer Intern",
      location: "San Jose, CA",
      dates: "05/2024 – 09/2024",
      bullets: [
        "Built and iterated on a proof-of-concept internal workflow tool that integrated with backend REST services to surface network telemetry insights for operations teams.",
        "Documented research findings, API behaviors, and implementation decisions in shared team wikis, and presented progress to senior engineers during sprint reviews.",
        "Designed and implemented optimization to the data retrieval layer, reducing response time on dashboard queries.",
      ],
    },
    {
      company: "NeuroLeap",
      role: "Web Development Software Engineer Intern",
      location: "San Jose, CA",
      dates: "03/2023 – 09/2023",
      bullets: [
        "Partnered with clinical and technical stakeholders to understand their data reporting needs, then designed and delivered a REST API integrated React dashboard that reduced manual reporting time by 28%.",
        "Presented solution progress and technical tradeoffs to the team throughout delivery, translating engineering decisions into clear business outcomes.",
      ],
    },
    {
      company: "IBM",
      role: "Software Engineering Intern",
      location: "San Jose, CA",
      dates: "06/2022 – 08/2022",
      bullets: [
        "Collaborated cross-functionally with teams across the organization to understand their feature requirements, then implemented new REST endpoints and database logic that enabled new internal workflows.",
        "Communicated implementation decisions and technical findings to senior engineers and stakeholders, ensuring alignment on data handling standards.",
      ],
    },
    {
      company: "Best Buy",
      role: "Computing Sales Associate",
      location: "Yorba Linda, CA",
      dates: "06/2025 – Present",
      bullets: [
        "Ranked #1 consistently in the department, leading in revenue, attachment rate, and close rate.",
        "Conduct technical discovery with customers to understand their specific requirements before recommending tailored computing solutions.",
        "Communicate complex technical product specifications in clear, accessible terms helping customers make confident, informed purchasing decisions.",
      ],
    },
  ],

  projects: [
    {
      name: "AWS Serverless Stock Data Pipeline",
      tech: ["Python", "AWS Lambda", "Terraform", "EventBridge", "S3"],
      description: "Architected an event-driven serverless pipeline tracking daily top-moving stocks across a 6-ticker watchlist using modular Terraform IaC, displayed on a public color-coded S3 static website.",
      bullets: [
        "Separated ingestion and retrieval logic across two Lambda functions with EventBridge scheduled trigger and API Gateway REST endpoint.",
        "Secured API credentials via AWS Secrets Manager at runtime with least-privilege IAM roles.",
      ],
      live: "#",
      github: "https://github.com/michael9009m",
    },
    {
      name: "Smart Foods AI Nutritionist",
      tech: ["Python", "PostgreSQL", "OpenAI API", "FastAPI"],
      description: "Team lead for Senior Capstone Project managing backend development for an AI-powered nutrition application that shipped a production MVP to 22 testers processing 200+ meal logs at ~2s average response times.",
      bullets: [
        "Integrated OpenAI API with structured prompt engineering and JSON schema validation to power AI-driven nutritional analysis.",
        "Led backend development for meal logging, authentication, and PostgreSQL data persistence.",
      ],
      live: null,
      github: "https://github.com/michael9009m",
    },
    {
      name: "Prometheus – Personal AI Fitness Trainer",
      tech: ["Python", "OpenAI API", "FastAPI", "PostgreSQL"],
      description: "Led a team as part of junior capstone to build a personalized AI fitness trainer powered by the OpenAI API, generating custom workout plans and tracking user progress over time.",
      bullets: [
        "Integrated OpenAI API with structured prompt engineering to generate personalized workout and recovery plans based on user goals, fitness level, and history.",
        "Led team coordination, sprint planning, and end-to-end delivery from scoping through deployment.",
      ],
      live: null,
      github: "https://github.com/michael9009m",
    },
    {
      name: "Machine Learning Credit Card Fraud Detection",
      tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      description: "Built a fraud detection ML pipeline on 284,807 transactions achieving 99% fraud precision, 81% recall, and an F1 score of 0.91.",
      bullets: [
        "Applied SMOTE oversampling, threshold tuning, and stratified k-fold cross-validation to address severe class imbalance without data leakage.",
        "Achieved 99% fraud precision and 81% recall through systematic model evaluation and feature engineering.",
      ],
      live: null,
      github: "https://github.com/michael9009m",
    },
  ],

  skills: [
    { category: "Languages & Backend", items: ["Python", "JavaScript", "Java", "C++", "SQL", "FastAPI", "Node.js", "REST APIs"] },
    { category: "Cloud & Infrastructure", items: ["AWS Lambda", "EventBridge", "S3", "DynamoDB", "Secrets Manager", "Terraform"] },
    { category: "AI & Tools", items: ["OpenAI API", "Scikit-learn", "PyTorch", "React.js", "Git", "Postman", "Google Workspace"] },
  ],

  education: {
    school: "California Baptist University",
    degree: "B.S. Computer Science",
    location: "Riverside, CA",
    dates: "09/2021 – 12/2025",
    note: "Dean's Merit Scholarship Recipient (4 years)",
  },
};
