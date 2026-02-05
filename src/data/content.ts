// ============================================================
// PRATHIK SOFTNET - COMPLETE WEBSITE CONTENT
// ============================================================

export const COMPANY = {
  name: 'Prathik Softnet',
  tagline: 'Enterprise IT Infrastructure Solutions',
  founded: 2018,
  phone: '+91 7019555245',
  phoneDisplay: '+91 70195 55245',
  email: 'prathiknadig4@gmail.com',
  website: 'https://prathiksoftnet.com',
  whatsapp: 'https://wa.me/917019555245',
  linkedin: 'https://linkedin.com/company/prathik-softnet',
  founder: 'Prathik P Nadig',
  addresses: {
    bangalore: {
      label: 'Bangalore HQ',
      street: '912, 2nd Floor, BSK 3rd Stage',
      area: 'Kathriguppe',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560085',
      country: 'India',
      full: '912, 2nd Floor, BSK 3rd Stage, Kathriguppe, Bangalore - 560085',
      mapUrl: 'https://maps.google.com/?q=12.9247,77.5451',
      lat: 12.9247,
      lng: 77.5451,
    },
    delhi: {
      label: 'Delhi Branch',
      street: 'Sector 18, Block C',
      area: 'Noida',
      city: 'New Delhi NCR',
      state: 'Delhi',
      pincode: '201301',
      country: 'India',
      full: 'Sector 18, Block C, Noida, New Delhi NCR - 201301',
      mapUrl: 'https://maps.google.com/?q=28.5706,77.3233',
      lat: 28.5706,
      lng: 77.3233,
    },
  },
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
  hoursSaturday: 'Saturday: 10:00 AM - 2:00 PM IST',
  emergencySupport: '24/7 Emergency Support for AMC Clients',
};

export const STATS = [
  { value: 7, suffix: '+', label: 'Years of Excellence', icon: 'calendar' },
  { value: 100, suffix: '+', label: 'Projects Delivered', icon: 'check-circle' },
  { value: 25, suffix: '+', label: 'Satisfied Clients', icon: 'users' },
  { value: 6, suffix: '', label: 'Industries Served', icon: 'building' },
  { value: 99, suffix: '%', label: 'Client Satisfaction', icon: 'shield' },
];

export const HERO = {
  home: {
    headline: 'Enterprise IT Infrastructure Solutions Since 2018',
    subheadline: 'Trusted by businesses across India for servers, storage, networking, and end-to-end IT infrastructure services.',
    cta1: 'Request a Quote',
    cta2: 'View Case Studies',
  },
  about: {
    headline: 'Building India\'s IT Backbone',
    subheadline: 'From a bold vision in 2018 to a trusted partner for enterprise IT infrastructure across India.',
  },
  solutions: {
    headline: 'Comprehensive IT Solutions',
    subheadline: 'End-to-end infrastructure services designed to power your digital transformation.',
  },
  products: {
    headline: 'Enterprise Hardware Catalog',
    subheadline: 'Authorized partner for Dell, HP, Cisco, Lenovo and more. Browse our full range of enterprise-grade hardware.',
  },
  industries: {
    headline: 'Industry-Specific IT Solutions',
    subheadline: 'Tailored infrastructure solutions for every sector, backed by deep domain expertise.',
  },
  caseStudies: {
    headline: 'Proven Results, Real Impact',
    subheadline: 'See how we\'ve helped organizations transform their IT infrastructure.',
  },
  partners: {
    headline: 'Our Technology Partners',
    subheadline: 'Authorized partnerships with the world\'s leading technology OEMs.',
  },
  blog: {
    headline: 'Insights & Resources',
    subheadline: 'Expert perspectives on IT infrastructure, enterprise hardware, and technology trends.',
  },
  contact: {
    headline: 'Let\'s Build Your Infrastructure',
    subheadline: 'Get in touch for a free consultation. Our team responds within 4 business hours.',
  },
};

// ============================================================
// SOLUTIONS
// ============================================================

export interface Solution {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  overview: string;
  deliverables: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  benefits: { title: string; description: string }[];
  technologies: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'hardware-procurement',
    slug: 'hardware-procurement',
    title: 'Hardware Procurement & Supply',
    shortTitle: 'Procurement',
    icon: 'package',
    description: 'Source enterprise-grade IT hardware from authorized OEM channels with competitive pricing, assured warranties, and rapid delivery across India.',
    overview: 'Prathik Softnet provides end-to-end hardware procurement services for enterprises across India. As authorized partners of Dell, HP, Cisco, Lenovo, and other leading OEMs, we source servers, storage arrays, networking equipment, and workstations directly from manufacturers. Our procurement team negotiates bulk pricing, manages vendor relationships, and ensures every piece of hardware comes with full manufacturer warranty and support. We handle everything from initial requirement analysis and product selection to delivery logistics and asset documentation, allowing your IT team to focus on core operations. Whether you need a single workstation or a complete data center refresh, our streamlined procurement process delivers the right equipment at the right price, on time.',
    deliverables: [
      { title: 'OEM-Authorized Hardware', description: 'All products sourced directly from authorized manufacturer channels with full warranty coverage.' },
      { title: 'Competitive Pricing', description: 'Bulk purchasing power and strong OEM relationships ensure best-in-market pricing for your organization.' },
      { title: 'Requirement Analysis', description: 'Our engineers assess your workload requirements to recommend optimal hardware configurations.' },
      { title: 'Configuration Services', description: 'Pre-configured and tested hardware delivered ready for deployment in your environment.' },
      { title: 'Logistics & Delivery', description: 'Insured door-to-door delivery across India with real-time shipment tracking.' },
      { title: 'Asset Documentation', description: 'Complete asset records including serial numbers, warranty details, and license information.' },
      { title: 'Vendor Management', description: 'Single point of contact for multi-vendor environments, simplifying your procurement workflow.' },
      { title: 'Financing Options', description: 'Flexible payment terms including leasing, EMI options, and credit facilities for enterprise purchases.' },
    ],
    process: [
      { step: 1, title: 'Requirement Gathering', description: 'Our engineers work with your team to understand current infrastructure, growth plans, and performance requirements.' },
      { step: 2, title: 'Solution Design', description: 'We design optimal hardware configurations considering workload, scalability, budget, and manufacturer best practices.' },
      { step: 3, title: 'Pricing & Proposal', description: 'Detailed quotation with competitive pricing, warranty options, and optional services like installation and AMC.' },
      { step: 4, title: 'Order Processing', description: 'Once approved, we process orders through authorized channels with priority handling and order tracking.' },
      { step: 5, title: 'Quality Inspection', description: 'Every unit undergoes inspection and verification against order specifications before shipment.' },
      { step: 6, title: 'Delivery & Handover', description: 'Secure delivery with complete documentation, asset tagging, and warranty registration.' },
    ],
    benefits: [
      { title: 'Cost Savings', description: 'Save 15-30% on hardware costs through our bulk purchasing agreements and OEM partnerships.' },
      { title: 'Faster Procurement', description: 'Reduce procurement cycles from weeks to days with our streamlined ordering process.' },
      { title: 'Risk Mitigation', description: 'Eliminate counterfeit hardware risks with authorized channel sourcing and manufacturer verification.' },
      { title: 'Expert Guidance', description: 'Certified engineers help you choose the right specifications for your specific workloads.' },
      { title: 'Unified Procurement', description: 'Single vendor for multi-brand requirements reduces complexity and administrative overhead.' },
      { title: 'Post-Sale Support', description: 'Warranty claims, RMA processing, and technical support handled by our dedicated team.' },
    ],
    technologies: ['Dell Technologies', 'HPE', 'Cisco', 'Lenovo', 'Intel', 'AMD', 'NVIDIA', 'NetApp', 'Pure Storage', 'Juniper'],
    industries: ['Banking & Finance', 'Healthcare', 'Education', 'Manufacturing', 'IT/ITES', 'Government'],
    faqs: [
      { question: 'What brands do you supply?', answer: 'We are authorized partners of Dell, HP/HPE, Cisco, Lenovo, Intel, NVIDIA, NetApp, and more. We can source from virtually any enterprise OEM.' },
      { question: 'What is the typical delivery timeline?', answer: 'Standard configurations ship within 5-7 business days. Custom or build-to-order configurations typically take 2-4 weeks depending on manufacturer lead times.' },
      { question: 'Do you offer bulk discounts?', answer: 'Yes. Our pricing scales with volume. For large deployments, we negotiate special project pricing directly with OEMs.' },
      { question: 'Is financing available?', answer: 'We offer multiple financing options including EMI, leasing, and credit terms for qualifying organizations.' },
      { question: 'Do products come with manufacturer warranty?', answer: 'All hardware comes with full manufacturer warranty. We also offer extended warranty and AMC packages.' },
    ],
  },
  {
    id: 'infrastructure-design',
    slug: 'infrastructure-design',
    title: 'Infrastructure Design & Consulting',
    shortTitle: 'Infrastructure',
    icon: 'layout',
    description: 'Architect scalable, resilient IT infrastructure with expert data center design, capacity planning, and technology roadmapping.',
    overview: 'Our infrastructure design team brings deep expertise in architecting enterprise IT environments that balance performance, reliability, and cost-efficiency. We work with your stakeholders to understand business objectives and translate them into technical blueprints that scale with your growth. From greenfield data center builds to hybrid cloud architectures, our certified engineers design solutions that incorporate redundancy, disaster recovery, and security from the ground up. We leverage reference architectures from Dell, HPE, Cisco, and other partners while tailoring every design to your specific requirements, compliance needs, and budget constraints. Our designs are backed by detailed documentation, bill of materials, and implementation roadmaps that ensure smooth project execution.',
    deliverables: [
      { title: 'Architecture Blueprint', description: 'Detailed network, compute, and storage architecture diagrams with specifications.' },
      { title: 'Capacity Planning', description: 'Workload analysis and growth projections to right-size your infrastructure investment.' },
      { title: 'High Availability Design', description: 'Redundancy and failover architectures that meet your uptime SLA requirements.' },
      { title: 'Security Architecture', description: 'Network segmentation, access controls, and security zone designs aligned with best practices.' },
      { title: 'Disaster Recovery Plan', description: 'DR strategy with RPO/RTO targets, backup architectures, and failover procedures.' },
      { title: 'Bill of Materials', description: 'Comprehensive hardware and software lists with pricing for informed budget decisions.' },
      { title: 'Migration Strategy', description: 'Phased migration plans to minimize downtime during infrastructure transitions.' },
      { title: 'Technology Roadmap', description: 'Multi-year technology evolution plan aligned with your business growth trajectory.' },
    ],
    process: [
      { step: 1, title: 'Discovery Workshop', description: 'Collaborative sessions to understand your business goals, current infrastructure, pain points, and growth plans.' },
      { step: 2, title: 'Assessment & Audit', description: 'Technical audit of existing infrastructure including performance baselines, bottleneck analysis, and risk assessment.' },
      { step: 3, title: 'Architecture Design', description: 'Detailed design of compute, storage, network, and security layers based on findings and requirements.' },
      { step: 4, title: 'Review & Refinement', description: 'Iterative design reviews with your team to validate technical decisions and optimize for budget.' },
      { step: 5, title: 'Documentation', description: 'Complete design documents, BOMs, implementation guides, and operational runbooks.' },
    ],
    benefits: [
      { title: 'Future-Ready Design', description: 'Architectures that scale seamlessly with your business growth without costly redesigns.' },
      { title: 'Reduced Downtime', description: 'Built-in redundancy and failover mechanisms that keep your operations running 24/7.' },
      { title: 'Cost Optimization', description: 'Right-sized infrastructure eliminates over-provisioning and reduces total cost of ownership.' },
      { title: 'Compliance Ready', description: 'Designs that incorporate regulatory requirements from the start, avoiding costly retrofits.' },
      { title: 'Vendor Agnostic', description: 'Best-of-breed recommendations without vendor lock-in, giving you flexibility and leverage.' },
      { title: 'Faster Deployment', description: 'Detailed blueprints and BOMs mean implementation teams can execute without ambiguity.' },
    ],
    technologies: ['VMware vSphere', 'Microsoft Hyper-V', 'Cisco ACI', 'Dell VxRail', 'HPE Synergy', 'Nutanix', 'Veeam', 'Zerto'],
    industries: ['Banking & Finance', 'Healthcare', 'Education', 'Manufacturing', 'IT/ITES', 'Government'],
    faqs: [
      { question: 'How long does a typical infrastructure design engagement take?', answer: 'Small to mid-size designs typically take 2-4 weeks. Large data center or campus designs may take 6-8 weeks.' },
      { question: 'Do you design hybrid cloud architectures?', answer: 'Yes. We design hybrid environments that integrate on-premises infrastructure with AWS, Azure, or Google Cloud.' },
      { question: 'Can you work with our existing infrastructure?', answer: 'Our designs integrate with and optimize your current environment. We never recommend rip-and-replace unless it is the most cost-effective path.' },
      { question: 'Do you provide implementation services too?', answer: 'Yes. We offer end-to-end services from design through implementation and ongoing support.' },
      { question: 'What compliance frameworks do you design for?', answer: 'We design for ISO 27001, PCI DSS, HIPAA, SOC 2, and Indian regulatory requirements including RBI and CERT-In guidelines.' },
    ],
  },
  {
    id: 'maintenance-support',
    slug: 'maintenance-support',
    title: 'Maintenance & AMC Services',
    shortTitle: 'Maintenance',
    icon: 'wrench',
    description: 'Keep your infrastructure running at peak performance with proactive maintenance, 24/7 support, and comprehensive annual maintenance contracts.',
    overview: 'Our Annual Maintenance Contract (AMC) services provide comprehensive care for your entire IT infrastructure. We offer multi-tier support packages ranging from basic hardware break-fix to fully managed services with proactive monitoring and guaranteed response times. Our certified engineers are stationed across Bangalore and Delhi, ensuring rapid on-site response when critical issues arise. We support multi-vendor environments covering servers, storage, networking equipment, UPS systems, and workstations from all major OEMs. Every AMC includes regular preventive maintenance schedules, firmware and security patch management, performance monitoring, and detailed health reports. Our proactive approach identifies and resolves potential issues before they impact your business, keeping your infrastructure available, secure, and performing optimally.',
    deliverables: [
      { title: '24/7 Helpdesk', description: 'Round-the-clock technical support via phone, email, and remote access for AMC clients.' },
      { title: 'On-Site Support', description: 'Certified engineers dispatched for hardware issues with 4-hour SLA for critical systems.' },
      { title: 'Preventive Maintenance', description: 'Quarterly scheduled maintenance including hardware cleaning, firmware updates, and health checks.' },
      { title: 'Spare Parts Management', description: 'Critical spare parts inventory maintained for rapid replacement during hardware failures.' },
      { title: 'Performance Monitoring', description: 'Proactive monitoring of server health, storage utilization, and network performance metrics.' },
      { title: 'Security Patching', description: 'Regular security updates and firmware patches applied during maintenance windows.' },
      { title: 'Health Reports', description: 'Monthly infrastructure health reports with recommendations and capacity planning insights.' },
      { title: 'Asset Management', description: 'Complete asset lifecycle tracking from deployment through retirement.' },
    ],
    process: [
      { step: 1, title: 'Infrastructure Audit', description: 'Complete inventory and health assessment of all covered hardware and software assets.' },
      { step: 2, title: 'SLA Definition', description: 'Define response times, resolution targets, and escalation paths based on your business criticality.' },
      { step: 3, title: 'Onboarding', description: 'Documentation of all assets, network diagrams, access credentials, and contact escalation matrix.' },
      { step: 4, title: 'Monitoring Setup', description: 'Deploy monitoring agents and configure alerts for proactive issue detection.' },
      { step: 5, title: 'Ongoing Maintenance', description: 'Regular preventive maintenance cycles, incident management, and quarterly business reviews.' },
      { step: 6, title: 'Continuous Improvement', description: 'Regular reviews to optimize performance, identify upgrade opportunities, and reduce incident rates.' },
    ],
    benefits: [
      { title: 'Predictable IT Costs', description: 'Fixed annual contracts eliminate surprise repair bills and help budget planning.' },
      { title: 'Maximized Uptime', description: 'Proactive maintenance and rapid response keep your systems running with 99.9% availability.' },
      { title: 'Expert Access', description: 'OEM-certified engineers with deep expertise across Dell, HP, Cisco, and Lenovo platforms.' },
      { title: 'Extended Equipment Life', description: 'Regular maintenance extends hardware lifespan by 2-3 years, improving ROI.' },
      { title: 'Reduced IT Burden', description: 'Your internal IT team can focus on strategic initiatives while we handle operations.' },
      { title: 'Compliance Support', description: 'Maintenance records and audit trails support regulatory compliance requirements.' },
    ],
    technologies: ['Dell OpenManage', 'HPE iLO/OneView', 'Cisco Prime', 'SNMP Monitoring', 'Nagios', 'Zabbix', 'SolarWinds'],
    industries: ['Banking & Finance', 'Healthcare', 'Education', 'Manufacturing', 'IT/ITES', 'Government'],
    faqs: [
      { question: 'What are the different AMC tiers?', answer: 'We offer three tiers: Basic (break-fix with NBD response), Standard (proactive monitoring with 4-hour response), and Premium (fully managed with 2-hour critical response and dedicated engineer).' },
      { question: 'Do you support multi-vendor environments?', answer: 'Yes. A single AMC can cover equipment from Dell, HP, Cisco, Lenovo, and other OEMs.' },
      { question: 'What is the on-site response time?', answer: 'Critical issues: 2-4 hours. Standard issues: next business day. Response times vary by tier.' },
      { question: 'Do you provide spare parts?', answer: 'Premium and Standard tiers include critical spare parts. Basic tier spare parts are billed separately.' },
      { question: 'Can we add new equipment to an existing AMC?', answer: 'Yes. Equipment can be added mid-term with prorated pricing for the remaining contract period.' },
    ],
  },
  {
    id: 'it-consulting',
    slug: 'it-consulting',
    title: 'IT Strategy & Consulting',
    shortTitle: 'Consulting',
    icon: 'lightbulb',
    description: 'Transform your IT operations with strategic consulting, technology roadmapping, and expert guidance for digital transformation initiatives.',
    overview: 'Prathik Softnet\'s consulting practice helps organizations align their IT infrastructure with business goals. Our consultants bring hands-on experience from hundreds of enterprise deployments across banking, healthcare, manufacturing, and government sectors. We work closely with your leadership to evaluate current infrastructure maturity, identify improvement opportunities, and create actionable technology roadmaps. Whether you are planning a data center consolidation, evaluating hybrid cloud strategies, or preparing for regulatory compliance audits, our team provides objective, vendor-agnostic advice backed by real-world implementation experience. We do not just advise; we partner with you through execution, ensuring that strategies translate into measurable business outcomes.',
    deliverables: [
      { title: 'IT Maturity Assessment', description: 'Comprehensive evaluation of your current IT infrastructure against industry benchmarks.' },
      { title: 'Technology Roadmap', description: '3-5 year technology evolution plan aligned with business objectives and budget.' },
      { title: 'TCO Analysis', description: 'Total cost of ownership comparisons for infrastructure options including cloud vs on-premises.' },
      { title: 'Vendor Evaluation', description: 'Objective comparison of technology vendors based on your specific requirements.' },
      { title: 'Compliance Gap Analysis', description: 'Assessment of infrastructure gaps against ISO, PCI DSS, HIPAA, or other regulatory frameworks.' },
      { title: 'Budget Planning', description: 'CapEx and OpEx forecasting for planned infrastructure investments.' },
      { title: 'Risk Assessment', description: 'Infrastructure risk analysis with mitigation strategies and business continuity planning.' },
      { title: 'RFP Development', description: 'Professional RFP documentation for competitive vendor evaluation and procurement.' },
    ],
    process: [
      { step: 1, title: 'Stakeholder Interviews', description: 'Discussions with business and IT leaders to understand strategic goals and pain points.' },
      { step: 2, title: 'Current State Assessment', description: 'Deep-dive into existing infrastructure, processes, tools, and team capabilities.' },
      { step: 3, title: 'Gap Analysis', description: 'Identification of gaps between current state and desired business outcomes.' },
      { step: 4, title: 'Strategy Development', description: 'Actionable recommendations with prioritization, timelines, and resource requirements.' },
      { step: 5, title: 'Executive Presentation', description: 'Clear, business-focused presentation of findings and recommendations for decision-makers.' },
    ],
    benefits: [
      { title: 'Informed Decisions', description: 'Data-driven recommendations reduce the risk of costly technology mistakes.' },
      { title: 'Vendor Independence', description: 'Objective advice without vendor bias ensures you choose the best solutions.' },
      { title: 'Cost Optimization', description: 'Identify savings through infrastructure consolidation, right-sizing, and vendor negotiation.' },
      { title: 'Risk Reduction', description: 'Proactive identification of infrastructure risks before they become business problems.' },
      { title: 'Faster Execution', description: 'Clear roadmaps accelerate project delivery and reduce implementation uncertainties.' },
      { title: 'Board-Ready Reports', description: 'Professional documentation that supports IT investment discussions with leadership.' },
    ],
    technologies: ['ITIL Framework', 'TOGAF', 'Cloud Assessment Tools', 'TCO Calculators', 'Risk Frameworks', 'Compliance Tools'],
    industries: ['Banking & Finance', 'Healthcare', 'Education', 'Manufacturing', 'IT/ITES', 'Government'],
    faqs: [
      { question: 'What size organizations do you consult for?', answer: 'We serve mid-market (100-500 employees) to large enterprises (5000+). Our consulting approach scales to your organization size.' },
      { question: 'Is consulting available remotely?', answer: 'Yes. We offer both on-site and remote consulting engagements, with hybrid models being most common.' },
      { question: 'How is consulting priced?', answer: 'We offer both fixed-fee project engagements and retainer-based advisory services depending on scope.' },
      { question: 'Do you help with cloud migration strategy?', answer: 'Yes. We help evaluate cloud readiness, compare providers, and develop migration strategies.' },
      { question: 'Can you help with IT budgeting?', answer: 'Our TCO models and budget planning deliverables help CIOs build compelling infrastructure investment cases.' },
    ],
  },
  {
    id: 'installation-integration',
    slug: 'installation-integration',
    title: 'Installation & Integration',
    shortTitle: 'Integration',
    icon: 'settings',
    description: 'Expert deployment, configuration, and integration of enterprise IT hardware and systems with minimal downtime and maximum reliability.',
    overview: 'Our installation and integration team handles the physical and logical deployment of enterprise IT infrastructure. From rack-and-stack operations in data centers to complex multi-vendor integrations, our certified engineers ensure every component is installed, configured, and tested to manufacturer specifications and your operational standards. We manage complete server deployments, storage provisioning, network switch configurations, firewall rule implementations, and virtualization platform installations. Every project follows a structured methodology with detailed project plans, change management procedures, and post-implementation validation. Our goal is zero-downtime deployments through meticulous planning, after-hours execution when required, and thorough testing before handover.',
    deliverables: [
      { title: 'Rack & Stack', description: 'Physical installation of servers, storage, and networking equipment in your data center.' },
      { title: 'OS & Hypervisor Install', description: 'Operating system and virtualization platform installation with security hardening.' },
      { title: 'Network Configuration', description: 'Switch, router, and firewall configuration including VLANs, routing, and security policies.' },
      { title: 'Storage Provisioning', description: 'SAN/NAS configuration, LUN provisioning, and storage tiering implementation.' },
      { title: 'System Integration', description: 'Integration of new hardware with existing infrastructure, applications, and monitoring tools.' },
      { title: 'Data Migration', description: 'Secure migration of data, VMs, and applications from old to new infrastructure.' },
      { title: 'Testing & Validation', description: 'Comprehensive testing including burn-in, performance benchmarks, and failover validation.' },
      { title: 'Documentation & Training', description: 'As-built documentation, runbooks, and hands-on training for your operations team.' },
    ],
    process: [
      { step: 1, title: 'Site Survey', description: 'Physical site assessment including power, cooling, rack space, and connectivity requirements.' },
      { step: 2, title: 'Project Planning', description: 'Detailed implementation plan with tasks, dependencies, resource allocation, and risk mitigation.' },
      { step: 3, title: 'Pre-Staging', description: 'Hardware configuration and testing in our lab before delivery to your site.' },
      { step: 4, title: 'Installation', description: 'Physical deployment and logical configuration according to approved design documents.' },
      { step: 5, title: 'Integration Testing', description: 'End-to-end testing of all systems including connectivity, performance, and failover scenarios.' },
      { step: 6, title: 'Handover', description: 'Formal handover with documentation, training, and transition to support team.' },
    ],
    benefits: [
      { title: 'Minimal Downtime', description: 'Structured deployment methodology and after-hours execution minimize business disruption.' },
      { title: 'First-Time Right', description: 'Pre-staging and thorough testing ensure systems work correctly from day one.' },
      { title: 'Certified Engineers', description: 'Dell, HP, Cisco, and VMware certified professionals handle your deployments.' },
      { title: 'Complete Documentation', description: 'Detailed as-built documents serve as reference for operations and future changes.' },
      { title: 'Knowledge Transfer', description: 'Hands-on training ensures your team can manage the new environment confidently.' },
      { title: 'Warranty Protection', description: 'Professional installation ensures manufacturer warranty terms are fully honored.' },
    ],
    technologies: ['VMware ESXi', 'Windows Server', 'Red Hat Linux', 'Cisco IOS/NX-OS', 'Dell iDRAC', 'HPE iLO', 'Ansible', 'PowerShell'],
    industries: ['Banking & Finance', 'Healthcare', 'Education', 'Manufacturing', 'IT/ITES', 'Government'],
    faqs: [
      { question: 'Do you provide after-hours installation?', answer: 'Yes. Critical installations are scheduled during maintenance windows or weekends to minimize business impact.' },
      { question: 'What is the typical project timeline?', answer: 'Simple server deployments take 1-2 days. Full data center builds can range from 2-8 weeks.' },
      { question: 'Do you handle cable management?', answer: 'Yes. Proper cable management is included in all rack-and-stack deployments as standard practice.' },
      { question: 'Can you integrate with our existing monitoring tools?', answer: 'Yes. We configure SNMP, WMI, and other protocols to integrate with tools like Nagios, SolarWinds, or PRTG.' },
      { question: 'Do you provide post-installation support?', answer: 'All installations include a 30-day post-deployment warranty period. We also offer AMC packages.' },
    ],
  },
];

// ============================================================
// PRODUCTS
// ============================================================

export interface Product {
  id: string;
  name: string;
  category: 'servers' | 'storage' | 'networking' | 'workstations';
  brand: string;
  description: string;
  specs: string[];
  useCases: string[];
  image: string;
}

export const PRODUCTS: Product[] = [
  // SERVERS
  {
    id: 'dell-r750',
    name: 'Dell PowerEdge R750',
    category: 'servers',
    brand: 'Dell',
    description: 'A 2U rack server designed for demanding workloads. The PowerEdge R750 delivers exceptional performance with 3rd Gen Intel Xeon Scalable processors, up to 32 DDR5 DIMM slots, and versatile storage configurations for virtualization, databases, and AI inference workloads.',
    specs: ['3rd Gen Intel Xeon Scalable (up to 2 CPUs)', 'Up to 32x DDR5 DIMM slots (8TB max)', '24x 2.5" SAS/SATA/NVMe drives', 'PCIe Gen5 ready', 'Redundant 800W/1400W/2400W PSU', 'iDRAC9 Enterprise management', '2U rack form factor', 'BOSS-S2 boot optimized storage'],
    useCases: ['Virtualization', 'Databases', 'AI/ML Inference', 'ERP Systems'],
    image: '/assets/images/products/server-dell-r750.svg',
  },
  {
    id: 'dell-r650',
    name: 'Dell PowerEdge R650',
    category: 'servers',
    brand: 'Dell',
    description: 'A density-optimized 1U rack server with a balanced design of performance, capacity, and scalability for diverse workloads. The R650 is ideal for dense virtualization, software-defined storage, and cloud-native applications requiring compute in a compact form factor.',
    specs: ['3rd Gen Intel Xeon Scalable (up to 2 CPUs)', 'Up to 32x DDR5 DIMM slots', '10x 2.5" or 4x 3.5" drives', 'PCIe Gen4 expansion slots', 'Redundant hot-plug PSU', 'iDRAC9 Enterprise', '1U rack form factor', 'OpenManage Enterprise ready'],
    useCases: ['Dense Virtualization', 'Cloud Infrastructure', 'Web Hosting', 'Edge Computing'],
    image: '/assets/images/products/server-dell-r650.svg',
  },
  {
    id: 'dell-r450',
    name: 'Dell PowerEdge R450',
    category: 'servers',
    brand: 'Dell',
    description: 'An affordable 1U rack server for essential workloads. The R450 delivers solid performance for small to mid-size organizations with 3rd Gen Intel Xeon processors, reliable storage options, and simplified management capabilities at an attractive price point.',
    specs: ['3rd Gen Intel Xeon Scalable (up to 2 CPUs)', 'Up to 16x DDR4 DIMM slots', '4x 3.5" or 8x 2.5" drives', 'PCIe Gen4 slots', 'Redundant 600W/800W PSU', 'iDRAC9 Express/Enterprise', '1U form factor', 'Energy-efficient design'],
    useCases: ['SMB Workloads', 'File Servers', 'Mail Servers', 'Branch Office'],
    image: '/assets/images/products/server-dell-r450.svg',
  },
  {
    id: 'hpe-dl380-gen11',
    name: 'HPE ProLiant DL380 Gen11',
    category: 'servers',
    brand: 'HPE',
    description: 'The industry-standard 2U server, now in its 11th generation. The DL380 Gen11 features 4th Gen Intel Xeon Scalable processors with built-in accelerators, PCIe Gen5, and DDR5 memory for compute-intensive workloads across hybrid cloud environments.',
    specs: ['4th Gen Intel Xeon Scalable (up to 2 CPUs)', 'Up to 32x DDR5 DIMM slots (8TB max)', 'Up to 24x SFF or 12x LFF drives', 'PCIe Gen5 expansion', 'HPE iLO 6 management', '800W/1600W Flex Slot PSU', '2U rack form factor', 'Silicon Root of Trust security'],
    useCases: ['Enterprise Virtualization', 'Private Cloud', 'SAP HANA', 'Database Clusters'],
    image: '/assets/images/products/server-hpe-dl380.svg',
  },
  {
    id: 'hpe-dl360-gen11',
    name: 'HPE ProLiant DL360 Gen11',
    category: 'servers',
    brand: 'HPE',
    description: 'A compact 1U server delivering Gen11 performance for space-constrained environments. The DL360 Gen11 combines density with enterprise-grade reliability, making it ideal for data center consolidation and compute-dense deployments.',
    specs: ['4th Gen Intel Xeon Scalable (up to 2 CPUs)', 'Up to 32x DDR5 DIMM slots', 'Up to 10x SFF drives', 'PCIe Gen5 slots', 'HPE iLO 6 Advanced', 'Redundant Flex Slot PSU', '1U form factor', 'HPE GreenLake ready'],
    useCases: ['Data Center Consolidation', 'High-Density Computing', 'DevOps', 'Containers/Kubernetes'],
    image: '/assets/images/products/server-hpe-dl360.svg',
  },
  {
    id: 'lenovo-sr650',
    name: 'Lenovo ThinkSystem SR650 V3',
    category: 'servers',
    brand: 'Lenovo',
    description: 'A versatile 2U rack server featuring 4th Gen Intel Xeon Scalable processors with industry-leading reliability. The SR650 V3 supports a wide range of enterprise workloads with flexible storage, GPU support, and comprehensive management capabilities.',
    specs: ['4th Gen Intel Xeon Scalable (up to 2 CPUs)', 'Up to 32x DDR5 DIMM slots', 'Up to 40x 2.5" drive bays', 'PCIe Gen5 expansion', 'XClarity Controller (BMC)', 'Titanium-rated PSU options', '2U rack form factor', 'GPU support (up to 4 GPUs)'],
    useCases: ['Enterprise Applications', 'AI/ML Training', 'Big Data Analytics', 'VDI'],
    image: '/assets/images/products/server-lenovo-sr650.svg',
  },
  {
    id: 'lenovo-sr630',
    name: 'Lenovo ThinkSystem SR630 V3',
    category: 'servers',
    brand: 'Lenovo',
    description: 'A compact 1U server built for reliability and performance in demanding data center environments. The SR630 V3 offers flexible I/O, efficient cooling, and enterprise-grade management for mission-critical applications.',
    specs: ['4th Gen Intel Xeon Scalable (up to 2 CPUs)', 'Up to 32x DDR5 DIMM slots', 'Up to 10x 2.5" drives', 'PCIe Gen5 I/O', 'Lenovo XClarity management', 'Redundant hot-swap PSU', '1U rack form factor', 'ThinkShield security'],
    useCases: ['Cloud Infrastructure', 'Web Applications', 'Email & Messaging', 'Remote Office'],
    image: '/assets/images/products/server-lenovo-sr630.svg',
  },
  {
    id: 'cisco-ucs-c240',
    name: 'Cisco UCS C240 M7',
    category: 'servers',
    brand: 'Cisco',
    description: 'A 2U enterprise rack server designed for storage-heavy and I/O-intensive workloads. The UCS C240 M7 integrates seamlessly with Cisco UCS management for unified infrastructure operations across compute, networking, and storage.',
    specs: ['4th Gen Intel Xeon Scalable (up to 2 CPUs)', 'Up to 32x DDR5 DIMM slots', 'Up to 26x 2.5" drives', 'PCIe Gen5 slots', 'Cisco IMC management', 'Cisco UCS Manager integration', '2U rack form factor', 'Intersight cloud operations'],
    useCases: ['Collaboration Platforms', 'Big Data', 'Medical Imaging', 'Video Surveillance'],
    image: '/assets/images/products/server-cisco-ucs.svg',
  },
  // STORAGE
  {
    id: 'dell-powerstore',
    name: 'Dell PowerStore',
    category: 'storage',
    brand: 'Dell',
    description: 'A modern data-centric storage platform that delivers exceptional performance with NVMe end-to-end, built-in machine learning for autonomous optimization, and a flexible architecture that supports block, file, and vVol workloads on a single platform.',
    specs: ['End-to-end NVMe architecture', 'Inline deduplication & compression', 'Built-in ML for auto-tiering', 'Block, File & vVol support', 'Active-Active clustering', '7:1 data reduction guarantee', 'AppsON capability (native hypervisor)', 'CloudIQ predictive analytics'],
    useCases: ['Database Acceleration', 'VMware Datastores', 'Mixed Workloads', 'DevOps Environments'],
    image: '/assets/images/products/storage-dell-powerstore.svg',
  },
  {
    id: 'dell-unity-xt',
    name: 'Dell Unity XT',
    category: 'storage',
    brand: 'Dell',
    description: 'A unified midrange storage platform designed for simplicity and efficiency. Unity XT delivers enterprise features at midrange pricing with all-flash and hybrid configurations for organizations seeking reliable, easy-to-manage storage.',
    specs: ['All-Flash and Hybrid options', 'Unified Block, File, vVol', 'Inline deduplication & compression', 'Dual-active controller architecture', 'Synchronous replication', 'Unisphere management interface', 'Cloud tiering to public cloud', '5:1 data reduction'],
    useCases: ['SMB/Mid-Market', 'File Sharing', 'Virtualization', 'Backup Targets'],
    image: '/assets/images/products/storage-dell-unity.svg',
  },
  {
    id: 'netapp-aff-a400',
    name: 'NetApp AFF A400',
    category: 'storage',
    brand: 'NetApp',
    description: 'An all-flash FAS system that delivers high performance and enterprise-grade data management. The AFF A400 combines NVMe speed with ONTAP software for comprehensive data protection, efficiency, and multi-cloud integration.',
    specs: ['NVMe/Flash optimized design', 'NetApp ONTAP data management', 'Inline deduplication & compression', 'SnapMirror replication', 'FabricPool cloud tiering', 'Multi-protocol (NFS, CIFS, iSCSI, FC)', 'Active-Active configuration', 'NetApp Cloud Volumes ONTAP'],
    useCases: ['Enterprise NAS', 'Oracle/SQL Databases', 'SAP Applications', 'Healthcare PACS'],
    image: '/assets/images/products/storage-netapp-aff.svg',
  },
  {
    id: 'hpe-nimble',
    name: 'HPE Nimble Storage',
    category: 'storage',
    brand: 'HPE',
    description: 'An intelligent storage platform with predictive analytics powered by HPE InfoSight. Nimble Storage delivers six nines availability through AI-driven operations, making it one of the most reliable storage platforms on the market.',
    specs: ['All-Flash and Adaptive Flash arrays', 'HPE InfoSight predictive analytics', '99.9999% measured availability', 'Inline deduplication & compression', 'Multi-protocol (iSCSI, FC, NFS)', 'SmartStack validated designs', 'Cloud-based management', 'Non-disruptive upgrades'],
    useCases: ['Business Critical Apps', 'SQL/Oracle Databases', 'VDI Infrastructure', 'Disaster Recovery'],
    image: '/assets/images/products/storage-hpe-nimble.svg',
  },
  {
    id: 'netapp-fas',
    name: 'NetApp FAS Series',
    category: 'storage',
    brand: 'NetApp',
    description: 'A hybrid flash storage system that balances performance with capacity for organizations with diverse workload requirements. The FAS Series combines flash acceleration with high-capacity HDDs for cost-effective tiered storage.',
    specs: ['Hybrid Flash + HDD architecture', 'NetApp ONTAP software', 'Flash Pool acceleration', 'Multi-protocol support', 'SnapMirror & SnapVault', 'Data tiering with FabricPool', 'Scalable to petabytes', 'ONTAP cloud integration'],
    useCases: ['Archival Storage', 'Backup & Recovery', 'File Services', 'Secondary Storage'],
    image: '/assets/images/products/storage-netapp-fas.svg',
  },
  {
    id: 'pure-flasharray',
    name: 'Pure Storage FlashArray//X',
    category: 'storage',
    brand: 'Pure Storage',
    description: 'An all-NVMe flash array that delivers consistent sub-millisecond latency for the most demanding enterprise workloads. FlashArray//X features an Evergreen Storage subscription model for non-disruptive upgrades and guaranteed storage efficiency.',
    specs: ['All-NVMe architecture', 'DirectFlash modules', 'Purity operating environment', 'ActiveCluster for HA', 'Evergreen Storage subscription', 'Always-on deduplication & compression', 'Pure1 cloud management', '10:1 total efficiency guarantee'],
    useCases: ['Tier-1 Applications', 'Real-Time Analytics', 'AI/ML Data Pipelines', 'DevOps Fast Storage'],
    image: '/assets/images/products/storage-pure-flasharray.svg',
  },
  // NETWORKING
  {
    id: 'cisco-catalyst-9300',
    name: 'Cisco Catalyst 9300 Series',
    category: 'networking',
    brand: 'Cisco',
    description: 'The next generation of the industry\'s most widely deployed stackable enterprise switching platform. The Catalyst 9300 is built for security, IoT, and cloud with Cisco IOS-XE, UADP 2.0 ASIC, and DNA Center integration.',
    specs: ['24/48 port GbE and mGig models', 'UADP 2.0 programmable ASIC', 'Cisco IOS-XE operating system', 'SD-Access ready', 'StackWise-480 technology', 'Modular uplink options (1G/10G/25G)', 'MACsec 256-bit encryption', 'Cisco DNA Center integration'],
    useCases: ['Campus Core/Distribution', 'SD-Access Fabric', 'IoT Connectivity', 'Secure Segmentation'],
    image: '/assets/images/products/network-cisco-9300.svg',
  },
  {
    id: 'cisco-catalyst-9200',
    name: 'Cisco Catalyst 9200 Series',
    category: 'networking',
    brand: 'Cisco',
    description: 'An entry-level enterprise switch bringing full Catalyst intent-based networking to every network edge. The 9200 series provides essential security, segmentation, and automation capabilities at an accessible price point.',
    specs: ['24/48 port GbE models', 'PoE+ and PoE++ support', 'Fixed and modular uplinks', 'Cisco IOS-XE', 'StackWise-160 stacking', '1G/10G uplink options', 'TrustWorthy technology', 'DNA Essentials included'],
    useCases: ['Access Layer Switching', 'Branch Office', 'PoE Deployments', 'Wireless AP Connectivity'],
    image: '/assets/images/products/network-cisco-9200.svg',
  },
  {
    id: 'cisco-meraki-mx',
    name: 'Cisco Meraki MX Series',
    category: 'networking',
    brand: 'Cisco',
    description: 'Cloud-managed security and SD-WAN appliances that simplify branch networking. The Meraki MX combines next-generation firewall, VPN, and SD-WAN capabilities with intuitive cloud management through the Meraki dashboard.',
    specs: ['Cloud-managed SD-WAN', 'Next-gen firewall (NGFW)', 'Auto VPN mesh networking', 'Content filtering & IPS', 'Application-aware traffic shaping', 'Cisco AMP for threat protection', 'Integrated LTE failover', 'Zero-touch deployment'],
    useCases: ['Branch Networking', 'SD-WAN', 'Retail Store Networks', 'Remote Site Security'],
    image: '/assets/images/products/network-meraki-mx.svg',
  },
  {
    id: 'hpe-aruba',
    name: 'HPE Aruba CX Switches',
    category: 'networking',
    brand: 'HPE',
    description: 'Modern campus switches built on AOS-CX, a cloud-native, microservices-based operating system. Aruba CX switches deliver automation, analytics, and always-on reliability for dynamic enterprise networks.',
    specs: ['AOS-CX operating system', 'REST API & programmability', 'VSX virtual switching', 'Dynamic segmentation', 'Network Analytics Engine (NAE)', '1G to 100G port speeds', 'Aruba Central cloud management', 'Built-in network analytics'],
    useCases: ['Modern Campus Networks', 'Network Automation', 'IoT Segmentation', 'High-Performance Core'],
    image: '/assets/images/products/network-aruba-cx.svg',
  },
  {
    id: 'fortinet-fortigate',
    name: 'Fortinet FortiGate Series',
    category: 'networking',
    brand: 'Fortinet',
    description: 'Next-generation firewalls powered by purpose-built security processors and AI-driven threat intelligence. FortiGate delivers industry-leading threat protection, SSL inspection, and SD-WAN in a unified platform.',
    specs: ['FortiOS operating system', 'SPU security processors', 'AI/ML threat detection', 'SSL deep inspection', 'SD-WAN integration', 'ZTNA enforcement', 'FortiGuard security services', 'Fabric integration'],
    useCases: ['Perimeter Security', 'Internal Segmentation', 'SD-WAN', 'Zero Trust Access'],
    image: '/assets/images/products/network-fortinet.svg',
  },
  {
    id: 'palo-alto-pa',
    name: 'Palo Alto Networks PA-Series',
    category: 'networking',
    brand: 'Palo Alto',
    description: 'ML-powered next-generation firewalls that deliver inline machine learning for real-time threat prevention. The PA-Series provides granular application visibility, user-based policies, and advanced threat intelligence.',
    specs: ['PAN-OS operating system', 'Single-pass architecture', 'App-ID technology', 'User-ID identification', 'Inline ML threat prevention', 'WildFire malware analysis', 'Panorama central management', 'Prisma Access integration'],
    useCases: ['Data Center Security', 'Campus Perimeter', 'Regulatory Compliance', 'Advanced Threat Prevention'],
    image: '/assets/images/products/network-paloalto.svg',
  },
  {
    id: 'juniper-ex',
    name: 'Juniper EX Series',
    category: 'networking',
    brand: 'Juniper',
    description: 'High-performance Ethernet switches designed for enterprise campus, branch, and data center access. The EX Series features Junos OS for operational simplicity and Mist AI for intelligent network operations.',
    specs: ['Junos OS operating system', 'Virtual Chassis technology', 'Mist AI integration', '1G/10G/25G/40G/100G options', 'MACsec encryption', 'EVPN-VXLAN support', 'Zero Trust security', 'Juniper Apstra automation'],
    useCases: ['Campus Access/Distribution', 'Data Center Leaf/Spine', 'Mist AI-Driven Operations', 'Secure Microsegmentation'],
    image: '/assets/images/products/network-juniper-ex.svg',
  },
  {
    id: 'cisco-meraki-ms',
    name: 'Cisco Meraki MS Series',
    category: 'networking',
    brand: 'Cisco',
    description: 'Cloud-managed access switches with integrated wireless management and intuitive dashboard control. The MS Series simplifies network administration with zero-touch provisioning and cloud-based monitoring.',
    specs: ['Cloud-managed via Meraki Dashboard', '24/48 port GbE models', 'PoE/PoE+ support', 'Stacking capability', 'Access policy management', 'Real-time diagnostics', 'Layer 3 routing', 'Automatic firmware updates'],
    useCases: ['Cloud-Managed Campus', 'Hospitality Networks', 'Education Campuses', 'Multi-Site Management'],
    image: '/assets/images/products/network-meraki-ms.svg',
  },
  // WORKSTATIONS
  {
    id: 'dell-precision-7960',
    name: 'Dell Precision 7960 Tower',
    category: 'workstations',
    brand: 'Dell',
    description: 'A flagship tower workstation engineered for the most demanding professional workflows. The Precision 7960 supports dual Intel Xeon W processors, up to 4 professional GPUs, and massive memory capacity for CAD, simulation, and AI development.',
    specs: ['Intel Xeon W-3400 (up to 2 CPUs)', 'Up to 4TB DDR5 ECC memory', 'Up to 4x NVIDIA RTX 6000 Ada', 'Multiple NVMe + SATA storage', 'Thunderbolt 4 connectivity', '1450W PSU', 'ISV certified (AutoCAD, SolidWorks)', 'Dell Optimizer for Precision'],
    useCases: ['CAD/CAM Design', '3D Rendering', 'AI/ML Development', 'Scientific Computing'],
    image: '/assets/images/products/workstation-dell-7960.svg',
  },
  {
    id: 'dell-precision-5860',
    name: 'Dell Precision 5860 Tower',
    category: 'workstations',
    brand: 'Dell',
    description: 'A mainstream tower workstation balancing professional performance with a compact footprint. The Precision 5860 delivers Intel Xeon W power with professional GPU support for engineers, designers, and content creators.',
    specs: ['Intel Xeon W-2400 processor', 'Up to 512GB DDR5 ECC memory', 'Up to 2x NVIDIA RTX 4000 Ada', 'M.2 NVMe + 3.5" storage', 'Thunderbolt 4 ports', '500W efficient PSU', 'ISV certified', 'Tool-less chassis design'],
    useCases: ['Engineering Design', 'Video Editing', 'BIM Modeling', 'Data Analysis'],
    image: '/assets/images/products/workstation-dell-5860.svg',
  },
  {
    id: 'hp-z8-g5',
    name: 'HP Z8 G5 Workstation',
    category: 'workstations',
    brand: 'HP',
    description: 'The ultimate desktop workstation for extreme compute, visualization, and simulation workloads. The Z8 G5 offers dual Intel Xeon W processors, up to 4TB of memory, and support for the most powerful professional GPUs.',
    specs: ['Intel Xeon W-3400 (up to 2 CPUs)', 'Up to 4TB DDR5 ECC memory', 'Up to 3x NVIDIA RTX 6000 Ada', '10x drive bays', '1700W PSU', 'HP Z Turbo Drive storage', 'HP Sure Start / Sure Run', 'ISV certified platform'],
    useCases: ['Visual Effects', 'Simulation & FEA', 'AI Training', 'Genomics Analysis'],
    image: '/assets/images/products/workstation-hp-z8.svg',
  },
  {
    id: 'hp-z6-g5',
    name: 'HP Z6 G5 Workstation',
    category: 'workstations',
    brand: 'HP',
    description: 'A high-performance workstation designed for complex multi-threaded and GPU-accelerated workflows. The Z6 G5 delivers professional-grade reliability with expandability for growing workload demands.',
    specs: ['Intel Xeon W-3400 processor', 'Up to 1TB DDR5 ECC memory', 'Up to 2x NVIDIA RTX 4500 Ada', 'NVMe + SATA storage', '1125W PSU', 'HP Wolf Security', 'Tool-less access design', 'ENERGY STAR certified'],
    useCases: ['Product Design', 'Media & Entertainment', 'Architecture Visualization', 'Data Science'],
    image: '/assets/images/products/workstation-hp-z6.svg',
  },
  {
    id: 'lenovo-p620',
    name: 'Lenovo ThinkStation P620',
    category: 'workstations',
    brand: 'Lenovo',
    description: 'The world\'s first workstation powered by AMD Threadripper PRO processors, delivering unmatched multi-threaded performance. The P620 combines extreme core counts with professional GPU support for the most demanding workflows.',
    specs: ['AMD Threadripper PRO 5000 (up to 64 cores)', 'Up to 1TB DDR4 ECC memory', 'Up to 2x NVIDIA RTX A6000', '14x drive bays', 'PCIe Gen4 expansion', '1000W PSU', 'ThinkShield security', 'ISV certified'],
    useCases: ['Multi-threaded Workloads', 'Compilation & Build', 'Complex Simulation', 'Multi-GPU AI'],
    image: '/assets/images/products/workstation-lenovo-p620.svg',
  },
  {
    id: 'lenovo-p360',
    name: 'Lenovo ThinkStation P360 Tower',
    category: 'workstations',
    brand: 'Lenovo',
    description: 'An entry-level professional workstation that brings ISV-certified reliability to everyday design and engineering tasks. The P360 Tower offers 12th Gen Intel Core and Xeon options with professional GPU support.',
    specs: ['12th Gen Intel Core/Xeon W-1300', 'Up to 128GB DDR5 memory', 'NVIDIA RTX A2000/A4000', 'M.2 NVMe + HDD storage', 'Thunderbolt 4 port', '500W PSU', 'ISV certified', 'Compact tower design'],
    useCases: ['Entry-Level CAD', 'Office Engineering', 'Light 3D Design', 'Financial Modeling'],
    image: '/assets/images/products/workstation-lenovo-p360.svg',
  },
];

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Products', count: PRODUCTS.length },
  { id: 'servers', label: 'Servers', count: PRODUCTS.filter(p => p.category === 'servers').length },
  { id: 'storage', label: 'Storage', count: PRODUCTS.filter(p => p.category === 'storage').length },
  { id: 'networking', label: 'Networking', count: PRODUCTS.filter(p => p.category === 'networking').length },
  { id: 'workstations', label: 'Workstations', count: PRODUCTS.filter(p => p.category === 'workstations').length },
];

// ============================================================
// INDUSTRIES
// ============================================================

export interface Industry {
  id: string;
  slug: string;
  title: string;
  icon: string;
  description: string;
  overview: string;
  challenges: { title: string; description: string }[];
  solutions: string[];
  metrics: { value: string; label: string }[];
  compliance: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'bfsi',
    slug: 'banking-finance',
    title: 'Banking & Financial Services',
    icon: 'landmark',
    description: 'Secure, compliant, and high-performance IT infrastructure for banks, NBFCs, insurance companies, and fintech organizations.',
    overview: 'The banking and financial services industry demands IT infrastructure that operates with zero tolerance for downtime, data loss, or security breaches. Prathik Softnet serves leading banks, NBFCs, and fintech companies with infrastructure that meets stringent RBI compliance requirements, supports real-time transaction processing, and provides comprehensive data protection. Our solutions for BFSI span core banking infrastructure, disaster recovery implementations, network security architecture, and regulatory-compliant data storage.',
    challenges: [
      { title: 'Regulatory Compliance', description: 'Meeting RBI, SEBI, and IRDAI guidelines for IT infrastructure, data residency, and business continuity.' },
      { title: 'Zero-Downtime Operations', description: 'Core banking systems require 99.999% availability for uninterrupted financial transactions.' },
      { title: 'Data Security', description: 'Protecting sensitive financial data against increasingly sophisticated cyber threats and insider risks.' },
      { title: 'Disaster Recovery', description: 'Mandatory DR capabilities with defined RPO/RTO targets as per regulatory requirements.' },
    ],
    solutions: ['High-availability server clusters', 'SAN/NAS with synchronous replication', 'Next-gen firewalls with IPS/IDS', 'Compliant backup and archival systems', 'Network segmentation and microsegmentation'],
    metrics: [
      { value: '99.999%', label: 'System Availability' },
      { value: '<1ms', label: 'Transaction Latency' },
      { value: '5+', label: 'Banking Clients' },
      { value: 'RBI Compliant', label: 'Infrastructure' },
    ],
    compliance: ['RBI IT Guidelines', 'PCI DSS', 'ISO 27001', 'SOC 2 Type II', 'SEBI CSCRF'],
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    icon: 'heart-pulse',
    description: 'Reliable, secure IT infrastructure for hospitals, diagnostic centers, pharmaceutical companies, and medical research organizations.',
    overview: 'Healthcare organizations rely on IT infrastructure that must be available 24/7, support data-intensive imaging workloads, and comply with strict patient data privacy regulations. Prathik Softnet provides infrastructure solutions for hospital information systems, PACS/RIS imaging platforms, electronic medical records, laboratory information systems, and telemedicine platforms. Our solutions ensure patient data security, enable efficient clinical workflows, and support the growing demands of digital health initiatives.',
    challenges: [
      { title: 'HIPAA/Data Privacy', description: 'Protecting patient health information across systems while enabling authorized clinical access.' },
      { title: '24/7 System Availability', description: 'Clinical systems must operate round the clock without interruption for patient care continuity.' },
      { title: 'Medical Imaging Storage', description: 'PACS and DICOM systems require high-performance storage with long-term retention capabilities.' },
      { title: 'Multi-Location Connectivity', description: 'Connecting hospitals, clinics, diagnostic labs, and pharmacies with reliable secure networks.' },
    ],
    solutions: ['HIPAA-compliant server infrastructure', 'High-capacity NAS for PACS/DICOM', 'Redundant network architecture', 'Secure remote access for telemedicine', 'Backup with compliance retention policies'],
    metrics: [
      { value: '24/7', label: 'Uptime Guarantee' },
      { value: '5+', label: 'Healthcare Clients' },
      { value: 'PB-Scale', label: 'Imaging Storage' },
      { value: 'HIPAA', label: 'Compliant Infrastructure' },
    ],
    compliance: ['HIPAA', 'NABH IT Standards', 'ISO 27001', 'DISHA Guidelines', 'Digital Health Authority'],
  },
  {
    id: 'education',
    slug: 'education',
    title: 'Education & Research',
    icon: 'graduation-cap',
    description: 'Scalable campus networks, high-performance computing, and reliable infrastructure for universities, schools, and research institutions.',
    overview: 'Educational institutions require IT infrastructure that serves diverse needs, from campus-wide networking for thousands of students to high-performance computing for research. Prathik Softnet partners with universities, engineering colleges, schools, and research organizations to build networks, data centers, and computing environments that support modern education. Our solutions address e-learning platforms, campus Wi-Fi, student information systems, research computing clusters, and digital library systems.',
    challenges: [
      { title: 'Campus-Wide Connectivity', description: 'Providing reliable wired and wireless access across large campuses for thousands of simultaneous users.' },
      { title: 'Budget Constraints', description: 'Delivering enterprise-grade infrastructure within the financial limitations of educational budgets.' },
      { title: 'Research Computing', description: 'Supporting compute-intensive research workloads requiring HPC clusters and GPU resources.' },
      { title: 'Digital Learning Platforms', description: 'Infrastructure for LMS, video streaming, virtual labs, and online examination systems.' },
    ],
    solutions: ['Campus-wide Wi-Fi with centralized management', 'Server infrastructure for ERP and LMS', 'HPC clusters for research computing', 'Structured cabling and network infrastructure', 'Cost-effective storage for digital libraries'],
    metrics: [
      { value: '5000+', label: 'Users per Campus' },
      { value: '3+', label: 'Education Clients' },
      { value: '100%', label: 'Campus Coverage' },
      { value: 'NAAC', label: 'IT Standards Support' },
    ],
    compliance: ['UGC IT Guidelines', 'NAAC Requirements', 'AICTE Standards', 'NEP 2020 Digital Infrastructure', 'ERNET Connectivity'],
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    title: 'Manufacturing & Industrial',
    icon: 'factory',
    description: 'Robust IT infrastructure for manufacturing plants, supporting ERP systems, MES platforms, IoT connectivity, and industrial automation.',
    overview: 'Manufacturing organizations depend on IT infrastructure that bridges the gap between factory floor operations and enterprise management systems. Prathik Softnet serves discrete and process manufacturers with infrastructure that supports SAP and ERP deployments, manufacturing execution systems, industrial IoT platforms, and quality management applications. Our solutions are designed for the unique challenges of industrial environments including temperature extremes, dust, vibration, and the need for real-time data processing at the edge.',
    challenges: [
      { title: 'ERP Infrastructure', description: 'SAP and other ERP systems require high-performance compute and storage with guaranteed availability.' },
      { title: 'OT/IT Convergence', description: 'Connecting operational technology with IT systems securely for Industry 4.0 initiatives.' },
      { title: 'Industrial Environment', description: 'IT equipment must operate reliably in factory environments with dust, heat, and vibration.' },
      { title: 'Multi-Plant Connectivity', description: 'Connecting manufacturing plants, warehouses, and offices with reliable WAN infrastructure.' },
    ],
    solutions: ['SAP-certified server platforms', 'Industrial-grade edge computing', 'Secure OT/IT network segmentation', 'WAN/SD-WAN for multi-site connectivity', 'Ruggedized networking equipment'],
    metrics: [
      { value: '99.9%', label: 'Production System Uptime' },
      { value: '8+', label: 'Manufacturing Clients' },
      { value: 'SAP Certified', label: 'Infrastructure' },
      { value: 'Industry 4.0', label: 'Ready' },
    ],
    compliance: ['ISO 9001', 'ISO 14001', 'ISA/IEC 62443', 'Industry 4.0 Standards', 'CDSCO Guidelines'],
  },
  {
    id: 'it-ites',
    slug: 'it-ites',
    title: 'IT & ITES',
    icon: 'monitor',
    description: 'High-performance infrastructure for software companies, BPOs, KPOs, and technology startups powering digital innovation.',
    overview: 'IT and ITES companies require infrastructure that directly impacts their ability to serve clients and deliver digital products. Prathik Softnet partners with software development firms, BPOs, managed service providers, and technology startups to build infrastructure that supports development environments, production workloads, client data processing, and business continuity. Our solutions span cloud-ready data centers, development lab infrastructure, high-density computing for SaaS platforms, and secure multi-tenant environments.',
    challenges: [
      { title: 'Rapid Scaling', description: 'Infrastructure must scale quickly to support client project wins and business growth.' },
      { title: 'Multi-Tenant Security', description: 'Isolating client environments while maintaining operational efficiency and cost-effectiveness.' },
      { title: 'DevOps Infrastructure', description: 'CI/CD pipelines, container platforms, and development environments require flexible infrastructure.' },
      { title: 'Client SLA Compliance', description: 'Meeting strict client SLAs for uptime, security, and data handling.' },
    ],
    solutions: ['High-density compute for SaaS platforms', 'Container-ready infrastructure', 'Secure multi-tenant network architecture', 'Developer workstations with GPU support', 'DR and backup for client data protection'],
    metrics: [
      { value: '10+', label: 'IT Company Clients' },
      { value: 'Scale-Ready', label: 'Infrastructure' },
      { value: 'Multi-Cloud', label: 'Integration' },
      { value: 'SOC 2', label: 'Compliant Environments' },
    ],
    compliance: ['SOC 2 Type II', 'ISO 27001', 'GDPR Infrastructure', 'SSAE 18', 'Client-Specific Compliance'],
  },
  {
    id: 'government',
    slug: 'government',
    title: 'Government & PSUs',
    icon: 'building-2',
    description: 'Secure, compliant, and auditable IT infrastructure for central and state government departments, PSUs, and defense organizations.',
    overview: 'Government organizations require IT infrastructure that meets stringent security standards, supports GeM procurement processes, and complies with Indian government IT policies. Prathik Softnet is registered on GeM and serves central and state government departments, public sector undertakings, and quasi-government organizations. Our solutions adhere to MeitY guidelines, STQC certifications, and defense-grade security requirements while providing the reliability and documentation standards government projects demand.',
    challenges: [
      { title: 'Procurement Compliance', description: 'Adhering to GeM, GFR, and tender-based procurement processes with proper documentation.' },
      { title: 'Data Sovereignty', description: 'Ensuring data residency within India and compliance with government data protection policies.' },
      { title: 'Physical Security', description: 'Infrastructure security for sensitive government data and classified information systems.' },
      { title: 'Standardization', description: 'Meeting MeitY, NIC, and STQC standards for government IT infrastructure.' },
    ],
    solutions: ['GeM-registered procurement', 'MeitY-compliant infrastructure', 'Air-gapped secure environments', 'Government cloud-ready systems', 'Disaster recovery for e-governance'],
    metrics: [
      { value: 'GeM', label: 'Registered Vendor' },
      { value: '2+', label: 'Government Clients' },
      { value: 'MeitY', label: 'Compliant' },
      { value: 'Make in India', label: 'Supported' },
    ],
    compliance: ['MeitY Guidelines', 'STQC Certification', 'GeM Registration', 'NIC Standards', 'CERT-In Guidelines'],
  },
];

// ============================================================
// CASE STUDIES
// ============================================================

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  timeline: string;
  teamSize: string;
  results: { metric: string; value: string; description: string }[];
  testimonial: { quote: string; author: string; role: string };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-pravaig-dynamics',
    slug: 'pravaig-dynamics-infrastructure',
    title: 'IT Infrastructure Setup for Pravaig Dynamics',
    client: 'Pravaig Dynamics',
    industry: 'Electric Vehicles',
    challenge: 'Pravaig Dynamics, a Bangalore-based electric vehicle company, needed robust IT infrastructure to support their growing R&D and manufacturing operations. The existing setup could not handle the demands of CAD/CAE simulations, vehicle telemetry data processing, and collaboration across engineering teams. They required high-performance computing infrastructure with reliable storage and networking to support their EV development pipeline.',
    solution: 'Prathik Softnet designed and deployed a high-performance computing environment using Dell PowerEdge R750 servers for simulation workloads, Dell PowerStore for centralized high-speed storage, and Cisco Catalyst 9300 switches for the network backbone. We set up Lenovo ThinkStation P360 workstations for the engineering team with GPU acceleration for CAD applications. Fortinet FortiGate firewalls were deployed for network security, and Veeam backup ensured data protection for critical design files and IP.',
    technologies: ['Dell PowerEdge R750', 'Dell PowerStore', 'Cisco Catalyst 9300', 'Lenovo ThinkStation P360', 'Fortinet FortiGate', 'Veeam Backup', 'VMware vSphere'],
    timeline: '10 weeks',
    teamSize: '6 engineers',
    results: [
      { metric: 'Simulation Speed', value: '3x faster', description: 'CAD/CAE simulation workloads completed 3x faster on new infrastructure.' },
      { metric: 'Storage Performance', value: '5x IOPS', description: 'Storage throughput improved significantly for large design files and telemetry data.' },
      { metric: 'Uptime', value: '99.9%', description: 'Reliable infrastructure uptime supporting continuous R&D operations.' },
      { metric: 'Workstations Deployed', value: '20+', description: 'High-performance engineering workstations deployed for the design team.' },
    ],
    testimonial: {
      quote: 'Prathik Softnet understood our engineering requirements and delivered infrastructure that accelerated our EV development workflow. Their team was hands-on and ensured minimal disruption during the transition.',
      author: 'IT Lead',
      role: 'Pravaig Dynamics',
    },
  },
  {
    id: 'cs-pravaig-energy',
    slug: 'pravaig-energy-datacenter',
    title: 'Data Center Infrastructure for Pravaig Energy',
    client: 'Pravaig Energy',
    industry: 'Energy',
    challenge: 'Pravaig Energy needed a reliable and scalable data center infrastructure to support their energy management systems and operational monitoring platforms. Their existing infrastructure lacked redundancy, had limited storage capacity, and the network could not support real-time monitoring data from field deployments. They required a solution that ensured high availability and could scale as their operations grew.',
    solution: 'We deployed HPE ProLiant DL380 Gen11 servers in a high-availability configuration for their core applications, NetApp AFF storage for scalable data management, and Cisco Catalyst 9200 switches for reliable networking. The infrastructure was designed with redundant power and networking to ensure continuous operation. We implemented Veeam backup with offsite replication for disaster recovery and set up monitoring dashboards for infrastructure health and performance tracking.',
    technologies: ['HPE ProLiant DL380 Gen11', 'NetApp AFF Storage', 'Cisco Catalyst 9200', 'Veeam Backup', 'VMware vSphere', 'APC Smart-UPS', 'Fortinet FortiGate'],
    timeline: '8 weeks',
    teamSize: '5 engineers',
    results: [
      { metric: 'System Availability', value: '99.9%', description: 'High-availability infrastructure ensuring continuous operations.' },
      { metric: 'Storage Capacity', value: '10x growth', description: 'Scalable storage architecture supporting growing operational data needs.' },
      { metric: 'Recovery Time', value: 'RPO < 30 min', description: 'Automated backup and replication ensuring business continuity.' },
      { metric: 'Network Performance', value: '10Gbps', description: 'High-speed backbone supporting real-time monitoring and data processing.' },
    ],
    testimonial: {
      quote: 'Prathik Softnet delivered a solid infrastructure foundation for our operations. The high-availability setup and backup strategy give us confidence in our business continuity. Their team was responsive and professional throughout.',
      author: 'Head of IT',
      role: 'Pravaig Energy',
    },
  },
  {
    id: 'cs-atima',
    slug: 'atima-network-infrastructure',
    title: 'Network and Server Infrastructure for Atima',
    client: 'Atima',
    industry: 'Technology',
    challenge: 'Atima required a complete IT infrastructure overhaul to support their business operations. Their legacy network had frequent connectivity issues, the server infrastructure was aging with limited capacity, and there was no structured backup or disaster recovery plan in place. They needed a modern, reliable IT foundation with proper security and data protection.',
    solution: 'Prathik Softnet executed a full infrastructure refresh deploying Dell PowerEdge servers for compute workloads, Cisco Catalyst switches for a reliable and segmented network, and HPE Aruba wireless access points for seamless office connectivity. We implemented Fortinet FortiGate firewalls for perimeter security with VPN for remote access, structured cabling throughout the facility, and Veeam backup for comprehensive data protection. The deployment included end-user workstations and peripherals to complete the infrastructure modernization.',
    technologies: ['Dell PowerEdge Servers', 'Cisco Catalyst Switches', 'HPE Aruba Wireless', 'Fortinet FortiGate', 'Veeam Backup', 'Structured Cabling (Cat6A)', 'Dell OptiPlex Workstations'],
    timeline: '6 weeks',
    teamSize: '4 engineers',
    results: [
      { metric: 'Network Uptime', value: '99.9%', description: 'Reliable network infrastructure replacing frequent legacy outages.' },
      { metric: 'Wi-Fi Coverage', value: '100%', description: 'Complete wireless coverage across the entire facility.' },
      { metric: 'Security', value: 'Enhanced', description: 'Firewall, VPN, and network segmentation securing all business operations.' },
      { metric: 'Backup Coverage', value: '100%', description: 'All critical data protected with automated daily backups and offsite replication.' },
    ],
    testimonial: {
      quote: 'Prathik Softnet transformed our IT infrastructure from unreliable legacy systems to a modern, secure setup. The difference in day-to-day operations has been significant. Their team delivered on every promise.',
      author: 'Operations Manager',
      role: 'Atima',
    },
  },
];

// ============================================================
// PARTNERS
// ============================================================

export interface Partner {
  id: string;
  name: string;
  level: string;
  years: number;
  description: string;
  categories: string[];
  certifications: string[];
  color: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'dell',
    name: 'Dell Technologies',
    level: 'Authorized Partner',
    years: 6,
    description: 'Complete Dell infrastructure portfolio including PowerEdge servers, PowerStore and Unity storage, VxRail HCI, and Precision workstations.',
    categories: ['Servers', 'Storage', 'HCI', 'Workstations', 'Networking'],
    certifications: ['Dell Sales Certified', 'Dell Server Certified', 'Dell Storage Certified'],
    color: '#007DB8',
  },
  {
    id: 'hpe',
    name: 'Hewlett Packard Enterprise',
    level: 'Gold Partner',
    years: 5,
    description: 'Full HPE portfolio coverage including ProLiant servers, Nimble and Primera storage, Aruba networking, and GreenLake services.',
    categories: ['Servers', 'Storage', 'Networking', 'HCI', 'Edge Computing'],
    certifications: ['HPE Server Certified', 'HPE Storage Certified', 'HPE Aruba Certified'],
    color: '#01A982',
  },
  {
    id: 'cisco',
    name: 'Cisco Systems',
    level: 'Select Partner',
    years: 5,
    description: 'Enterprise networking solutions including Catalyst switches, Meraki cloud-managed devices, UCS servers, and security appliances.',
    categories: ['Networking', 'Servers', 'Security', 'Wireless', 'Collaboration'],
    certifications: ['Cisco CCNA', 'Cisco CCNP', 'Cisco Meraki Certified'],
    color: '#049FD9',
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    level: 'Authorized Partner',
    years: 4,
    description: 'Lenovo data center portfolio including ThinkSystem servers, storage solutions, ThinkStation workstations, and ThinkAgile HCI.',
    categories: ['Servers', 'Storage', 'Workstations', 'HCI'],
    certifications: ['Lenovo Server Certified', 'Lenovo Data Center Sales'],
    color: '#E2231A',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    level: 'Partner',
    years: 5,
    description: 'Microsoft software licensing including Windows Server, SQL Server, Microsoft 365, Azure Stack, and System Center.',
    categories: ['Operating Systems', 'Databases', 'Cloud', 'Productivity', 'Management'],
    certifications: ['Microsoft Partner', 'Windows Server Certified'],
    color: '#00A4EF',
  },
  {
    id: 'intel',
    name: 'Intel',
    level: 'Technology Partner',
    years: 7,
    description: 'Intel Xeon processor platforms, Optane persistent memory, networking adapters, and data center accelerators.',
    categories: ['Processors', 'Memory', 'Networking', 'Accelerators'],
    certifications: ['Intel Partner Alliance'],
    color: '#0071C5',
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    level: 'Partner',
    years: 3,
    description: 'NVIDIA professional GPU solutions including RTX series for workstations, A-series and H-series for data center AI/ML workloads.',
    categories: ['GPUs', 'AI Accelerators', 'Workstation Graphics', 'Networking'],
    certifications: ['NVIDIA Partner Network'],
    color: '#76B900',
  },
  {
    id: 'vmware',
    name: 'VMware (Broadcom)',
    level: 'Partner',
    years: 5,
    description: 'VMware virtualization and cloud infrastructure including vSphere, NSX, vSAN, and VMware Cloud Foundation.',
    categories: ['Virtualization', 'Networking', 'Storage', 'Cloud', 'Security'],
    certifications: ['VMware VCP', 'VMware Sales Professional'],
    color: '#717074',
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'The team at Prathik Softnet delivered our server infrastructure ahead of schedule. Their technical expertise and attention to detail made our data center migration seamless.',
    author: 'IT Director',
    role: '',
    company: 'Pravaig Dynamics',
    industry: 'Electric Vehicles',
  },
  {
    id: 't2',
    quote: 'We have been working with Prathik Softnet for hardware procurement since 2020. Their competitive pricing and reliable delivery have made them our go-to IT infrastructure partner.',
    author: 'Head of IT',
    role: '',
    company: 'Pravaig Energy',
    industry: 'Energy',
  },
  {
    id: 't3',
    quote: 'Their AMC services have significantly reduced our infrastructure downtime. The proactive monitoring and quick response times give us peace of mind for our critical systems.',
    author: 'Operations Manager',
    role: '',
    company: 'Atima',
    industry: 'Technology',
  },
];

// ============================================================
// WHY CHOOSE US
// ============================================================

export const WHY_CHOOSE_US = [
  {
    title: 'Competitive Pricing',
    description: 'Direct OEM partnerships and bulk purchasing power enable us to offer enterprise hardware at prices that deliver the best value for your investment.',
    icon: 'indian-rupee',
  },
  {
    title: 'Timely Delivery',
    description: 'Streamlined logistics and strong supplier relationships ensure your hardware arrives when promised, keeping your projects on track.',
    icon: 'clock',
  },
  {
    title: 'Technical Expertise',
    description: 'OEM-certified engineers with real-world experience across Dell, HP, Cisco, and Lenovo platforms provide expert guidance for every project.',
    icon: 'award',
  },
];

// ============================================================
// TEAM
// ============================================================

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const TEAM: TeamMember[] = [
  {
    name: 'Prathik P Nadig',
    role: 'Founder & CEO',
    bio: 'Prathik founded Prathik Softnet in 2018 with a vision to make enterprise-grade IT infrastructure accessible to businesses of all sizes across India. With experience in IT hardware sales and solution architecture, Prathik has built deep relationships with OEM partners including Dell, HP, Cisco, and Lenovo. Under his leadership, the company has grown from a Bangalore-based startup to a recognized IT infrastructure partner serving clients across banking, healthcare, manufacturing, and government sectors. Prathik holds certifications from multiple OEMs and is passionate about helping organizations modernize their IT foundations.',
  },
];

// ============================================================
// TIMELINE / MILESTONES
// ============================================================

export const MILESTONES = [
  { year: 2018, title: 'Founded in Bangalore', description: 'Prathik Softnet established as an IT hardware solutions provider in Bangalore, starting with Dell and HP product lines.' },
  { year: 2019, title: 'First Major Enterprise Client', description: 'Secured first enterprise contract for a 50-server deployment at a leading Bangalore-based IT company.' },
  { year: 2020, title: 'Cisco Partnership', description: 'Became Cisco Select Partner, adding enterprise networking to our portfolio. Supported clients through COVID-19 remote work transitions.' },
  { year: 2021, title: 'Growing Client Base', description: 'Steadily expanded our client portfolio across Bangalore. Added dedicated solutions architects to the team.' },
  { year: 2022, title: 'Delhi NCR Expansion', description: 'Opened Delhi NCR branch office to serve North India market. Added HPE Gold Partner and Lenovo Authorized Partner certifications.' },
  { year: 2023, title: 'ISO Certifications', description: 'Achieved ISO 9001:2015 and ISO 27001:2018 certifications. Launched comprehensive AMC services division.' },
  { year: 2024, title: 'Expanded Partner Ecosystem', description: 'Added Pure Storage and Fortinet to our partner ecosystem. Continued growth across multiple industry verticals.' },
  { year: 2025, title: 'AI & Next-Gen Focus', description: 'Expanded into AI infrastructure solutions with NVIDIA partnerships. Launched consulting practice for digital transformation.' },
];

// ============================================================
// CERTIFICATIONS
// ============================================================

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', description: 'Quality Management System', icon: 'shield-check' },
  { name: 'ISO 27001:2018', description: 'Information Security Management', icon: 'lock' },
  { name: 'Dell Authorized Partner', description: 'Enterprise Solutions Partner', icon: 'award' },
  { name: 'HPE Gold Partner', description: 'Hewlett Packard Enterprise', icon: 'award' },
  { name: 'Cisco Select Partner', description: 'Networking & Security', icon: 'award' },
  { name: 'Microsoft Partner', description: 'Software & Cloud Solutions', icon: 'award' },
];

// ============================================================
// BLOG POSTS
// ============================================================

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'choosing-enterprise-servers-2025',
    title: 'Choosing Enterprise Servers in 2025: Dell vs HPE vs Lenovo',
    excerpt: 'A comprehensive comparison of the top three enterprise server platforms to help you make an informed decision for your data center.',
    content: `Selecting the right enterprise server platform is one of the most consequential infrastructure decisions an organization makes. The server you choose today will run your critical workloads for five to seven years, making it essential to evaluate not just current performance but long-term value, support quality, and technology roadmap alignment.

## The Enterprise Server Market in 2025

The enterprise server landscape has evolved significantly. With the adoption of DDR5 memory, PCIe Gen5, and advanced management capabilities, the current generation of servers from Dell, HPE, and Lenovo represents a substantial leap in performance and efficiency over previous generations.

### Dell PowerEdge: The Versatile Workhorse

Dell's PowerEdge lineup, particularly the R750 and R650, continues to set the standard for versatile enterprise computing. The R750's support for up to 32 DDR5 DIMM slots and 24 NVMe drive bays makes it exceptionally flexible for workloads ranging from virtualization to AI inference. Dell's iDRAC9 Enterprise management interface provides comprehensive remote management capabilities, and OpenManage Enterprise simplifies fleet management across hundreds of servers.

**Strengths:** Broadest configuration options, excellent management tools with iDRAC, strong supply chain and support in India, competitive pricing on multi-unit orders.

**Considerations:** Premium pricing on top-tier configurations, some advanced features require additional licensing.

### HPE ProLiant: Enterprise Reliability

HPE's ProLiant DL380 Gen11 and DL360 Gen11 are built on HPE's decades of enterprise server heritage. The Gen11 platform introduces Silicon Root of Trust for firmware security, HPE iLO 6 for comprehensive lifecycle management, and integration with HPE GreenLake for flexible consumption models. HPE's InfoSight predictive analytics, inherited from Nimble Storage, is increasingly being applied to server health monitoring.

**Strengths:** Industry-leading security features (Silicon Root of Trust), excellent support infrastructure in India, HPE GreenLake consumption model, proven reliability track record.

**Considerations:** Slightly higher entry pricing, complex licensing for some management features.

### Lenovo ThinkSystem: Performance Value

Lenovo's ThinkSystem SR650 V3 and SR630 V3 have earned respect for delivering competitive performance at attractive price points. The SR650 V3's support for up to 40 drive bays and 4 GPUs makes it particularly versatile for AI/ML and storage-intensive workloads. Lenovo's XClarity management platform provides solid fleet management, and their ThinkShield security platform covers firmware through application layers.

**Strengths:** Excellent performance-per-rupee, strong GPU support for AI workloads, competitive pricing, growing partner ecosystem in India.

**Considerations:** Smaller India service network compared to Dell/HPE, less mature management ecosystem.

## Decision Framework

When choosing between these platforms, consider the following factors:

1. **Workload Requirements:** Match server specifications to your specific application demands.
2. **Management Ecosystem:** Evaluate how each vendor's management tools integrate with your operations.
3. **Support Coverage:** Verify the vendor's service capabilities in your specific locations across India.
4. **Total Cost of Ownership:** Factor in not just purchase price but warranty, support, power, and management costs.
5. **Partner Expertise:** Work with a partner like Prathik Softnet who can objectively compare all three platforms.

## Our Recommendation

There is no universal "best" server. The right choice depends on your specific workload, budget, existing infrastructure, and support requirements. As authorized partners of all three vendors, Prathik Softnet can help you evaluate each platform against your requirements and deliver the best fit for your organization.`,
    author: 'Prathik Softnet Team',
    date: '2025-01-15',
    category: 'Hardware',
    readTime: '8 min read',
  },
  {
    id: 'blog-2',
    slug: 'complete-guide-data-center-setup-india',
    title: 'Complete Guide to Data Center Setup in India',
    excerpt: 'Everything you need to know about building or upgrading a data center in India, from site selection to commissioning.',
    content: `Building a data center in India involves navigating a unique set of considerations, from power infrastructure challenges to regulatory requirements and climate factors. This guide covers the essential aspects of data center planning and construction based on our experience deploying data centers across Karnataka, Tamil Nadu, Maharashtra, and Delhi NCR.

## Site Selection and Preparation

The foundation of any successful data center is the physical site. In India, site selection must account for several factors:

**Power Availability:** Reliable power is the single most important factor. Evaluate the local utility's track record, available power capacity, and the feasibility of dual utility feeds. Many organizations in India plan for extended generator runtime due to power quality issues.

**Cooling Considerations:** India's climate demands robust cooling design. In Bangalore, the moderate climate allows for economizer modes for several months, reducing cooling costs. In Delhi and Chennai, plan for year-round mechanical cooling with appropriate redundancy.

**Connectivity:** Proximity to carrier-neutral data centers or fiber landing stations ensures diverse connectivity options. Bangalore's Electronic City and Whitefield areas, along with Noida's tech corridors, offer excellent fiber connectivity.

## Power Infrastructure Design

Data center power infrastructure in India typically includes:

1. **Utility Power:** Dual utility feeds where available, with automatic transfer switches.
2. **UPS Systems:** Online double-conversion UPS with N+1 redundancy for critical loads. APC, Vertiv, and Eaton are common choices.
3. **Generator Backup:** Diesel generators sized for full data center load plus cooling, with minimum 48-hour fuel storage.
4. **Power Distribution:** PDUs rated for current and future load, with intelligent monitoring for capacity planning.

## Cooling Architecture

Modern data center cooling in India commonly uses:

- **Precision Cooling:** In-row or perimeter cooling units for server rooms.
- **Hot/Cold Aisle Containment:** Essential for efficiency, reducing energy waste by 20-30%.
- **Free Cooling:** Where climate permits (Bangalore, Pune), economizer modes can significantly reduce cooling costs.
- **Target PUE:** Aim for 1.5-1.8 for Indian data centers; sub-1.4 is achievable with modern designs.

## Network Infrastructure

Design the data center network with scalability and redundancy:

- **Core Layer:** High-performance switches (Cisco Catalyst 9500, Aruba CX 8360) with redundant pair topology.
- **Access Layer:** Top-of-rack switching with 25GbE server connectivity.
- **Out-of-Band Management:** Dedicated management network for iDRAC, iLO, and IPMI access.
- **WAN Connectivity:** Minimum two diverse ISP connections with BGP routing.

## Compute and Storage

Right-size your compute and storage based on workload analysis:

- **Virtualization Ratio:** Plan for 8:1 to 15:1 VM-to-host ratios depending on workload density.
- **Storage Tiering:** Use all-flash for performance workloads, hybrid for general purpose, and archival tiers for long-term retention.
- **Backup Strategy:** Follow the 3-2-1 rule: three copies, two media types, one offsite.

## Compliance and Certifications

Indian data centers should consider:

- **ISO 27001:** Essential for any organization handling sensitive data.
- **PCI DSS:** Required for financial transaction processing.
- **CERT-In Compliance:** Mandatory incident reporting and security controls.
- **RBI Guidelines:** Specific requirements for BFSI data centers.

## Cost Estimation

A typical 50-rack data center in India costs between Rs 2-5 crore for infrastructure (excluding the building), depending on redundancy levels and equipment choices. Operating costs are dominated by power (40-50%), followed by cooling (25-30%), and staffing (15-20%).

## Partner with Experts

Building a data center is a significant undertaking. Partner with an experienced infrastructure provider like Prathik Softnet who can handle everything from design through procurement, installation, and ongoing maintenance. Our team has built data centers across India and can guide you through every phase of the project.`,
    author: 'Prathik Softnet Team',
    date: '2025-01-08',
    category: 'Data Center',
    readTime: '12 min read',
  },
  {
    id: 'blog-3',
    slug: 'it-infrastructure-cost-optimization',
    title: 'IT Infrastructure Cost Optimization Strategies',
    excerpt: 'Practical strategies to reduce IT infrastructure costs without compromising performance or reliability.',
    content: `IT infrastructure represents a significant portion of enterprise IT spending. Based on our experience optimizing infrastructure for clients across industries, here are proven strategies to reduce costs while maintaining the performance and reliability your business demands.

## 1. Server Consolidation Through Virtualization

The most impactful cost reduction strategy remains server consolidation. Many organizations still run physical servers at 10-20% utilization. Virtualizing these onto fewer, more powerful hosts can reduce server count by 60-80%.

**Typical savings:** 30-40% reduction in compute costs, 40-50% reduction in power and cooling costs.

**How we help:** Our assessment service identifies consolidation opportunities and designs the target virtualized architecture with right-sized hosts.

## 2. Storage Tiering and Data Management

Not all data needs all-flash performance. Implement a tiered storage strategy:

- **Tier 1 (All-Flash):** Database and application workloads requiring sub-millisecond latency.
- **Tier 2 (Hybrid):** General file services, development environments, and moderate-performance workloads.
- **Tier 3 (Archive):** Backup, compliance archives, and cold data on high-capacity HDDs or cloud storage.

**Typical savings:** 25-35% reduction in storage costs through proper tiering.

## 3. AMC Optimization

Many organizations overpay for maintenance by keeping manufacturer extended warranties on all equipment. A smarter approach:

- **Critical systems:** Maintain OEM warranty with 4-hour response for production systems.
- **Standard systems:** Third-party AMC at 40-50% lower cost for non-critical systems.
- **End-of-life equipment:** Plan timely replacement rather than expensive legacy support contracts.

**Typical savings:** 20-40% reduction in annual maintenance costs.

## 4. Energy Efficiency Improvements

Power and cooling represent 40-50% of data center operating costs. Quick wins include:

- **Hot/Cold Aisle Containment:** 20-30% cooling efficiency improvement.
- **Blanking Panels:** Fill empty rack spaces to prevent hot air recirculation.
- **Raise Set Points:** Modern servers operate reliably at 27°C inlet temperature; raising from 20°C to 25°C saves 4% cooling energy per degree.
- **LED Lighting:** Replace fluorescent lighting with sensor-activated LEDs.

## 5. Procurement Strategy

- **Bulk Ordering:** Consolidate purchases for volume discounts. Even combining orders across quarters can unlock better pricing.
- **End-of-Quarter Timing:** OEMs and partners offer deeper discounts at quarter and fiscal year ends.
- **Previous Generation Hardware:** Consider N-1 generation equipment at 30-40% lower cost for non-critical workloads.
- **Refurbished Equipment:** OEM-certified refurbished servers offer 50-60% savings for development and test environments.

## 6. Right-Sizing and Capacity Planning

Over-provisioning is one of the biggest hidden costs in IT infrastructure. Regular capacity reviews help identify:

- Servers with consistently low CPU and memory utilization
- Storage volumes with excessive unused capacity
- Network links operating below 20% utilization

**Our approach:** Quarterly infrastructure reviews with data-driven right-sizing recommendations help clients maintain optimal resource utilization.

## Getting Started

Cost optimization is not a one-time exercise but an ongoing discipline. Start with an infrastructure assessment to identify your biggest savings opportunities. Prathik Softnet offers complimentary infrastructure assessments for organizations looking to optimize their IT spending.`,
    author: 'Prathik P Nadig',
    date: '2024-12-20',
    category: 'Strategy',
    readTime: '7 min read',
  },
  {
    id: 'blog-4',
    slug: 'understanding-it-amc-services',
    title: 'Understanding IT AMC: What\'s Included and Why It Matters',
    excerpt: 'A clear breakdown of Annual Maintenance Contracts for IT infrastructure, helping you understand what you\'re paying for and how to choose the right coverage.',
    content: `Annual Maintenance Contracts (AMCs) for IT infrastructure are one of the most commonly misunderstood IT expenditures. This guide breaks down what AMC covers, the different service levels available, and how to evaluate whether you are getting value for your investment.

## What Is an IT AMC?

An Annual Maintenance Contract is a service agreement between your organization and a service provider to maintain your IT infrastructure over a fixed period, typically one to three years. A good AMC covers preventive maintenance, break-fix support, replacement parts, and technical assistance for your servers, storage, networking equipment, and other infrastructure components.

## Types of AMC Coverage

### Comprehensive AMC
Covers all hardware components including replacement parts. The service provider bears the cost of spare parts. This is the most expensive but most predictable option.

### Non-Comprehensive AMC
Covers labor, diagnostics, and preventive maintenance, but replacement parts are billed separately. Suitable for newer equipment still under manufacturer warranty.

### On-Call Support
Pay-per-incident model without ongoing contract. Suitable only for non-critical equipment where response time is not important.

## What a Good AMC Includes

1. **Preventive Maintenance:** Quarterly scheduled visits for hardware inspection, cleaning, firmware updates, and health checks.
2. **Break-Fix Support:** On-site repair services with defined response times (4-hour, 8-hour, or next business day).
3. **Remote Monitoring:** Proactive monitoring of hardware health, storage utilization, and performance metrics.
4. **Spare Parts:** Pre-positioned critical spares for rapid replacement.
5. **Security Patching:** Regular application of firmware and security updates during maintenance windows.
6. **Health Reports:** Monthly or quarterly reports on infrastructure health and performance trends.
7. **Escalation Management:** Defined escalation paths for critical incidents.

## How to Evaluate AMC Proposals

- **Response Time SLAs:** Ensure response times align with your business criticality. A bank needs 4-hour response; a development lab might accept next business day.
- **Parts Coverage:** Understand whether parts are included or billed separately. For older equipment, comprehensive parts coverage is important.
- **Multi-Vendor Support:** If you have equipment from multiple OEMs, a single AMC provider who supports all brands simplifies management.
- **Escalation Process:** Verify the provider has access to OEM escalation for complex issues they cannot resolve independently.
- **Reporting:** Regular health reports help you plan for capacity upgrades and equipment replacement.

## When to Consider AMC

- Equipment that is past manufacturer warranty
- Mission-critical systems requiring guaranteed response times
- Multi-vendor environments where managing multiple support contracts is complex
- Organizations without sufficient in-house IT maintenance expertise

## Prathik Softnet AMC Services

We offer three tiers of AMC services covering Dell, HP, Cisco, Lenovo, and other OEM equipment. Our AMC clients enjoy proactive monitoring, dedicated account management, and transparent SLA reporting. Contact us for a customized AMC proposal based on your specific infrastructure.`,
    author: 'Prathik Softnet Team',
    date: '2024-12-10',
    category: 'Services',
    readTime: '6 min read',
  },
  {
    id: 'blog-5',
    slug: 'top-networking-mistakes-businesses',
    title: 'Top 10 Networking Mistakes That Cost Businesses Millions',
    excerpt: 'Common enterprise networking mistakes we encounter regularly and how to avoid them.',
    content: `In our seven years of building enterprise networks across India, we have encountered the same networking mistakes repeatedly. These errors range from poor design decisions to operational oversights, and they collectively cost businesses millions in downtime, security breaches, and inefficient operations. Here are the top ten mistakes and how to avoid them.

## 1. Flat Network Architecture

**The Mistake:** Running all devices, servers, printers, IoT sensors, and guest devices on a single flat network without segmentation.

**The Cost:** A single compromised device can access every other device on the network. We have seen ransomware spread from a compromised CCTV camera to production servers in flat networks.

**The Fix:** Implement VLANs and network segmentation. At minimum, separate servers, user endpoints, IoT devices, and guest traffic into different network segments with firewall rules controlling inter-segment communication.

## 2. Ignoring Network Redundancy

**The Mistake:** Single points of failure in the network path, whether it is a single core switch, a single uplink, or a single ISP connection.

**The Cost:** When that single component fails, the entire network or a significant portion goes down. We have seen organizations lose entire business days due to a single switch failure.

**The Fix:** Implement redundancy at every layer. Dual core switches with HSRP/VRRP, dual uplinks from access to distribution, and dual ISP connections with automatic failover.

## 3. Default Credentials on Network Equipment

**The Mistake:** Leaving default usernames and passwords on switches, routers, firewalls, and access points.

**The Cost:** Default credentials are publicly documented. Attackers regularly scan for network equipment running default credentials. This is one of the easiest attack vectors.

**The Fix:** Change all default credentials during initial setup. Implement centralized authentication (RADIUS/TACACS+) for network device management. Use strong, unique passwords and enable multi-factor authentication where possible.

## 4. No Network Monitoring

**The Mistake:** Not monitoring network health, performance, and security until something breaks.

**The Cost:** Problems go undetected until users complain. By then, the issue may have been degrading performance for weeks or a security breach may have been active for months.

**The Fix:** Implement SNMP monitoring with tools like SolarWinds, PRTG, or Nagios. Configure alerts for interface utilization, error rates, device health, and security events. Monitor proactively.

## 5. Oversized Broadcast Domains

**The Mistake:** Creating VLANs with 500+ devices, resulting in excessive broadcast traffic.

**The Cost:** Broadcast storms, ARP table exhaustion, and poor network performance as every device processes broadcasts from hundreds of others.

**The Fix:** Limit VLANs to 200-250 devices. Use multiple smaller VLANs with inter-VLAN routing rather than one large flat VLAN per building.

## 6. Skipping Firmware Updates

**The Mistake:** Running network equipment on firmware versions that are years old.

**The Cost:** Missing critical security patches, bug fixes, and performance improvements. Known vulnerabilities in old firmware are actively exploited.

**The Fix:** Schedule quarterly firmware review cycles. Apply security patches within 30 days of release. Test firmware updates in a lab or on non-critical equipment before production deployment.

## 7. Poor Wi-Fi Design

**The Mistake:** Deploying wireless access points based on coverage area rather than capacity planning and site survey data.

**The Cost:** Dead zones, channel interference, poor roaming, and complaints from users. Conference rooms and auditoriums become unusable during meetings.

**The Fix:** Conduct professional wireless site surveys before deployment. Design for capacity (users per AP) and density, not just coverage. Use 5GHz band for primary connectivity and plan for Wi-Fi 6/6E.

## 8. No Change Management

**The Mistake:** Making network changes ad-hoc without documentation, review, or rollback plans.

**The Cost:** Configuration errors cause outages. When issues occur, nobody knows what changed or how to revert. We have seen misconfigured ACLs take down production networks.

**The Fix:** Implement change management procedures. Every change should have a request, review, approval, implementation plan, and rollback plan. Use configuration management tools to track changes.

## 9. Undersized Internet Links

**The Mistake:** Sizing internet bandwidth based on current usage without accounting for growth, cloud adoption, and SaaS applications.

**The Cost:** Slow application performance, poor video conferencing quality, and user frustration as more workloads move to the cloud.

**The Fix:** Monitor bandwidth utilization trends. Plan for 50-100% growth per year as cloud adoption increases. Implement QoS to prioritize critical traffic and consider SD-WAN for intelligent traffic management.

## 10. No Network Documentation

**The Mistake:** No up-to-date network diagrams, IP address documentation, or configuration backups.

**The Cost:** Troubleshooting takes longer, changes carry higher risk, and when key network engineers leave, institutional knowledge walks out the door.

**The Fix:** Maintain updated network diagrams (physical and logical), IP address management (IPAM), equipment inventory with serial numbers and warranty dates, and automated configuration backups.

## Prevention Is Cheaper Than Recovery

Every one of these mistakes is preventable with proper planning, design, and operational discipline. If you recognize any of these issues in your network, Prathik Softnet can help you assess your current state and implement improvements to build a more reliable, secure, and scalable network infrastructure.`,
    author: 'Prathik Softnet Team',
    date: '2024-11-28',
    category: 'Networking',
    readTime: '10 min read',
  },
];

// ============================================================
// CLIENT LOGOS (for marquee)
// ============================================================

export const CLIENT_NAMES = [
  'Pravaig Dynamics',
  'Pravaig Energy',
  'Atima',
];

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Solutions',
    path: '/solutions',
    children: SOLUTIONS.map(s => ({ label: s.shortTitle, path: `/solutions/${s.slug}` })),
  },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'All Products', path: '/products' },
      { label: 'Servers', path: '/products?category=servers' },
      { label: 'Storage', path: '/products?category=storage' },
      { label: 'Networking', path: '/products?category=networking' },
      { label: 'Workstations', path: '/products?category=workstations' },
    ],
  },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
];

// ============================================================
// SEO META DATA
// ============================================================

export const SEO = {
  home: {
    title: 'Prathik Softnet | IT Hardware Solutions Bangalore & Delhi',
    description: 'Leading IT hardware provider in Bangalore & Delhi. Authorized Dell, HP, Cisco partner. Servers, storage, networking, AMC services. Call +91 7019555245.',
  },
  about: {
    title: 'About Prathik Softnet | IT Infrastructure Company Since 2018',
    description: 'Prathik Softnet is a trusted IT infrastructure partner serving clients across India. ISO certified, OEM authorized. Learn about our mission and 7+ years of expertise.',
  },
  solutions: {
    title: 'IT Infrastructure Solutions | Hardware Procurement, Design, AMC | Prathik Softnet',
    description: 'Comprehensive IT infrastructure solutions including hardware procurement, infrastructure design, maintenance & AMC, IT consulting, and installation services. Serving enterprises across India.',
  },
  products: {
    title: 'Enterprise IT Hardware Catalog | Servers, Storage, Networking | Prathik Softnet',
    description: 'Browse enterprise hardware from Dell, HP, Cisco, Lenovo. Servers, storage arrays, networking equipment, workstations. Competitive pricing with authorized warranties.',
  },
  industries: {
    title: 'Industry-Specific IT Solutions | BFSI, Healthcare, Education, Manufacturing | Prathik Softnet',
    description: 'Tailored IT infrastructure solutions for banking, healthcare, education, manufacturing, IT/ITES, and government sectors. Industry-compliant, scalable infrastructure.',
  },
  caseStudies: {
    title: 'IT Infrastructure Case Studies | Proven Results | Prathik Softnet',
    description: 'Real-world IT infrastructure success stories. Data center consolidation, network transformation, SAP deployment, and more. See measurable results from our enterprise projects.',
  },
  partners: {
    title: 'Our Technology Partners | Dell, HP, Cisco, Lenovo, Intel | Prathik Softnet',
    description: 'Authorized partnerships with Dell, HPE, Cisco, Lenovo, Microsoft, Intel, NVIDIA, and VMware. OEM-certified solutions and support for your enterprise infrastructure.',
  },
  blog: {
    title: 'IT Infrastructure Blog | Enterprise Hardware Insights | Prathik Softnet',
    description: 'Expert articles on enterprise servers, data center design, IT cost optimization, and networking best practices. Stay informed with Prathik Softnet\'s technology insights.',
  },
  contact: {
    title: 'Contact Prathik Softnet | Get a Free IT Infrastructure Consultation',
    description: 'Get in touch for enterprise IT hardware quotes, infrastructure consulting, or AMC services. Offices in Bangalore and Delhi. Call +91 7019555245 or request a quote online.',
  },
  privacy: {
    title: 'Privacy Policy | Prathik Softnet',
    description: 'Learn how Prathik Softnet collects, uses, and protects your personal information. Read our privacy policy.',
  },
  terms: {
    title: 'Terms of Service | Prathik Softnet',
    description: 'Read the terms and conditions governing the use of Prathik Softnet services and website.',
  },
  notFound: {
    title: 'Page Not Found | Prathik Softnet',
    description: 'The page you are looking for could not be found. Return to the Prathik Softnet homepage.',
  },
};

// ============================================================
// CONTACT FORM OPTIONS
// ============================================================

export const FORM_OPTIONS = {
  industries: ['Banking & Finance', 'Healthcare', 'Education', 'Manufacturing', 'IT/ITES', 'Government', 'Retail', 'Other'],
  services: ['Hardware Procurement', 'Infrastructure Design', 'Maintenance & AMC', 'IT Consulting', 'Installation & Integration'],
  budgetRanges: ['Under ₹5 Lakhs', '₹5-25 Lakhs', '₹25 Lakhs - ₹1 Crore', '₹1-5 Crore', 'Above ₹5 Crore'],
  contactMethods: ['Phone', 'Email', 'WhatsApp', 'Video Call'],
};
