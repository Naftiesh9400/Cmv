import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, 
  Database, 
  BarChart3, 
  Infinity, 
  Smartphone, 
  Layers, 
  ShieldCheck,
  Cloud,
  Palette
} from 'lucide-react';

// Import local logos where available
import logoDocker from '../assets/logo/Company=Docker.png';
import logoFigma from '../assets/logo/Company=Figma.png';
import logoGoogle from '../assets/logo/Company=Google.png';
import logoMicrosoft from '../assets/logo/Company=Microsoft.png';
import logoAdobe from '../assets/logo/Adobe.png';

const techCategories = [
  {
    id: 'ai',
    title: 'AI/ML',
    icon: <BrainCircuit size={28} />,
    techs: [
      { name: 'Big ML', logo: 'https://www.vectorlogo.zone/logos/bigml/bigml-icon.svg' },
      { name: 'Hugging Face', logo: 'https://www.vectorlogo.zone/logos/huggingface/huggingface-icon.svg' },
      { name: 'Mahout', logo: 'https://www.apache.org/logos/res/mahout/mahout.png' },
      { name: 'ML Flow', logo: 'https://www.vectorlogo.zone/logos/mlflow/mlflow-icon.svg' },
      { name: 'NLTK', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/NLTK_logo.png' },
      { name: 'OpenCV', logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg' },
      { name: 'PyTorch', logo: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg' },
      { name: 'Spark', logo: 'https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg' },
      { name: 'TensorFlow', logo: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg' }
    ]
  },
  {
    id: 'data-eng',
    title: 'Data Engineering',
    icon: <Database size={28} />,
    techs: [
      { name: 'Apache Kafka', logo: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg' },
      { name: 'Hadoop', logo: 'https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg' },
      { name: 'Airflow', logo: 'https://www.vectorlogo.zone/logos/apache_airflow/apache_airflow-icon.svg' },
      { name: 'Snowflake', logo: 'https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg' },
      { name: 'Databricks', logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg' }
    ]
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    icon: <BarChart3 size={28} />,
    techs: [
      { name: 'Tableau', logo: 'https://www.vectorlogo.zone/logos/tableau/tableau-icon.svg' },
      { name: 'Power BI', logo: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg' },
      { name: 'Looker', logo: 'https://www.vectorlogo.zone/logos/google_looker/google_looker-icon.svg' },
      { name: 'Grafana', logo: 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: <Infinity size={28} />,
    techs: [
      { name: 'Docker', logo: logoDocker },
      { name: 'Kubernetes', logo: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg' },
      { name: 'Terraform', logo: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg' },
      { name: 'Jenkins', logo: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg' },
      { name: 'AWS', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' }
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
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: <Cloud size={28} />,
    techs: [
      { name: 'Google Cloud', logo: logoGoogle },
      { name: 'Microsoft Azure', logo: logoMicrosoft },
      { name: 'AWS', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' }
    ]
  },
  {
    id: 'design',
    title: 'Design',
    icon: <Palette size={28} />,
    techs: [
      { name: 'Figma', logo: logoFigma },
      { name: 'Adobe', logo: logoAdobe },
      { name: 'Dribbble', logo: 'https://www.vectorlogo.zone/logos/dribbble/dribbble-icon.svg' }
    ]
  }
];

const TechSection = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const activeCategory = techCategories.find(cat => cat.id === activeTab);

  return (
    <section style={{ padding: '2.5rem 0', background: '#fff', overflow: 'hidden' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', 
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
                        filter: 'none', // Changed from grayscale for better visibility
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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
