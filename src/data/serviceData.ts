export interface SubService {
  title: string;
  slug: string;
  description: string;
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
    id: '1',
    title: 'Web Development',
    slug: 'web-development',
    description: 'Transform your digital presence with high-performance, scalable web solutions.',
    subServices: [
      { title: 'MERN Stack Development', slug: 'mern-stack-development', description: 'Modern full-stack web applications built with MongoDB, Express, React, and Node.js.' },
      { title: 'PHP & Laravel Development', slug: 'laravel-development', description: 'Expert PHP and Laravel development for robust and dynamic web applications.' },
      { title: 'WordPress Development', slug: 'wordpress-development', description: 'Custom WordPress themes and plugins tailored to your brand.' },
      { title: 'Shopify & Ecommerce', slug: 'shopify-development', description: 'Powerful E-commerce stores built for high conversion and scale.' },
      { title: 'Full Stack Development', slug: 'full-stack-development', description: 'End-to-end web engineering from database design to frontend polish.' },
      { title: 'Tailored Web Solutions', slug: 'customized-development', description: 'Unique web applications designed for specific business challenges.' },
    ]
  },
  {
    id: '2',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Build native and cross-platform mobile apps that users love.',
    subServices: [
      { title: 'Android App Development', slug: 'android-app-development', description: 'Feature-rich Android applications for the global market.' },
      { title: 'iOS App Development', slug: 'ios-app-development', description: 'Premium iOS experiences for iPhone and iPad users.' },
      { title: 'Flutter App Development', slug: 'flutter-app-development', description: 'Single-codebase mobile apps with native performance using Flutter.' },
      { title: 'React Native Development', slug: 'react-native-app-development', description: 'High-quality hybrid apps built with React Native efficiency.' },
      { title: 'Ecommerce App Development', slug: 'ecommerce-app-development', description: 'Mobile-first shopping experiences for modern consumers.' },
      { title: 'Custom Mobile Solutions', slug: 'custom-app-development', description: 'Bespoke mobile software designed for your unique requirements.' },
    ]
  },
  {
    id: '3',
    title: 'Software Development',
    slug: 'software-development',
    description: 'Custom software solutions that solve complex industrial problems.',
    subServices: [
      { title: 'Custom CRM Solutions', slug: 'crm-solutions', description: 'Tailor-made CRM systems to optimize your customer relationships.' },
      { title: 'MVP Development', slug: 'mvp-development', description: 'Rapidly launch your startup idea with a focus-critical MVP.' },
      { title: 'Low Code Solutions', slug: 'low-code', description: 'Accelerate digital transformation with agile low-code platforms.' },
      { title: 'API Integration', slug: 'api-integration', description: 'Seamlessly connect your disparate software systems with robust APIs.' },
    ]
  },
  {
    id: '4',
    title: 'Cloud & Infrastructure',
    slug: 'cloud-management',
    description: 'Scalable cloud infrastructure and proactive management services.',
    subServices: [
      { title: 'Infrastructure Management', slug: 'it-facility-management', description: 'End-to-end management of your enterprise IT infrastructure.' },
      { title: 'Cloud Computing', slug: 'cloud-computing', description: 'On-demand computing power across AWS, Azure, and GCP.' },
      { title: 'Cloud Email & Productivity', slug: 'cloud-email', description: 'Secure and reliable enterprise email and collaboration tools.' },
      { title: 'IT Virtualisation', slug: 'it-virtualisation', description: 'Maximize hardware efficiency through advanced virtualization.' },
    ]
  },
  {
    id: '5',
    title: 'Data Engineering',
    slug: 'data-engineering',
    description: 'Turn raw data into actionable insights with robust engineering.',
    subServices: [
      { title: 'Data Analysis Services', slug: 'data-analysis', description: 'Extract meaningful patterns from complex datasets.' },
      { title: 'Data Management Services', slug: 'data-management', description: 'Ensure accuracy, availability, and security of organizational data.' },
      { title: 'Data Protection', slug: 'data-protection', description: 'Advanced strategies to safeguard against modern data breaches.' },
    ]
  },
  {
    id: '6',
    title: 'AI Automation',
    slug: 'ai-automation',
    description: 'Harness the power of AI to automate and intelligentize your business.',
    subServices: [
      { title: 'AI Agents Development', slug: 'ai-agents', description: 'Autonomous agents that handle complex tasks intelligently.' },
      { title: 'Workflow Automation', slug: 'workflow-automation', description: 'Streamline business operations with intelligent n8n or Zapier triggers.' },
      { title: 'AI Sales & Support', slug: 'ai-sales-support', description: '24/7 intelligent customer engagement and lead generation.' },
    ]
  },
  {
    id: '7',
    title: 'Enterprise Development',
    slug: 'enterprise-development',
    description: 'Scale your business with integrated enterprise-grade systems.',
    subServices: [
      { title: 'Java Enterprise Apps', slug: 'java-enterprise', description: 'High-performance systems built using Java & Spring Boot.' },
      { title: 'Node.js Backend', slug: 'nodejs-backend', description: 'Fast, event-driven architectures for real-time scalability.' },
      { title: 'Golang Systems', slug: 'golang-systems', description: 'High-concurrency microservices using Google\'s Go language.' },
      { title: 'Legacy Modernization', slug: 'legacy-modernization', description: 'Upgrading existing core systems with modern tech stacks.' },
      { title: 'ERP/CMS Development', slug: 'erp-cms-development', description: 'Custom enterprise resource and content systems.' },
    ]
  },
  {
    id: '8',
    title: 'Cloud Cost Optimization',
    slug: 'cloud-cost-optimization',
    description: 'Strategic reduction of cloud spend while maintaining peak performance.',
    subServices: [
      { title: 'AWS Cost Management', slug: 'aws-cost-optimization', description: 'Optimizing AWS spend through instance sizing and reserved capacity.' },
      { title: 'Azure/GCP Optimization', slug: 'azure-gcp-optimization', description: 'Comprehensive cost audits for multi-cloud environments.' },
      { title: 'Resource Rightsizing', slug: 'resource-rightsizing', description: 'Ensuring your cloud resources perfectly match your workload demand.' },
    ]
  },
  {
    id: '9',
    title: 'Architecture & Design',
    slug: 'architecture-designs',
    description: 'Strategic system architecture planning for technical excellence.',
    subServices: [
      { title: 'System Architecture', slug: 'system-architecture', description: 'Designing robust, high-level blueprints for complex software systems.' },
      { title: 'Scalability Planning', slug: 'scalability-design', description: 'Ensuring your tech stack can handle tomorrow\'s growth today.' },
      { title: 'Digital Transformation', slug: 'digital-transformation-design', description: 'Architecting the shift from manual to fully digital workflows.' },
    ]
  },
  {
    id: '10',
    title: 'Product Design & UX',
    slug: 'design-and-ux',
    description: 'Designing intuitive products that users love to interact with.',
    subServices: [
      { title: 'UI/UX Design', slug: 'ui-ux-design', description: 'Modern, accessible, and high-conversion interfaces.' },
      { title: 'Product Case Management', slug: 'product-management', description: 'Strategic oversight of the entire software product lifecycle.' },
      { title: 'User Research', slug: 'user-research', description: 'Data-driven insights to guide your product design decisions.' },
    ]
  }
];
