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
        "Architected an AWS Lambda function from scratch for Cisco's Customer Experience team, analyzing 36 sequential service calls and restructuring parallelizable operations to maximize efficiency.",
        "Used AWS CloudWatch and X-Ray to identify latency bottlenecks across calls executed thousands of times daily by Cisco customers, driving optimizations that delivered a 12% efficiency improvement directly impacting customer experience.",
        "Reduced cold start times by 24% by restructuring dependency loading to initialize heavy libraries only in functions that required them, lowering per-invocation overhead across the pipeline.",
      ],
    },
    {
      company: "NeuroLeap",
      role: "Software Engineer Intern",
      location: "San Jose, CA",
      dates: "03/2023 – 09/2023",
      bullets: [
        "Delivered a React dashboard integrated with a custom REST API that reduced manual clinical reporting time by 28%, built from requirements gathered directly with clinical and technical stakeholders.",
        "Translated engineering tradeoffs into clear business outcomes during stakeholder presentations, incorporating feedback iteratively to refine the final product before delivery.",
      ],
    },
    {
      company: "IBM",
      role: "Software Engineering Intern",
      location: "San Jose, CA",
      dates: "06/2022 – 08/2022",
      bullets: [
        "Implemented new REST endpoints and supporting database logic to enable internal workflows across 4 teams, translating cross-functional requirements into production-ready backend features.",
        "Presented implementation decisions and data handling standards to 5 senior engineers, maintaining alignment on solution design throughout the development lifecycle.",
      ],
    },
    {
      company: "Best Buy",
      role: "Computing Sales Associate",
      location: "Yorba Linda, CA",
      dates: "06/2025 – Present",
      bullets: [
        "Ranked #1 in a 16-person computing department, leading in revenue, attachment rate, and close rate.",
        "Conduct technical discovery with customers to understand their specific requirements, constraints, and use cases before recommending tailored computing solutions.",
        "Communicate complex technical product specifications in clear, accessible terms, helping customers at every level of technical familiarity make confident, informed purchasing decisions.",
      ],
    },
  ],

  projects: [
    {
      name: "AWS Serverless Stock Data Pipeline",
      tech: ["Python", "AWS Lambda", "Terraform", "EventBridge", "S3"],
      description: "Architected an event-driven serverless pipeline tracking daily top-moving stocks across a 6-ticker watchlist using modular Terraform IaC, displayed on a public color-coded S3 static website.",
      bullets: [
        "Separated ingestion and retrieval logic across two Lambda functions — EventBridge scheduled trigger for daily data collection and API Gateway REST endpoint for frontend consumption.",
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
        "Integrated OpenAI API with structured prompt engineering and JSON schema validation to power AI-driven nutritional analysis, handling edge cases such as ambiguous food descriptions.",
        "Led backend development for meal logging, authentication, and PostgreSQL data persistence, supporting cloud-synced user nutrition histories.",
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
      name: "Credit Card Fraud Detection",
      tech: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "Machine Learning"],
      description: "Built a fraud detection ML pipeline on 284,807 transactions, benchmarking 5 models across imbalanced and balanced distributions, achieving 100% fraud precision and 81% recall with a tuned shallow neural network (F1: 0.90).",
      bullets: [
        "Applied SMOTE oversampling, threshold tuning, and stratified k-fold cross-validation to address 0.172% class imbalance without data leakage.",
        "Benchmarked Logistic Regression, Random Forest, Gradient Boosting, SVM, and Neural Network models across both real-world and balanced distributions to identify the strongest performer.",
      ],
      live: null,
      github: "https://github.com/michael9009m",
    },
  ],

  skills: [
    { category: "Languages & Backend", items: ["Python", "JavaScript", "Java", "C++", "SQL", "FastAPI", "Node.js", "REST APIs"] },
    { category: "Cloud & Infrastructure", items: ["AWS Lambda", "EventBridge", "S3", "DynamoDB", "Secrets Manager", "Terraform"] },
    { category: "AI & Tools", items: ["OpenAI API", "Scikit-learn", "PyTorch", "TensorFlow", "React.js", "Git", "Postman", "Google Workspace"] },
  ],

  education: {
    school: "California Baptist University",
    degree: "B.S. Computer Science",
    location: "Riverside, CA",
    dates: "09/2021 – 12/2025",
    note: "Dean's Merit Scholarship Recipient (4 years)",
  },
};