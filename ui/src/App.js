import React, { useState, useEffect } from 'react';

// Simple icon components
const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m4 4 7.07 7.07a1 1 0 0 0 1.41 0L20 4"/>
    <path d="m21 4-8.5 8.5a1 1 0 0 1-1.41 0L3 4"/>
    <rect width="18" height="14" x="3" y="4" rx="2"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const CloudIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
);

const ServerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
    <line x1="6" x2="6.01" y1="6" y2="6"/>
    <line x1="6" x2="6.01" y1="18" y2="18"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export default function KrishnendusPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = ['Senior DevOps Engineer', 'Automation Specialist', 'Cloud Architect', 'Infrastructure Expert'];

  const projects = [
    {
      title: 'Infrastructure Automation',
      subtitle: 'AWS with Terraform',
      description: 'A collection of Terraform modules and code examples for managing infrastructure on Amazon Web Services (AWS).',
      tech: ['Terraform', 'AWS', 'Infrastructure as Code']
    },
    {
      title: 'CICD Pipeline Project',
      subtitle: 'Apache Server CICD Pipeline',
      description: 'Automate CI/CD pipeline with Jenkins GitHub webhook triggering Docker build, image push to registry, and Kubernetes deployment.',
      tech: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub']
    },
    {
      title: 'Kubernetes',
      subtitle: 'Kubernetes Objects Concept',
      description: 'A set of k8s objects in YAML file with example concept.',
      tech: ['Kubernetes', 'YAML', 'Container Orchestration']
    },
    {
      title: 'Python Project',
      subtitle: 'Covid19 Tracker',
      description: "India's state wise Covid19 tracker.",
      tech: ['Python', 'Data Analysis', 'API Integration']
    }
  ];

  const techStack = {
    'Cloud Platforms': ['AWS', 'OCI'],
    'Infrastructure as Code': ['Terraform', 'Ansible'],
    'CI/CD & Automation': ['Jenkins', 'GitLab CI/CD', 'GitHub Actions'],
    'Containers & Orchestration': ['Docker', 'Kubernetes'],
    'Monitoring & Logging': ['Prometheus', 'Grafana', 'Zabbix', 'ELK Stack'],
    'Programming & System': ['Python', 'Shell Scripting', 'Linux', 'Git']
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [skills.length]);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflow: 'hidden'
    },
    backgroundElements: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    },
    bgCircle1: {
      position: 'absolute',
      top: '-160px',
      right: '-160px',
      width: '320px',
      height: '320px',
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
      borderRadius: '50%',
      animation: 'pulse 4s ease-in-out infinite'
    },
    bgCircle2: {
      position: 'absolute',
      bottom: '-160px',
      left: '-160px',
      width: '320px',
      height: '320px',
      background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
      borderRadius: '50%',
      animation: 'pulse 4s ease-in-out infinite 2s'
    },
    bgCircle3: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '320px',
      height: '320px',
      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      animation: 'pulse 4s ease-in-out infinite 4s'
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #60a5fa, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    navLinks: {
      display: 'flex',
      gap: '32px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    heroSection: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '0 24px'
    },
    heroContent: {
      textAlign: 'center',
      zIndex: 10
    },
    heroTitle: {
      fontSize: '64px',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: '1.1'
    },
    heroName1: {
      background: 'linear-gradient(to right, #60a5fa, #06b6d4, #6366f1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroName2: {
      color: 'white'
    },
    skillRotation: {
      fontSize: '24px',
      color: '#d1d5db',
      marginBottom: '16px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    heroDescription: {
      fontSize: '20px',
      color: '#d1d5db',
      marginBottom: '32px',
      maxWidth: '800px',
      margin: '0 auto 32px',
      lineHeight: '1.6'
    },
    heroSubtext: {
      fontSize: '16px',
      color: '#9ca3af',
      marginBottom: '48px',
      maxWidth: '600px',
      margin: '0 auto 48px'
    },
    buttonContainer: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '48px',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '25px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    secondaryButton: {
      border: '2px solid #60a5fa',
      background: 'transparent',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '25px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px'
    },
    socialIcon: {
      color: '#9ca3af',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      padding: '8px'
    },
    chevronDown: {
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite',
      color: '#60a5fa'
    },
    section: {
      padding: '80px 24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '64px',
      background: 'linear-gradient(to right, #60a5fa, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    aboutText: {
      background: 'rgba(30, 41, 59, 0.5)',
      backdropFilter: 'blur(8px)',
      padding: '32px',
      borderRadius: '16px',
      border: '1px solid rgba(71, 85, 105, 0.5)',
      marginBottom: '32px'
    },
    aboutParagraph: {
      fontSize: '18px',
      color: '#d1d5db',
      lineHeight: '1.7',
      marginBottom: '24px'
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px'
    },
    card: {
      background: 'rgba(30, 41, 59, 0.5)',
      backdropFilter: 'blur(8px)',
      padding: '32px',
      borderRadius: '16px',
      border: '1px solid rgba(71, 85, 105, 0.5)',
      transition: 'all 0.3s ease'
    },
    cardIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
      background: 'linear-gradient(to right, #3b82f6, #06b6d4)'
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '16px',
      color: 'white'
    },
    cardDescription: {
      color: '#d1d5db',
      lineHeight: '1.6'
    },
    projectsSection: {
      padding: '80px 24px',
      background: 'rgba(15, 23, 42, 0.3)'
    },
    projectCard: {
      background: 'rgba(30, 41, 59, 0.5)',
      backdropFilter: 'blur(8px)',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid rgba(71, 85, 105, 0.5)',
      transition: 'all 0.3s ease'
    },
    projectTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#60a5fa'
    },
    projectSubtitle: {
      fontSize: '18px',
      color: '#06b6d4',
      marginBottom: '16px'
    },
    projectDescription: {
      color: '#d1d5db',
      marginBottom: '16px',
      lineHeight: '1.6'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    techTag: {
      background: 'rgba(59, 130, 246, 0.2)',
      color: '#93c5fd',
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '14px'
    },
    techStackGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px'
    },
    techCategory: {
      background: 'rgba(30, 41, 59, 0.5)',
      backdropFilter: 'blur(8px)',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid rgba(71, 85, 105, 0.5)',
      transition: 'all 0.3s ease'
    },
    techCategoryTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '16px',
      color: '#06b6d4'
    },
    techItem: {
      background: 'rgba(71, 85, 105, 0.5)',
      padding: '8px 12px',
      borderRadius: '8px',
      color: '#d1d5db',
      marginBottom: '8px',
      transition: 'all 0.3s ease'
    },
    footer: {
      padding: '48px 24px',
      borderTop: '1px solid rgba(30, 41, 59, 0.5)',
      textAlign: 'center'
    },
    footerTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
      background: 'linear-gradient(to right, #60a5fa, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    footerDescription: {
      color: '#9ca3af',
      marginBottom: '24px'
    },
    footerSocial: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '32px'
    },
    footerSocialButton: {
      background: '#1e293b',
      border: 'none',
      padding: '12px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      color: 'white'
    }
  };

  // Add keyframes for animations
  const keyframes = `
    @keyframes pulse {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 0.3; transform: scale(1.05); }
    }
    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% { transform: translateY(0) translateX(-50%); }
      40%, 43% { transform: translateY(-10px) translateX(-50%); }
      70% { transform: translateY(-5px) translateX(-50%); }
    }
    @media (max-width: 768px) {
      .hero-title { font-size: 48px !important; }
      .nav-links { display: none; }
      .button-container { flex-direction: column; }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>
      
      {/* Animated Background Elements */}
      <div style={styles.backgroundElements}>
        <div style={styles.bgCircle1}></div>
        <div style={styles.bgCircle2}></div>
        <div style={styles.bgCircle3}></div>
      </div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>KB</div>
          <div style={styles.navLinks} className="nav-links">
            <a href="#home" style={styles.navLink}>Home</a>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#projects" style={styles.navLink}>Projects</a>
            <a href="#tech" style={styles.navLink}>Tech Stack</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.heroTitle} className="hero-title">
            <div style={styles.heroName1}>Krishnendu</div>
            <div style={styles.heroName2}>Bhowmick</div>
          </div>
          <div style={styles.skillRotation}>
            🚀 {skills[currentSkill]}
          </div>
          
          <p style={styles.heroDescription}>
            Complex systems simplified through thoughtful automation and resilient design. 
            <br />
            <span style={{color: '#06b6d4', fontWeight: '600'}}>Creativity in architecture. Precision in execution.</span>
          </p>
          
          <p style={styles.heroSubtext}>
            Over 9 years of experience evolving from Infrastructure Specialist to dynamic DevOps Engineer, 
            sculpting the future of software delivery with Kubernetes, Docker, AWS, and Terraform.
          </p>
          
          <div style={styles.buttonContainer} className="button-container">
            <button style={styles.primaryButton}>
              <span>View Projects</span>
              <CodeIcon />
            </button>
            <button style={styles.secondaryButton}>
              Get In Touch
            </button>
          </div>
          
          <div style={styles.socialIcons}>
            <button style={styles.socialIcon}>
              <GitHubIcon />
            </button>
            <button style={styles.socialIcon}>
              <LinkedInIcon />
            </button>
            <button style={styles.socialIcon}>
              <MailIcon />
            </button>
          </div>
        </div>
        
        <div style={styles.chevronDown}>
          <ChevronDownIcon />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <div style={styles.aboutText}>
          <p style={styles.aboutParagraph}>
            A keen learner, a universe of atoms, atoms of curiosity. Meet a tech mind shaped by both 
            <span style={{color: '#60a5fa', fontWeight: '600'}}>discipline and wonder</span> — one that evolved from an 
            <span style={{color: '#06b6d4', fontStyle: 'italic'}}>Infrastructure Specialist</span> into a dynamic 
            <span style={{color: '#60a5fa', fontWeight: '600'}}>DevOps Engineer</span>, sculpting the future of software delivery.
          </p>
          <p style={styles.aboutParagraph}>
            With over <span style={{color: '#06b6d4', fontWeight: '600'}}>9 years of experience</span>, I began by orchestrating Oracle applications and server landscapes. 
            Today, I design scalable, reliable, and secure cloud-native infrastructure using 
            <span style={{color: '#60a5fa', fontWeight: '600'}}>Kubernetes, Docker, and AWS.</span>
          </p>
          <p style={styles.aboutParagraph}>
            In the cloud realm, I architect solutions and automate lifecycles using the precision of 
            <span style={{color: '#06b6d4', fontWeight: '600'}}>Terraform</span>, and integrate code workflows through 
            <span style={{color: '#60a5fa', fontWeight: '600'}}>Git, Jenkins, GitLab,</span> and 
            <span style={{color: '#6366f1', fontWeight: '600'}}>GitHub Actions</span>.
          </p>
          <p style={styles.aboutParagraph}>
            Every challenge I face is met with curiosity and a constant drive to improve. My work is not just code — it's craft. 
            Every deployment is a composition. Every automated pipeline, a rhythm. 
            <span style={{color: '#06b6d4', fontWeight: '600'}}>Let's create systems that not only work, but inspire.</span>
          </p>
        </div>
        
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <CloudIcon />
            </div>
            <h3 style={styles.cardTitle}>Cloud Architecture</h3>
            <p style={styles.cardDescription}>Designing scalable, resilient cloud-native infrastructure on AWS and OCI with best practices.</p>
          </div>
          
          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <CodeIcon />
            </div>
            <h3 style={styles.cardTitle}>Automation</h3>
            <p style={styles.cardDescription}>Building robust CI/CD pipelines and Infrastructure as Code solutions for seamless deployments.</p>
          </div>
          
          <div style={styles.card}>
            <div style={styles.cardIcon}>
              <ServerIcon />
            </div>
            <h3 style={styles.cardTitle}>Infrastructure</h3>
            <p style={styles.cardDescription}>Orchestrating containerized applications with Kubernetes and monitoring with Prometheus & Grafana.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.projectsSection}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={styles.cardGrid}>
            {projects.map((project, index) => (
              <div key={index} style={styles.projectCard}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <h4 style={styles.projectSubtitle}>{project.subtitle}</h4>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.techTags}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" style={styles.section}>
        <h2 style={styles.sectionTitle}>🛠️ Tech Stack</h2>
        <p style={{textAlign: 'center', color: '#d1d5db', marginBottom: '64px', fontSize: '18px'}}>My toolbox for delivering reliable, scalable systems.</p>
        
        <div style={styles.techStackGrid}>
          {Object.entries(techStack).map(([category, technologies], index) => (
            <div key={index} style={styles.techCategory}>
              <h3 style={styles.techCategoryTitle}>{category}</h3>
              <div>
                {technologies.map((tech, techIndex) => (
                  <div key={techIndex} style={styles.techItem}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h3 style={styles.footerTitle}>Let's Build Something Amazing</h3>
          <p style={styles.footerDescription}>
            Ready to architect the future of your infrastructure? Let's connect and create systems that inspire.
          </p>
          <div style={styles.footerSocial}>
            <button style={styles.footerSocialButton}>
              <GitHubIcon />
            </button>
            <button style={styles.footerSocialButton}>
              <LinkedInIcon />
            </button>
            <button style={styles.footerSocialButton}>
              <MailIcon />
            </button>
          </div>
          <p style={{color: '#9ca3af', marginBottom: '8px'}}>
            © 2025 Krishnendu Bhowmick. Crafted with ❤️ and React.
          </p>
          <p style={{color: '#6b7280', fontSize: '14px'}}>
            Senior DevOps Engineer | Automation Specialist
          </p>
        </div>
      </footer>
    </div>
  );
}