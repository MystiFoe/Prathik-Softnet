import React from 'react';
import { Solution, Product, Testimonial, Feature } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'procurement',
    title: 'Hardware Procurement',
    description: 'Direct global sourcing from industry leaders (Dell, HP, Cisco, Lenovo). We leverage Tier-1 partnerships to provide competitive CAPEX pricing and guaranteed authenticity for every component.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
  },
  {
    id: 'infra-design',
    title: 'Infrastructure Design',
    description: 'Expert architectural planning for modern data centers. Our designs focus on high-density compute, hybrid cloud scalability, and energy-efficient thermal management systems.',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 7m0 10V7'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Mission-critical 24/7 technical nodes providing proactive AMC services. We ensure maximum uptime with rapid hardware replacement cycles and tiered technical response protocols.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Strategic roadmap planning and technical feasibility audits. We help global MNCs optimize their hardware lifecycle and navigate complex technological transitions with vendor-neutral advice.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
  },
  {
    id: 'integration',
    title: 'Installation & Integration',
    description: 'Seamless end-to-end deployment including precision cabling, hardware rack integration, and initial OS/Firmware provisioning for immediate production readiness.',
    icon: 'M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-2 9a2 2 0 100 4h5a2 2 0 100-4H9z'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'servers',
    name: 'Enterprise Rack Servers',
    category: 'Servers',
    description: 'High-density multi-socket compute platforms. Optimized for virtualization, database acceleration, and modern AI/ML workloads.',
    specs: ['Intel Xeon Scalable Support', 'AMD EPYC Readiness', 'DDR5 Memory Slots', 'Hot-swap redundant power']
  },
  {
    id: 'storage',
    name: 'Unified Storage Arrays',
    category: 'Storage',
    description: 'All-flash and hybrid scalable storage fabrics. Built for sub-millisecond latency and petabyte-scale data requirements.',
    specs: ['NVMe-over-Fabrics Support', 'Adaptive Deduplication', 'Predictive Analytics', 'Cloud Tiering Ready']
  },
  {
    id: 'networking',
    name: 'Data Center Networking',
    category: 'Networking',
    description: 'Core switches, secure edge routers, and ultra-low latency fabric. Enabling secure and resilient communication for global nodes.',
    specs: ['100G/400G Throughput', 'SDN Programmability', 'Advanced Zero-Trust Fabric', 'Hardware-based MACsec']
  },
  {
    id: 'workstations',
    name: 'Performance Workstations',
    category: 'Workstations',
    description: 'ISV-certified engineering and creative nodes. Designed for heavy CAD, 3D rendering, and scientific compute tasks.',
    specs: ['NVIDIA RTX Professional GPUs', 'ECC Registered Memory', 'Liquid Cooling Options', 'Expandable PCIe Gen 5']
  }
];

export const PARTNERS = ['DELL', 'HP', 'CISCO', 'LENOVO', 'MICROSOFT', 'INTEL', 'NVIDIA', 'VMWARE'];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Prathik Soft-Net has been our primary infrastructure partner for 5 years. Their procurement speed and technical depth in server solutions are unmatched in the region.',
    author: 'Arjun Mehta',
    role: 'Head of IT, TechFlow Global'
  },
  {
    id: 't2',
    quote: 'We required a complex multi-node storage array with 48-hour delivery. Prathik\'s Delhi hub not only delivered but their engineers integrated it on-site perfectly.',
    author: 'Samantha Rao',
    role: 'Infrastructure Manager, FinVantage'
  },
  {
    id: 't3',
    quote: 'Reliability is hard to find in the hardware space. Prathik Nadig\'s team provides that institutional robustness we need for our mission-critical systems.',
    author: 'Karan Singh',
    role: 'CTO, CloudScale India'
  }
];

export const WHY_CHOOSE_US: Feature[] = [
  {
    title: 'Competitive Pricing',
    description: 'Leveraging Tier-1 manufacturer relationships to provide aggressive pricing benchmarks for bulk enterprise procurement.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Timely Deliverables',
    description: 'Nationwide logistics network with primary hubs in Bengaluru and Delhi, ensuring fulfillment within mission-critical windows.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Quality Standards',
    description: 'Adhering to strict international hardware integration standards since 2018. 100% genuine parts guarantee.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
];
