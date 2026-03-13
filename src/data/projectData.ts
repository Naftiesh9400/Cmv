import ProjectCloud from '../assets/project_cloud.png';
import ProjectSecurity from '../assets/project_security.png';
import ProjectCRM from '../assets/project_crm.png';
import ProjectHealthcare from '../assets/project_healthcare.png';

export interface ProjectPost {
  id: string;
  slug: string;
  img: string;
  category: string;
  title: string;
  desc: string;
  challenge: string;
  solution: string;
  results: string[];
  seoTitle: string;
  seoDesc: string;
}

export const projectPosts: ProjectPost[] = [
  {
    id: '1',
    slug: 'cloud-infrastructure-optimization',
    img: ProjectCloud,
    category: 'Cloud Services',
    title: 'Cloud Infrastructure Optimization',
    desc: 'Streamlined a retail company\'s cloud architecture to reduce costs by 30% and improve scalability using AWS and automation tools.',
    challenge: 'A growing e-commerce retailer faced spiraling monthly AWS costs and frequent downtime during flash sales. Their legacy infrastructure was manually managed, making it prone to errors and slow to scale.',
    solution: 'We implemented an Infrastructure as Code (IaC) approach using Terraform. We migrated their monolithic application to a containerized microservices architecture on Amazon EKS, and implemented Auto-Scaling groups and CloudFront for global content delivery.',
    results: [
      '30% reduction in monthly infrastructure costs.',
      '99.99% uptime achieved during peak holiday traffic.',
      'Deployment time reduced from 4 hours to 15 minutes.',
      'Improved global page load speed by 45%.'
    ],
    seoTitle: 'Cloud Infrastructure Case Study | CMV Technologies',
    seoDesc: 'Read how CMV Technologies optimized cloud infrastructure for a retail giant, saving 30% in costs and achieving near-perfect uptime.',
  },
  {
    id: '2',
    slug: 'enterprise-network-security-upgrade',
    img: ProjectSecurity,
    category: 'Cybersecurity',
    title: 'Enterprise Network Security Upgrade',
    desc: 'Implemented next-gen firewalls, intrusion detection, and endpoint protection for a financial firm to eliminate critical security gaps.',
    challenge: 'A mid-sized financial planning firm was vulnerable to sophisticated phishing attacks and lacked internal visibility into network traffic. They needed a security overhaul to meet new industry compliance standards.',
    solution: 'We deployed an end-to-end security stack including Palo Alto Next-Gen Firewalls, CrowdStrike endpoint protection, and a managed SIEM solution. We also conducted comprehensive staff training and implemented Multi-Factor Authentication (MFA) across all systems.',
    results: [
      'Successfully blocked 500+ daily malicious external attempts.',
      'Zero security breaches since implementation.',
      'Full compliance achieved with financial industry regulations.',
      'Internal threat detection time reduced by 80%.'
    ],
    seoTitle: 'Cybersecurity Case Study: Financial Firm | CMV Technologies',
    seoDesc: 'Explore how we secured an enterprise network for a financial firm with next-gen firewalls and real-time threat monitoring.',
  },
  {
    id: '3',
    slug: 'custom-crm-integration-solution',
    img: ProjectCRM,
    category: 'Software Development',
    title: 'Custom CRM Integration Solution',
    desc: 'Built and integrated a custom CRM system for a logistics company, boosting lead management efficiency by 45%.',
    challenge: 'A logistics provider was using fragmented spreadsheets and legacy databases to track leads and customer interactions, leading to lost data and missed sales opportunities.',
    solution: 'We developed a custom, cloud-based CRM tailored to their specific workflows. The solution integrated directly with their existing shipping management system and featured automated lead scoring and real-time reporting dashboards.',
    results: [
      '45% improvement in lead management efficiency.',
      '20% increase in sales conversion rates within 6 months.',
      'Centralized customer data accessible across all branch offices.',
      'Eliminated 15+ hours of manual data entry per week.'
    ],
    seoTitle: 'Custom CRM Development Case Study | CMV Technologies',
    seoDesc: 'Learn how our custom CRM solution helped a logistics company boost efficiency and drive higher sales conversions.',
  },
  {
    id: '4',
    slug: 'healthcare-data-migration-project',
    img: ProjectHealthcare,
    category: 'Data Migration',
    title: 'Healthcare Data Migration Project',
    desc: 'Migrated sensitive patient records to a secure, HIPAA-compliant cloud environment with zero downtime for a hospital network.',
    challenge: 'A regional hospital network needed to migrate millions of sensitive patient records from an aging on-premise data center to a secure cloud platform while ensuring zero interruption to clinical services.',
    solution: 'We utilized a multi-phase migration strategy using AWS DataSync and Snowball Edge for secure physical data transfer. We architected a HIPAA-compliant environment on AWS with strict encryption, access controls, and comprehensive auditing.',
    results: [
      'Successful migration of 5TB+ of patient data with zero downtime.',
      'Full HIPAA and SOC2 compliance verified post-migration.',
      'Improved data retrieval speed for clinicians by 60%.',
      'Reduced annual data storage costs by 40%.'
    ],
    seoTitle: 'HIPAA Compliant Cloud Migration | CMV Technologies',
    seoDesc: 'Discover our zero-downtime data migration strategy for healthcare providers. Secure, compliant, and high-performance cloud solutions.',
  },
];
