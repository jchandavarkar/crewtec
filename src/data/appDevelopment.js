export const appMeta = {
  name: 'Application Development',
  tagline: 'We engineer software that scales with your business — from MVP to enterprise platform.',
  description:
    'Crewtec\'s Application Development practice delivers end-to-end software solutions for enterprises and high-growth startups. From custom web applications and mobile apps to API integrations, DevOps pipelines, and ongoing maintenance, we build systems that are robust, secure, and ready to scale. Our cross-functional teams in Bangalore bring deep domain expertise across fintech, logistics, healthcare, and B2B SaaS.',
  color: 'indigo',
  icon: '⚡',
};

export const appServices = [
  {
    id: 'web-applications',
    number: '01',
    icon: '🖥️',
    color: 'indigo',
    name: 'Web Application Development',
    shortDesc:
      'We build custom web portals, SaaS platforms, and internal dashboards engineered for performance, security, and enterprise scale.',
    fullDesc:
      'From complex multi-tenant SaaS platforms to internal operations dashboards, Crewtec delivers web applications that are architected for growth. We use modern frameworks, cloud-native infrastructure, and battle-tested engineering practices to ensure your application performs reliably at every stage — from pilot to full enterprise rollout.',
    features: [
      'Multi-tenant SaaS platform architecture and development',
      'Role-based access control (RBAC) and SSO integration',
      'Real-time data dashboards with live WebSocket feeds',
      'Progressive Web App (PWA) capabilities for offline use',
      'Scalable microservices and serverless backend architectures',
      'Third-party API and ERP/CRM integration layer',
    ],
    process: [
      {
        title: 'Requirements & Architecture',
        desc: 'Structured discovery sessions to define functional and non-functional requirements, followed by system design and technology stack selection.',
      },
      {
        title: 'UI/UX Design',
        desc: 'Wireframes, component library setup, and high-fidelity prototypes validated with real users before development begins.',
      },
      {
        title: 'Agile Development',
        desc: 'Two-week sprint cycles with working software demos at each milestone, keeping you informed and in control throughout the build.',
      },
      {
        title: 'QA & Security Review',
        desc: 'Functional, regression, and security testing across all modules, with penetration testing and OWASP compliance checks before go-live.',
      },
      {
        title: 'Deployment & Handover',
        desc: 'Production deployment on your preferred cloud, full documentation handover, and knowledge transfer to your internal team.',
      },
    ],
    tech: [
      { name: 'React / Next.js', domain: 'Frontend framework', type: 'framework' },
      { name: 'Node.js / NestJS', domain: 'Backend API development', type: 'runtime' },
      { name: 'PostgreSQL / MongoDB', domain: 'Database layer', type: 'database' },
      { name: 'AWS / GCP', domain: 'Cloud infrastructure', type: 'cloud' },
    ],
    useCases: [
      'Customer-facing portals for BFSI, healthcare, and logistics enterprises',
      'Internal operations and workforce management dashboards',
      'Multi-tenant SaaS products for B2B markets',
      'Data analytics and reporting platforms for C-suite visibility',
    ],
    metaDesc:
      'Crewtec develops custom web applications, SaaS platforms, and enterprise dashboards in Bangalore — scalable architecture, modern frameworks, and rigorous QA at every stage.',
    results: [
      { value: '99.9%', label: 'Uptime SLA maintained across production applications' },
      { value: '40%', label: 'Average reduction in manual operational effort post-launch' },
      { value: '6 weeks', label: 'Typical MVP delivery timeline for standard web apps' },
    ],
  },

  {
    id: 'mobile-apps',
    number: '02',
    icon: '📱',
    color: 'indigo',
    name: 'Mobile App Development',
    shortDesc:
      'We develop native-quality iOS and Android applications using React Native and Flutter, delivering a single codebase without compromising user experience.',
    fullDesc:
      'Crewtec builds mobile applications that combine the speed of cross-platform development with the polish of native apps. Whether you need a consumer-facing product on the App Store and Play Store, or an enterprise mobility solution for field teams, we handle design, development, backend integration, and ongoing app maintenance from our Bangalore development centre.',
    features: [
      'Cross-platform development with React Native and Flutter',
      'Native module integration for device hardware features',
      'Offline-first architecture with local data sync',
      'Push notifications, deep linking, and in-app messaging',
      'App Store and Google Play submission and compliance management',
      'Backend-for-frontend (BFF) API layer for mobile-optimised performance',
    ],
    process: [
      {
        title: 'Discovery & Platform Strategy',
        desc: 'Defining target platforms, user personas, offline requirements, and deciding between cross-platform and native approaches for your use case.',
      },
      {
        title: 'UX Design & Prototyping',
        desc: 'Mobile-first wireframes and interactive prototypes tested on real devices before a single component is built.',
      },
      {
        title: 'Iterative Development',
        desc: 'Fortnightly builds delivered to TestFlight and internal testing tracks so stakeholders see real progress at every sprint.',
      },
      {
        title: 'Device & OS Testing',
        desc: 'Testing across iOS and Android device matrix covering multiple OS versions, screen sizes, and network conditions including 2G/3G environments.',
      },
      {
        title: 'Launch & Store Submission',
        desc: 'Managed App Store and Play Store submission, metadata optimisation (ASO), and post-launch monitoring for crash rates and performance.',
      },
    ],
    tech: [
      { name: 'React Native', domain: 'Cross-platform mobile', type: 'framework' },
      { name: 'Flutter / Dart', domain: 'Cross-platform mobile', type: 'framework' },
      { name: 'Firebase', domain: 'Auth, notifications, analytics', type: 'platform' },
      { name: 'Fastlane', domain: 'CI/CD for mobile builds', type: 'devops' },
    ],
    useCases: [
      'Field service and workforce mobility apps for enterprise operations teams',
      'Consumer fintech apps with UPI integration and RBI compliance requirements',
      'Healthcare patient engagement and appointment management applications',
      'Retail and loyalty programme apps with offline POS capabilities',
    ],
    metaDesc:
      'Crewtec builds iOS and Android mobile apps in Bangalore using React Native and Flutter — native-quality user experiences, device integrations, and managed App Store deployment.',
    results: [
      { value: '4.6★', label: 'Average app store rating across launched products' },
      { value: '35%', label: 'Lower development cost vs. separate native codebases' },
      { value: '12 weeks', label: 'Average delivery for a full-featured mobile MVP' },
    ],
  },

  {
    id: 'custom-software',
    number: '03',
    icon: '⚙️',
    color: 'indigo',
    name: 'Custom Software Development',
    shortDesc:
      'We build bespoke ERP, CRM, and workflow automation systems tailored to your business processes — no off-the-shelf compromises.',
    fullDesc:
      'When packaged software cannot accommodate your operational complexity, Crewtec builds from the ground up. Our custom software engagements cover ERP modules, proprietary CRM systems, inventory management platforms, and end-to-end workflow automation tools — all designed around your exact processes, compliance requirements, and integration landscape. We have delivered mission-critical custom systems for manufacturing, logistics, and professional services enterprises across India.',
    features: [
      'Custom ERP modules for finance, procurement, and production',
      'Proprietary CRM with pipeline, contract, and communication management',
      'Multi-step approval workflow and task automation engines',
      'Document management with version control and audit trail',
      'Role-based dashboards and operational reporting',
      'Migration tooling and data import from legacy systems',
    ],
    process: [
      {
        title: 'Business Process Mapping',
        desc: 'In-depth workshops with department heads to document current-state workflows, pain points, and the precise requirements for each software module.',
      },
      {
        title: 'Solution Architecture',
        desc: 'Designing the data model, integration points, and module boundaries before committing to development, ensuring the system is extensible from day one.',
      },
      {
        title: 'Phased Development',
        desc: 'Delivering core modules first, with user acceptance testing gates between phases to validate against real business scenarios before proceeding.',
      },
      {
        title: 'Data Migration & Integration',
        desc: 'Extracting, transforming, and loading data from legacy systems and connecting to existing ERP, accounting, or third-party platforms.',
      },
      {
        title: 'Training & Go-Live',
        desc: 'Structured user training, SOPs for each role, parallel-run support, and a dedicated hypercare period immediately after go-live.',
      },
    ],
    tech: [
      { name: 'Python / Django', domain: 'Backend application framework', type: 'framework' },
      { name: 'React', domain: 'Frontend interface', type: 'library' },
      { name: 'PostgreSQL', domain: 'Relational database', type: 'database' },
      { name: 'Celery / RabbitMQ', domain: 'Async task and workflow queues', type: 'infrastructure' },
    ],
    useCases: [
      'Custom ERP replacement for mid-market manufacturing companies outgrowing SAP B1',
      'Proprietary CRM for professional services firms with complex relationship hierarchies',
      'Inventory and warehouse management for multi-location logistics operators',
      'End-to-end project billing and resource allocation platforms for IT services firms',
    ],
    metaDesc:
      'Crewtec develops custom ERP, CRM, and workflow automation software for enterprises in India — built precisely to your processes, integrated with your stack, and supported long-term.',
    results: [
      { value: '55%', label: 'Average reduction in manual data entry after deployment' },
      { value: '2.5x', label: 'Improvement in process throughput for operations teams' },
      { value: '100%', label: 'Custom-built to your workflows — zero off-the-shelf compromise' },
    ],
  },

  {
    id: 'api-integrations',
    number: '04',
    icon: '🔗',
    color: 'indigo',
    name: 'API & Systems Integration',
    shortDesc:
      'We connect your software ecosystem with robust REST APIs, third-party connectors, and microservices that eliminate data silos and manual handoffs.',
    fullDesc:
      'Modern enterprises run on dozens of software tools — and the cost of keeping them disconnected is enormous. Crewtec designs and builds API layers, integration middleware, and microservices architectures that make your systems talk to each other reliably. From payment gateway and ERP connectors to custom webhook pipelines and event-driven architectures, we eliminate the manual data transfer that slows your teams down.',
    features: [
      'RESTful and GraphQL API design and development',
      'Third-party SaaS connector development (Salesforce, SAP, Zoho, Tally)',
      'Payment gateway integration (Razorpay, PayU, Stripe, CCAvenue)',
      'Event-driven microservices with Kafka or RabbitMQ message brokers',
      'API gateway setup with rate limiting, auth, and versioning',
      'Integration testing, contract testing, and API documentation (OpenAPI)',
    ],
    process: [
      {
        title: 'Integration Discovery',
        desc: 'Mapping all source and target systems, data flows, event triggers, and transformation requirements before designing the integration architecture.',
      },
      {
        title: 'API Design & Contracts',
        desc: 'Defining API schemas, authentication strategies, error handling standards, and SLA expectations agreed with all system owners upfront.',
      },
      {
        title: 'Build & Connect',
        desc: 'Developing connectors, middleware, and transformation logic with stub-based development to enable parallel workstreams across teams.',
      },
      {
        title: 'Testing & Resilience',
        desc: 'End-to-end integration testing covering happy paths, error scenarios, retry logic, and failure mode handling to ensure production reliability.',
      },
      {
        title: 'Monitoring & Maintenance',
        desc: 'Integration health dashboards, alerting on failure rates, and ongoing support to handle API version changes from third-party vendors.',
      },
    ],
    tech: [
      { name: 'Node.js / Express', domain: 'API runtime and middleware', type: 'framework' },
      { name: 'Apache Kafka', domain: 'Event streaming and messaging', type: 'infrastructure' },
      { name: 'Postman / OpenAPI', domain: 'API design and testing', type: 'tool' },
      { name: 'AWS API Gateway', domain: 'Managed API hosting', type: 'cloud' },
    ],
    useCases: [
      'ERP-to-CRM data sync for sales and finance teams working in different systems',
      'Payment gateway and reconciliation integration for fintech and e-commerce platforms',
      'HR system integration connecting HRMS, payroll, and attendance management',
      'Logistics platform connecting warehouse, courier, and customer notification systems',
    ],
    metaDesc:
      'Crewtec builds REST APIs, microservices, and third-party integrations in Bangalore — connecting your ERP, CRM, payment gateways, and SaaS tools into one reliable data ecosystem.',
    results: [
      { value: '80%', label: 'Reduction in manual data transfer between systems' },
      { value: '99.95%', label: 'Integration uptime achieved across critical pipelines' },
      { value: '3 weeks', label: 'Average time to deliver a standard two-system integration' },
    ],
  },

  {
    id: 'ui-ux-design',
    number: '05',
    icon: '🎨',
    color: 'indigo',
    name: 'UI/UX Design',
    shortDesc:
      'We design intuitive, research-backed user interfaces and design systems that reduce friction, increase adoption, and reflect your brand accurately.',
    fullDesc:
      'Good software fails when users cannot figure out how to use it. Crewtec\'s design team conducts user research, builds information architectures, creates interactive prototypes, and delivers production-ready design systems that developers can implement with confidence. Whether you need a ground-up product design or a redesign of an existing application, we bring rigour and craft to every screen.',
    features: [
      'User research, interviews, and persona development',
      'Information architecture and user flow mapping',
      'Low and high-fidelity wireframing in Figma',
      'Interactive prototyping for usability testing',
      'Design system and component library creation',
      'Handoff to development with annotated specs and assets',
    ],
    process: [
      {
        title: 'Research & Discovery',
        desc: 'Stakeholder interviews, user surveys, and competitor UX analysis to ground design decisions in evidence rather than assumption.',
      },
      {
        title: 'Information Architecture',
        desc: 'Defining navigation structure, content hierarchy, and user flows before any visual design, ensuring the product logic is sound from the start.',
      },
      {
        title: 'Wireframes & Prototype',
        desc: 'Iterative wireframing moving from rough sketches to a clickable Figma prototype ready for internal review and user testing sessions.',
      },
      {
        title: 'Visual Design',
        desc: 'High-fidelity screens applying brand guidelines, typography systems, colour tokens, and accessibility standards (WCAG 2.1 AA).',
      },
      {
        title: 'Developer Handoff',
        desc: 'Structured Figma handoff with spacing specs, interaction notes, icon exports, and a living design system for consistent implementation.',
      },
    ],
    tech: [
      { name: 'Figma', domain: 'UI design and prototyping', type: 'tool' },
      { name: 'FigJam', domain: 'User journey and flow mapping', type: 'tool' },
      { name: 'Maze / Hotjar', domain: 'Usability testing and heatmaps', type: 'tool' },
    ],
    useCases: [
      'End-to-end product design for B2B SaaS startups raising their Series A',
      'Enterprise dashboard redesign to improve analyst and operations team efficiency',
      'Mobile app UX for consumer-facing fintech and healthtech products',
      'Design system creation for engineering teams scaling front-end development across squads',
    ],
    metaDesc:
      'Crewtec offers UI/UX design services in Bangalore — user research, Figma prototyping, design systems, and developer-ready handoffs for web and mobile product teams.',
    results: [
      { value: '47%', label: 'Average improvement in task completion rate after redesign' },
      { value: '60%', label: 'Reduction in development rework due to clear design specs' },
      { value: '4.4★', label: 'Average user satisfaction score on designed products' },
    ],
  },

  {
    id: 'devops-deployment',
    number: '06',
    icon: '🚀',
    color: 'indigo',
    name: 'DevOps & Cloud Deployment',
    shortDesc:
      'We implement CI/CD pipelines, containerised deployments, and cloud infrastructure that make releasing software fast, safe, and repeatable.',
    fullDesc:
      'Crewtec\'s DevOps team bridges the gap between development velocity and operational reliability. We design and implement CI/CD pipelines, containerise applications with Docker and Kubernetes, manage cloud environments on AWS and GCP, and establish the observability stack your team needs to detect and resolve incidents before they impact users. We work with your existing development workflow or build one from scratch.',
    features: [
      'CI/CD pipeline design and implementation (GitHub Actions, GitLab CI, Jenkins)',
      'Docker containerisation and Kubernetes orchestration',
      'Infrastructure as Code using Terraform and CloudFormation',
      'Multi-environment setup (dev, staging, production) with environment parity',
      'Centralised logging, metrics, and alerting with Grafana and Prometheus',
      'Cloud cost optimisation and resource right-sizing audits',
    ],
    process: [
      {
        title: 'Infrastructure Audit',
        desc: 'Review of current deployment processes, cloud spend, environment configurations, and pain points to produce a prioritised remediation roadmap.',
      },
      {
        title: 'Pipeline Design',
        desc: 'Designing the CI/CD workflow covering build, test, security scan, staging deploy, and production release with manual approval gates where needed.',
      },
      {
        title: 'Containerisation & IaC',
        desc: 'Dockerising applications, writing Kubernetes manifests or Helm charts, and codifying all infrastructure in Terraform for version-controlled provisioning.',
      },
      {
        title: 'Observability Setup',
        desc: 'Deploying centralised logging (ELK / CloudWatch), metrics collection (Prometheus/Grafana), and alerting rules tied to business-critical SLIs.',
      },
      {
        title: 'Handover & Documentation',
        desc: 'Team training, runbooks for common operational tasks, and an on-call playbook so your developers can own the infrastructure confidently.',
      },
    ],
    tech: [
      { name: 'Docker / Kubernetes', domain: 'Container orchestration', type: 'infrastructure' },
      { name: 'Terraform', domain: 'Infrastructure as Code', type: 'devops' },
      { name: 'GitHub Actions', domain: 'CI/CD pipeline automation', type: 'devops' },
      { name: 'AWS / GCP', domain: 'Cloud hosting and managed services', type: 'cloud' },
      { name: 'Prometheus / Grafana', domain: 'Monitoring and alerting', type: 'observability' },
    ],
    useCases: [
      'Startups moving from manual deployments to automated CI/CD before scaling engineering teams',
      'Enterprises migrating on-premise workloads to AWS or GCP with zero-downtime cutover',
      'SaaS companies needing multi-region, high-availability Kubernetes infrastructure',
      'Teams requiring SOC 2 or ISO 27001-aligned cloud security configurations',
    ],
    metaDesc:
      'Crewtec provides DevOps and cloud deployment services in Bangalore — CI/CD pipelines, Docker, Kubernetes, Terraform, and AWS/GCP infrastructure management for engineering teams.',
    results: [
      { value: '10x', label: 'Increase in deployment frequency after CI/CD implementation' },
      { value: '70%', label: 'Reduction in mean time to recovery (MTTR) with observability stack' },
      { value: '30%', label: 'Average cloud cost saving after infrastructure right-sizing' },
    ],
  },

  {
    id: 'qa-testing',
    number: '07',
    icon: '🧪',
    color: 'indigo',
    name: 'QA & Software Testing',
    shortDesc:
      'We provide end-to-end quality assurance covering manual exploratory testing, automated regression suites, performance benchmarking, and security vulnerability assessments.',
    fullDesc:
      'Quality assurance is not the last step — it is built into every phase of development at Crewtec. Our dedicated QA practice offers embedded testing within agile teams as well as independent QA audits for software built elsewhere. We establish automated regression frameworks that give engineering teams the confidence to ship frequently, combined with structured manual exploratory testing to catch what automation misses.',
    features: [
      'Test strategy and test plan documentation',
      'Manual exploratory and scenario-based testing',
      'Automated regression testing with Playwright and Cypress',
      'API testing and contract validation with Postman and RestAssured',
      'Performance and load testing with k6 and JMeter',
      'OWASP-based security testing and vulnerability scanning',
    ],
    process: [
      {
        title: 'Test Strategy Definition',
        desc: 'Defining the testing scope, entry/exit criteria, test environments, and the balance between manual and automated coverage appropriate for your product.',
      },
      {
        title: 'Test Case Design',
        desc: 'Writing test cases aligned to user stories and acceptance criteria, with a focus on boundary conditions, negative paths, and business-critical flows.',
      },
      {
        title: 'Manual Test Execution',
        desc: 'Structured manual testing cycles with detailed defect reporting, severity classification, and retest confirmation before regression runs.',
      },
      {
        title: 'Automation Framework Build',
        desc: 'Building a maintainable automation suite integrated into the CI/CD pipeline so regressions are caught at every code commit.',
      },
      {
        title: 'Sign-off & Reporting',
        desc: 'Release readiness report covering test coverage metrics, open defect summary, performance benchmarks, and a formal sign-off recommendation.',
      },
    ],
    tech: [
      { name: 'Playwright / Cypress', domain: 'UI test automation', type: 'tool' },
      { name: 'k6 / JMeter', domain: 'Performance and load testing', type: 'tool' },
      { name: 'OWASP ZAP', domain: 'Security vulnerability scanning', type: 'tool' },
    ],
    useCases: [
      'SaaS products requiring continuous automated testing before each production release',
      'Enterprise software go-lives needing independent QA validation and sign-off',
      'E-commerce platforms requiring load testing before peak sale events',
      'Fintech applications requiring OWASP security testing for RBI compliance readiness',
    ],
    metaDesc:
      'Crewtec offers QA and software testing services in Bangalore — manual testing, Playwright automation, performance testing, and security assessments for web and mobile applications.',
    results: [
      { value: '85%', label: 'Reduction in production defect rate after embedding QA in sprints' },
      { value: '60%', label: 'Regression suite coverage achieved within the first engagement quarter' },
      { value: '3x', label: 'Faster release cycles once automated testing is established' },
    ],
  },

  {
    id: 'maintenance-support',
    number: '08',
    icon: '🛡️',
    color: 'indigo',
    name: 'Maintenance & Support',
    shortDesc:
      'We provide SLA-backed application maintenance, proactive monitoring, version upgrades, and 24/7 incident response to keep your software running without interruption.',
    fullDesc:
      'Software does not stop needing attention after launch. Crewtec\'s maintenance and support retainers give enterprises a dedicated technical team responsible for the health, security, and evolution of their applications. We handle everything from routine dependency upgrades and performance monitoring to emergency incident response and feature enhancements — so your internal team can focus on the next product initiative rather than firefighting the current one.',
    features: [
      'SLA-backed response times (Critical: 1hr, High: 4hr, Medium: 24hr)',
      '24/7 uptime monitoring with automated alerting and escalation',
      'Monthly dependency and security patch management',
      'Quarterly framework and platform version upgrade planning',
      'Bug triage, root cause analysis, and permanent fix delivery',
      'Feature enhancement development within monthly retainer hours',
    ],
    process: [
      {
        title: 'Onboarding & Knowledge Transfer',
        desc: 'Comprehensive handover from your team or previous vendor, covering architecture documentation, access provisioning, and monitoring setup.',
      },
      {
        title: 'Baseline Audit',
        desc: 'Technical health check of the application covering security vulnerabilities, outdated dependencies, performance regressions, and code quality debt.',
      },
      {
        title: 'SLA Agreement & Escalation Matrix',
        desc: 'Defining incident severity classifications, response and resolution SLAs, escalation contacts, and communication protocols for each tier.',
      },
      {
        title: 'Ongoing Operations',
        desc: 'Proactive monitoring, patch management, scheduled maintenance windows, and monthly service reports covering uptime, incidents, and retainer utilisation.',
      },
      {
        title: 'Quarterly Business Review',
        desc: 'Strategic review of application health trends, upcoming platform EOL timelines, and roadmap discussions for enhancements in the next quarter.',
      },
    ],
    tech: [
      { name: 'Datadog / New Relic', domain: 'Application performance monitoring', type: 'observability' },
      { name: 'PagerDuty', domain: 'Incident alerting and on-call management', type: 'tool' },
      { name: 'Jira / Linear', domain: 'Issue tracking and sprint management', type: 'tool' },
    ],
    useCases: [
      'Enterprises without in-house engineering capacity to maintain legacy applications',
      'SaaS companies needing 24/7 on-call coverage without building a global NOC',
      'Businesses with compliance requirements mandating documented patch management',
      'Companies transitioning away from a software agency that built their platform',
    ],
    metaDesc:
      'Crewtec provides SLA-backed application maintenance and support in Bangalore — 24/7 monitoring, security patching, version upgrades, and incident response for production software.',
    results: [
      { value: '99.9%', label: 'Average uptime maintained across supported applications' },
      { value: '<45 min', label: 'Average response time for critical production incidents' },
      { value: '100%', label: 'Of supported apps kept current on security patches monthly' },
    ],
  },
];
