import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Smartphone, Code2, Cloud, Database,
  Brain, Building2, Network, Palette, DollarSign,
  ArrowRight,
} from "lucide-react";

interface SubService {
  icon: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}

interface ServiceCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  subServices: SubService[];
}

const services: ServiceCategory[] = [
  {
    id: "web-dev",
    label: "Web Development Services",
    icon: <Globe size={18} />,
    subServices: [
      { icon: "⚡", title: "Full-Stack Development", description: "End-to-end web application development using modern frameworks like React, Next.js, and Node.js for enterprise-grade products." },
      { icon: "🛒", title: "E-Commerce Solutions", description: "Scalable online storefronts with seamless payment integration, inventory management, and conversion-focused design." },
      { icon: "🌐", title: "Progressive Web Apps", description: "Offline-capable, installable web apps that deliver native-like experiences across all platforms and devices." },
      { icon: "🔌", title: "API & Integrations", description: "Robust RESTful and GraphQL APIs plus third-party integrations to power your entire digital ecosystem." },
    ],
  },
  {
    id: "mobile-dev",
    label: "Mobile App Development",
    icon: <Smartphone size={18} />,
    subServices: [
      { icon: "🤖", title: "Android Development", description: "High-performance Android apps built with Kotlin and Jetpack Compose for a seamless user experience on every device." },
      { icon: "🍎", title: "iOS Development", description: "Native iOS applications using Swift and SwiftUI, optimized for the Apple ecosystem with best-in-class UI." },
      { icon: "⚛️", title: "React Native", description: "Cross-platform apps from a single codebase – faster time-to-market with near-native performance and UX." },
      { icon: "🦋", title: "Flutter Development", description: "Beautiful, natively compiled multi-platform apps with expressive UI, smooth animations, and fast performance." },
    ],
  },
  {
    id: "software-dev",
    label: "Software Development Services",
    icon: <Code2 size={18} />,
    subServices: [
      { icon: "🏗️", title: "Custom Software", description: "Bespoke software solutions engineered to your exact specifications, replacing manual processes with intelligent automation." },
      { icon: "🔧", title: "SaaS Development", description: "Multi-tenant SaaS platforms built for scale with subscription billing, SSO, and robust admin dashboards." },
      { icon: "🔄", title: "Legacy Modernization", description: "Migrate and modernize outdated systems into cloud-native microservices without disrupting your operations." },
      { icon: "🧪", title: "QA & Testing", description: "Comprehensive automated and manual testing frameworks ensuring every release meets the highest quality standards." },
    ],
  },
  {
    id: "cloud-mgmt",
    label: "Cloud Management & Infrastructure",
    icon: <Cloud size={18} />,
    subServices: [
      { icon: "☁️", title: "Cloud Migration", description: "Seamlessly move workloads to AWS, Azure, or GCP with zero-downtime strategies and full environment validation." },
      { icon: "🔒", title: "Cloud Security", description: "Identity management, encryption, and compliance frameworks that protect your cloud assets around the clock." },
      { icon: "📦", title: "Container Orchestration", description: "Docker and Kubernetes-based container management for scalable, resilient, and portable deployments." },
      { icon: "♻️", title: "Disaster Recovery", description: "Automated backup, failover, and recovery solutions that ensure business continuity under any circumstances." },
    ],
  },
  {
    id: "data-eng",
    label: "Data Engineering Services",
    icon: <Database size={18} />,
    subServices: [
      { icon: "🔁", title: "ETL Pipelines", description: "Reliable data ingestion, transformation, and loading pipelines that keep your data warehouse always up-to-date." },
      { icon: "📊", title: "Business Intelligence", description: "Real-time dashboards and self-serve analytics powered by Snowflake, Tableau, Power BI, and Looker." },
      { icon: "🌊", title: "Big Data Solutions", description: "Spark, Hadoop, and Kafka-based architectures for processing and analyzing massive volumes of streaming data." },
      { icon: "🛡️", title: "Data Governance", description: "Policies, catalogues, and lineage tracking that ensure data quality, security, and regulatory compliance." },
    ],
  },
  {
    id: "ai-ml",
    label: "AI and ML Services",
    icon: <Brain size={18} />,
    subServices: [
      { icon: "🧠", title: "AI Consulting", description: "We are one of the leading artificial intelligence services companies, leveraging computational power to build solutions." },
      { icon: "💬", title: "Generative AI", description: "CMV Technologies is a reliable partner in the AI product and software development domain." },
      { icon: "👁️", title: "ML Solutions", description: "Hire machine learning engineers from us to get cutting-edge solutions. Our seasoned experts deliver results." },
      { icon: "🤖", title: "Agentic AI", description: "Unleash large-scale Agentic AI solutions that obliterate obstacles, seize opportunities and drive growth.", isHighlight: true },
    ],
  },
  {
    id: "enterprise-dev",
    label: "Enterprise Development Services",
    icon: <Building2 size={18} />,
    subServices: [
      { icon: "🏢", title: "Enterprise Software", description: "Build scalable enterprise-grade applications designed for performance, reliability, and long-term growth." },
      { icon: "💰", title: "Cloud Cost Optimization", description: "Optimize cloud infrastructure to reduce operational costs while improving performance and efficiency." },
      { icon: "📐", title: "Architecture & System Design", description: "Design robust, scalable, and secure system architectures for high-growth digital products." },
      { icon: "🎨", title: "Product Design & UI/UX", description: "Create intuitive product experiences with modern UI/UX design focused on usability and user engagement." },
    ],
  },
  {
    id: "sys-arch",
    label: "System Architecture & Scaling",
    icon: <Network size={18} />,
    subServices: [
      { icon: "🏛️", title: "Microservices Architecture", description: "Break down monoliths into independently deployable services for improved resilience and team autonomy." },
      { icon: "📈", title: "Performance Engineering", description: "Profiling, caching, and query optimization to handle 10x traffic spikes without degrading user experience." },
      { icon: "🔗", title: "Event-Driven Systems", description: "Kafka and RabbitMQ-based messaging architectures for decoupled, real-time, and fault-tolerant services." },
      { icon: "🌍", title: "Multi-Region Deployment", description: "Globally distributed architectures with low-latency routing, data replication, and regional failover." },
    ],
  },
  {
    id: "ui-ux",
    label: "UI/UX & Product Design",
    icon: <Palette size={18} />,
    subServices: [
      { icon: "🖌️", title: "UI Design", description: "Pixel-perfect, brand-aligned interfaces designed in Figma with reusable components and thorough design tokens." },
      { icon: "🔬", title: "UX Research", description: "User interviews, usability testing, and heuristic evaluation that transform insights into measurable improvements." },
      { icon: "📱", title: "Design Systems", description: "Scalable, documented design languages that keep your product consistent as your team and codebase grow." },
      { icon: "⚡", title: "Rapid Prototyping", description: "Interactive Figma prototypes validated with real users before a single line of code is written." },
    ],
  },
  {
    id: "cloud-cost",
    label: "Cloud Cost Optimization",
    icon: <DollarSign size={18} />,
    subServices: [
      { icon: "📉", title: "FinOps Strategy", description: "Cloud financial management frameworks that align engineering, finance, and product teams around cost accountability." },
      { icon: "🔍", title: "Cost Auditing", description: "Deep-dive analysis of your cloud bill to identify waste, right-size resources, and eliminate idle infrastructure." },
      { icon: "🤖", title: "Auto-Scaling Policies", description: "Intelligent scaling policies that spin resources up and down automatically, matching cost to actual demand." },
      { icon: "📋", title: "Reserved & Spot Instances", description: "Strategic use of reserved capacity and spot instances to cut compute costs by up to 70% without compromising SLAs." },
    ],
  },
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId)!;

  return (
    <section id="service" style={{ background: "#f8fafc", padding: "96px 24px", fontFamily: "'Outfit','Inter',sans-serif", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 18px", borderRadius: "9999px", background: "rgba(255,77,0,0.07)", border: "1px solid rgba(255,77,0,0.18)", marginBottom: "20px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ff4d00" }} />
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#ff4d00", letterSpacing: "0.1em", textTransform: "uppercase" }}>What We Offer</span>
          </div>
          <h2 style={{ fontSize: "clamp(2.2rem,4.5vw,3.25rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.1, margin: "0 0 16px" }}>
            Our Core Services
          </h2>
          <p style={{ fontSize: "1.15rem", color: "#64748b", lineHeight: 1.65, maxWidth: "620px", margin: "0 auto" }}>
            End-to-end technology solutions designed to accelerate your business growth through innovation and technical excellence.
          </p>
        </div>

        {/* ── Two-Panel Layout ── */}
        <div className="services-layout">

          {/* ── Left Sidebar ── */}
          <aside className="services-sidebar">
            {services.map((svc) => {
              const isActive = svc.id === activeId;
              return (
                <div key={svc.id} style={{ width: "100%" }}>
                  <button
                    onClick={() => setActiveId(svc.id)}
                    className={`svc-tab${isActive ? " svc-tab--on" : ""}`}
                  >
                    <span className={`svc-icon${isActive ? " on" : ""}`}>{svc.icon}</span>
                    <span className="svc-label">{svc.label}</span>
                    <span className={`svc-arrow${isActive ? " on" : ""}`}>
                      <ArrowRight size={18} />
                    </span>
                  </button>

                  {/* Mobile accordion */}
                  <div className="mobile-accordion">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="mobile-cards">
                            {active.subServices.map((sub, i) => (
                              <div key={i} className={`feat-card${sub.isHighlight ? " feat-card--hl" : ""}`}>
                                <h3 className="feat-title">
                                  {sub.title}
                                  {sub.isHighlight && <ArrowRight size={14} className="hl-arrow-icon" />}
                                </h3>
                                <p className="feat-desc">{sub.description}</p>
                                <a href="#" className="read-more">Read More <ArrowRight size={12} strokeWidth={2.5} /></a>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </aside>

          {/* ── Right Grid (always in DOM, hidden via CSS on mobile) ── */}
          <div className="services-grid-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="feat-grid"
              >
                {active.subServices.map((sub, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.09 }}
                    className={`feat-card${sub.isHighlight ? " feat-card--hl" : ""}`}
                  >
                    <h3 className="feat-title">
                      {sub.title}
                      {sub.isHighlight && <ArrowRight size={14} className="hl-arrow-icon" />}
                    </h3>
                    <p className="feat-desc">{sub.description}</p>
                    <a href="#" className="read-more">Read More <ArrowRight size={12} strokeWidth={2.5} /></a>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        /* ─────── Layout ─────── */
        .services-layout {
          display: flex;
          flex-direction: column;
          gap: 32px;
          align-items: flex-start;
        }
        .services-sidebar {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .feat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        /* Mobile: accordion shows, right panel hides */
        .mobile-accordion { display: block; }
        .services-grid-panel { display: none; }

        @media (min-width: 1024px) {
          .services-layout { flex-direction: row; gap: 48px; }
          .services-sidebar { width: 320px; flex-shrink: 0; }
          /* Desktop: right panel shows, accordion hides */
          .services-grid-panel { display: block; flex: 1; }
          .mobile-accordion { display: none; }
        }

        /* ─────── Sidebar Tab ─────── */
        .svc-tab {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
          outline: none;
          text-align: left;
        }
        .svc-tab:hover:not(.svc-tab--on) {
          border-color: #ff4d00;
          background: #fffaf9;
          transform: translateX(4px);
          box-shadow: 0 2px 12px rgba(255,77,0,0.08);
        }
        .svc-tab--on {
          background: #ff4d00;
          border-color: #ff4d00;
          color: #ffffff;
          box-shadow: 0 10px 28px rgba(255,77,0,0.25);
        }
        .svc-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,77,0,0.08);
          color: #ff4d00;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .svc-icon.on {
          background: rgba(255,255,255,0.18);
          color: #ffffff;
        }
        .svc-label {
          flex: 1;
          font-size: 0.95rem;
          font-weight: 600;
          color: inherit;
          line-height: 1.3;
        }
        .svc-tab--on .svc-label { color: #ffffff; }
        .svc-tab:not(.svc-tab--on) .svc-label { color: #1e293b; }
        .svc-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          border: 1.5px solid #ff4d00;
          color: #ff4d00;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }
        .svc-arrow.on {
          border-color: rgba(255,255,255,0.35);
          color: #ffffff;
          background: rgba(255,255,255,0.1);
        }

        /* ─────── Feature Card ─────── */
        .feat-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 42px 36px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 1px 4px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 18px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          min-height: 240px;
          justify-content: center;
        }
        .feat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff4d00, #ff8c00);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .feat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255,77,0,0.1);
          border-color: #ffe4d9;
        }
        .feat-card:hover::before { opacity: 1; }

        .feat-icon {
          font-size: 1.75rem;
          line-height: 1;
        }
        .feat-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.45rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .feat-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ff4d00;
          font-size: 0.85rem;
          font-weight: 800;
          margin-top: 16px;
          text-decoration: none;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }
        .read-more:hover { gap: 8px; }

        /* ─────── Highlight Style ─────── */
        .feat-card--hl {
          background: linear-gradient(135deg, #ff4d00 0%, #ff7a40 100%) !important;
          border-color: #ff4d00 !important;
          color: #ffffff !important;
        }
        .feat-card--hl .feat-title,
        .feat-card--hl .feat-desc,
        .feat-card--hl .read-more {
          color: #ffffff !important;
        }
        .hl-arrow-icon {
          color: #ffffff;
        }

        /* ─────── Mobile Grid ─────── */
        .mobile-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding: 16px 0;
        }
        @media (max-width: 1023px) {
          .feat-grid { grid-template-columns: 1fr 1fr; }
          .feat-card {
            padding: 20px 16px;
            border-radius: 20px;
            border: 1px solid #ff4d00;
            box-shadow: 0 4px 12px rgba(255, 77, 0, 0.05);
            min-height: 160px;
          }
          .feat-title { font-size: 0.95rem; margin-bottom: 6px; }
          .feat-desc { 
            font-size: 0.74rem;
            line-height: 1.5;
            display: block;
            overflow: visible;
          }
          .read-more {
            font-size: 0.7rem;
            margin-top: 8px;
          }
          
          /* Match Screenshot Header */
          .svc-tab { border-radius: 12px; }
          .svc-tab--on {
            box-shadow: none;
            background: #ff4d00;
          }
          .svc-arrow {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            border-color: rgba(255,255,255,0.4);
          }
        }
      `}</style>
    </section>
  );
}