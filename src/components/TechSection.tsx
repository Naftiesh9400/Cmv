import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, 
  Database, 
  BarChart3, 
  Infinity, 
  Smartphone, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

const techCategories = [
  {
    id: 'ai',
    title: 'AI/ML',
    icon: <BrainCircuit size={28} />,
    techs: [
      { name: 'Big ML', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgEicwFvI5Oid_YfO2oVay5W99Uf6o5mEjQ&s' },
      { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
      { name: 'Mahout', logo: 'https://mahout.apache.org/assets/img/mahout-logo-brighter.png' },
      { name: 'ML Flow', logo: 'https://mlflow.org/img/MLflow-logo-final-black.png' },
      { name: 'NLTK', logo: 'https://www.nltk.org/_static/nltk_logo.png' },
      { name: 'OpenCV', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg' },
      { name: 'PyTorch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
      { name: 'Spark', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
      { name: 'TensorFlow', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' }
    ]
  },
  {
    id: 'data-eng',
    title: 'Data Engineering',
    icon: <Database size={28} />,
    techs: [
      { name: 'Apache Kafka', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Apache_kafka_logo.svg' },
      { name: 'Hadoop', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Hadoop_logo.svg' },
      { name: 'Airflow', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png' },
      { name: 'Snowflake', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg' },
      { name: 'Databricks', logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg' }
    ]
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    icon: <BarChart3 size={28} />,
    techs: [
      { name: 'Tableau', logo: 'https://www.vectorlogo.zone/logos/tableau/tableau-icon.svg' },
      { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg' },
      { name: 'Looker', logo: 'https://www.vectorlogo.zone/logos/google_looker/google_looker-icon.svg' },
      { name: 'Grafana', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: <Infinity size={28} />,
    techs: [
      { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg' },
      { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
      { name: 'Terraform', logo: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg' },
      { name: 'Jenkins', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg' },
      { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: <Smartphone size={28} />,
    techs: [
      { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.svg' },
      { name: 'React Native', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'Swift', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg' },
      { name: 'Kotlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.svg' }
    ]
  },
  {
    id: 'db',
    title: 'Databases',
    icon: <Layers size={28} />,
    techs: [
      { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/PostgreSQL_logo.svg' },
      { name: 'MongoDB', logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
      { name: 'Redis', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Redis-logo.svg' },
      { name: 'Elasticsearch', logo: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg' }
    ]
  },
  {
    id: 'test',
    title: 'Testing',
    icon: <ShieldCheck size={28} />,
    techs: [
      { name: 'Selenium', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png' },
      { name: 'Cypress', logo: 'https://www.vectorlogo.zone/logos/cypressio/cypressio-icon.svg' },
      { name: 'Jest', logo: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg' },
      { name: 'Appium', logo: 'https://v1.appium.io/img/appium-logo-1.png' }
    ]
  }
];

const TechSection = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const activeCategory = techCategories.find(cat => cat.id === activeTab);

  return (
    <section style={{ padding: '4rem 0', background: '#fff', overflow: 'hidden' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.75rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            fontFamily: 'Outfit, sans-serif',
            marginBottom: '1rem'
          }}>
            Technologies We Use
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#F43F5E', margin: '0 auto', borderRadius: '2px' }} />
        </div>

        {/* Categories Tabs */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '4rem',
          flexWrap: 'wrap'
        }}>
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                width: '120px',
                height: '110px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                borderRadius: '1rem',
                border: '1px solid',
                borderColor: activeTab === cat.id ? '#FF5722' : '#f1f5f9',
                background: activeTab === cat.id ? '#FF5722' : '#fff',
                color: activeTab === cat.id ? '#fff' : '#475569',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === cat.id ? '0 10px 25px rgba(255, 87, 34, 0.2)' : '0 4px 12px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ transition: 'transform 0.3s' }}>
                {cat.icon}
              </div>
              <span style={{ fontWeight: 700, fontSize: '0.85rem', textAlign: 'center', lineHeight: 1.2 }}>
                {cat.title}
              </span>
            </button>
          ))}
        </div>

        {/* Tech Logos Grid */}
        <div style={{ minHeight: '200px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: '3rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
            >
              {activeCategory?.techs.map((tech, idx) => (
                <motion.div
                  key={idx}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '12px',
                    width: '100px'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '100%', 
                        objectFit: 'contain',
                        filter: 'grayscale(1) opacity(0.8)',
                        transition: 'filter 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0) opacity(1)'}
                      onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(1) opacity(0.8)'}
                    />
                  </div>
                  <span style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: 700, 
                    color: '#64748b',
                    textAlign: 'center'
                  }}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
