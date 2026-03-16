export interface SubService {
  title: string;
  slug: string;
  description: string;
  content?: string;
  features?: string[];
  icon?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  subServices: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    slug: 'web-development',
    description: 'Transform your digital presence with high-performance, scalable web solutions.',
    subServices: [
      { icon: "⚡", title: 'Full-Stack Development', slug: 'full-stack-development', description: 'End-to-end web application development using modern frameworks like React and Node.js.' },
      { icon: "🛒", title: 'Ecommerce Solutions', slug: 'ecommerce-solutions', description: 'Scalable online storefronts with seamless payment integration and inventory management.' },
      { icon: "🌐", title: 'Progressive Web Apps', slug: 'pwa-development', description: 'Offline-capable, installable web apps that deliver native-like experiences.' },
      { icon: "🔌", title: 'API & Integrations', slug: 'api-integrations', description: 'Robust RESTful and GraphQL APIs plus third-party integrations to power your ecosystem.' },
      { icon: "🔐", title: 'Web Security & Auth', slug: 'web-security', description: 'Implement OAuth2, JWT, and role-based access control to safeguard your applications.' },
      { icon: "🚀", title: 'Performance Optimization', slug: 'performance-optimization', description: 'Lighthouse audits, lazy loading, and CDN strategies for blazing-fast experiences.' },
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Build native and cross-platform mobile apps that users love.',
    subServices: [
      { icon: "🤖", title: 'Android Development', slug: 'android-app-development', description: 'High-performance Android apps built with Kotlin and Jetpack Compose.' },
      { icon: "🍎", title: 'iOS Development', slug: 'ios-app-development', description: 'Native iOS applications using Swift and SwiftUI, optimized for the Apple ecosystem.' },
      { icon: "⚛️", title: 'React Native', slug: 'react-native-development', description: 'Cross-platform apps from a single codebase – faster time-to-market.' },
      { icon: "🦋", title: 'Flutter Development', slug: 'flutter-development', description: 'Beautiful, natively compiled multi-platform apps with expressive UI.' },
      { icon: "📲", title: 'App Store Optimization', slug: 'aso-services', description: 'Boost downloads and discoverability with expert ASO strategies.' },
      { icon: "🔔", title: 'Push Notifications', slug: 'push-notifications', description: 'Rich push notifications and engagement strategies to drive user retention.' },
    ]
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    slug: 'software-development',
    description: 'Custom software solutions that solve complex industrial problems.',
    subServices: [
      { icon: "🏗️", title: 'Custom Software', slug: 'custom-software', description: 'Bespoke software solutions engineered to your exact specifications.' },
      { icon: "🔧", title: 'SaaS Development', slug: 'saas-development', description: 'Multi-tenant SaaS platforms built for scale with subscription billing.' },
      { icon: "🔄", title: 'Legacy Modernization', slug: 'legacy-modernization', description: 'Migrate and modernize outdated systems into cloud-native microservices.' },
      { icon: "🧪", title: 'QA & Testing', slug: 'qa-testing', description: 'Comprehensive automated and manual testing ensuring the highest quality.' },
      { icon: "🛠️", title: 'DevOps & CI/CD', slug: 'devops-cicd', description: 'Streamline deployments with automated pipelines and infrastructure as code.' },
      { icon: "📦", title: 'Microservices', slug: 'microservices', description: 'Decompose applications into independently scalable services.' },
    ]
  },
  {
    id: 'cloud-mgmt',
    title: 'Cloud & Infrastructure',
    slug: 'cloud-management',
    description: 'Scalable cloud infrastructure and proactive management services.',
    subServices: [
      { icon: "☁️", title: 'Cloud Migration', slug: 'cloud-migration', description: 'Seamlessly move workloads to AWS, Azure, or GCP with zero-downtime.' },
      { icon: "🔒", title: 'Cloud Security', slug: 'cloud-security', description: 'Identity management and compliance frameworks that protect your assets.' },
      { icon: "📦", title: 'Containerization', slug: 'containerization', description: 'Docker and Kubernetes management for scalable and portable deployments.' },
      { icon: "♻️", title: 'Disaster Recovery', slug: 'disaster-recovery', description: 'Automated backup and failover solutions that ensure business continuity.' },
      { icon: "⚙️", title: 'Infrastructure as Code', slug: 'iac', description: 'Terraform and Ansible-driven provisioning for consistent environments.' },
      { icon: "📊", title: 'Cloud Monitoring', slug: 'cloud-monitoring', description: 'Real-time alerting and observability with tools like Datadog and Grafana.' },
    ]
  },
  {
    id: 'data-eng',
    title: 'Data Engineering',
    slug: 'data-engineering',
    description: 'Turn raw data into actionable insights with robust engineering.',
    subServices: [
      { icon: "🔁", title: 'ETL Pipelines', slug: 'etl-pipelines', description: 'Reliable data ingestion and transformation pipelines for your warehouse.' },
      { icon: "📊", title: 'BI & Analytics', slug: 'bi-analytics', description: 'Real-time dashboards powered by Snowflake, Tableau, and Power BI.' },
      { icon: "🌊", title: 'Big Data Solutions', slug: 'big-data', description: 'Spark and Kafka-based architectures for processing massive data volumes.' },
      { icon: "🛡️", title: 'Data Governance', description: 'Policies and lineage tracking that ensure data quality and security.', slug: 'data-governance' },
      { icon: "🗄️", title: 'Database Optimization', description: 'PostgreSQL and MongoDB architecture with expert query tuning.', slug: 'database-optimization' },
      { icon: "🤝", title: 'Data Integration', description: 'Unify siloed data sources into a single source of truth.', slug: 'data-integration' },
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI and ML Services',
    slug: 'ai-automation',
    description: 'Harness the power of AI to automate and intelligentize your business.',
    subServices: [
      { icon: "🧠", title: 'AI Consulting', slug: 'ai-consulting', description: 'Leading AI strategies leveraging computational power to build solutions.' },
      { icon: "💬", title: 'Generative AI', slug: 'generative-ai', description: 'Reliable partner in the AI product and software development domain.' },
      { icon: "👁️", title: 'ML Solutions', slug: 'ml-solutions', description: 'Hire machine learning engineers for cutting-edge, result-oriented solutions.' },
      { icon: "🤖", title: 'Agentic AI', slug: 'agentic-ai', description: 'Large-scale Agentic AI solutions that drive growth and seize opportunities.' },
      { icon: "📷", title: 'Computer Vision', slug: 'computer-vision', description: 'Object detection and visual inspection powered by deep learning.' },
      { icon: "🗣️", title: 'NLP & Chatbots', slug: 'nlp-chatbots', description: 'Intelligent conversational AI solutions that automate support.' },
    ]
  },
  {
    id: 'enterprise-dev',
    title: 'Enterprise Development',
    slug: 'enterprise-development',
    description: 'Scale your business with integrated enterprise-grade systems.',
    subServices: [
      { icon: "🏢", title: 'Enterprise Software', slug: 'enterprise-software', description: 'Scalable applications designed for performance and long-term growth.' },
      { icon: "💰", title: 'Cost Optimization', slug: 'enterprise-cost-optimization', description: 'Optimize enterprise systems to reduce operational costs and improve efficiency.' },
      { icon: "📐", title: 'System Design', slug: 'enterprise-system-design', description: 'Design robust and secure system architectures for high-growth products.' },
      { icon: "🎨", title: 'Product Design', slug: 'enterprise-product-design', description: 'Create intuitive product experiences focused on usability and engagement.' },
      { icon: "🔗", title: 'ERP/CRM Integration', slug: 'erp-crm-integration', description: 'Seamlessly integrate Salesforce and SAP to unify enterprise workflows.' },
      { icon: "🛡️", title: 'Compliance IT', slug: 'compliance-it', description: 'ISO 27001 and SOC 2 frameworks to ensure your enterprise meets standards.' },
    ]
  },
  {
    id: 'sys-arch',
    title: 'System Architecture',
    slug: 'architecture-designs',
    description: 'Strategic system architecture planning for technical excellence.',
    subServices: [
      { icon: "🏛️", title: 'Microservices Design', slug: 'microservices-design', description: 'Break down monoliths into resilient independently deployable services.' },
      { icon: "📈", title: 'Performance Engineering', slug: 'performance-engineering', description: 'Caching and query optimization to handle massive traffic spikes.' },
      { icon: "🔗", title: 'Event-Driven Systems', slug: 'event-driven-systems', description: 'Kafka and RabbitMQ-based architectures for decoupled services.' },
      { icon: "🌍", title: 'Multi-Region Setup', slug: 'multi-region-setup', description: 'Globally distributed architectures with regional failover capabilities.' },
      { icon: "⚖️", title: 'Load Balancing', slug: 'load-balancing', description: 'Active-active setups with intelligent distribution to eliminate failure.' },
      { icon: "🔍", title: 'Observability & SRE', slug: 'observability-sre', description: 'Site reliability practices with SLOs and error budgets to maximize uptime.' },
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Product Design',
    slug: 'design-and-ux',
    description: 'Designing intuitive products that users love to interact with.',
    subServices: [
      { icon: "🖌️", title: 'UI Design', slug: 'ui-design', description: 'Pixel-perfect, brand-aligned interfaces designed with reusable components.' },
      { icon: "🔬", title: 'UX Research', slug: 'ux-research', description: 'User interviews and heuristics that transform insights into improvements.' },
      { icon: "📱", title: 'Design Systems', slug: 'design-systems', description: 'Scalable, documented languages that keep your product consistent.' },
      { icon: "⚡", title: 'Rapid Prototyping', slug: 'rapid-prototyping', description: 'Interactive prototypes validated with real users before development.' },
      { icon: "♿", title: 'Accessibility', slug: 'accessibility', description: 'In-inclusive digital products that meet global WCAG standards.' },
      { icon: "🎯", title: 'CRO Strategy', slug: 'cro-strategy', description: 'Data-driven UX improvements and A/B testing to maximize revenue.' },
    ]
  },
  {
    id: 'cloud-cost',
    title: 'Cloud Cost Optimization',
    slug: 'cloud-cost-optimization',
    description: 'Strategic reduction of cloud spend while maintaining peak performance.',
    subServices: [
      { icon: "📉", title: 'FinOps Strategy', slug: 'finops-strategy', description: 'Financial management frameworks that align teams around cost accountability.' },
      { icon: "🔍", title: 'Cost Auditing', slug: 'cost-auditing', description: 'Identify waste and eliminate idle infrastructure to slash your cloud bill.' },
      { icon: "🤖", title: 'Auto-Scaling', slug: 'auto-scaling-policies', description: 'Intelligent policies that match resource consumption to actual demand.' },
      { icon: "📋", title: 'Spot Instances', slug: 'spot-instances', description: 'Strategic use of spot instances to cut compute costs by up to 70%.' },
      { icon: "🌱", title: 'Sustainability', slug: 'cloud-sustainability', description: 'Reduce carbon footprint with energy-efficient cloud architectures.' },
      { icon: "📐", title: 'Right-Sizing', slug: 'resource-rightsizing-optimization', description: 'Continuously adjust resource allocations to match actual workloads.' },
    ]
  },
];
