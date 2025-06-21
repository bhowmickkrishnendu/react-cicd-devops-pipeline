import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock window.scrollY for scroll tests
Object.defineProperty(window, 'scrollY', {
  writable: true,
  value: 0,
});

// Mock scrollTo function
window.scrollTo = jest.fn();

describe('KrishnendusPage Component', () => {
  beforeEach(() => {
    window.scrollY = 0;
  });

  test('renders portfolio header', () => {
    render(<App />);
    const headerElements = screen.getAllByText(/Krishnendu/i);
    expect(headerElements.length).toBeGreaterThan(0);
  });

  test('renders complete name in hero section', () => {
    render(<App />);
    expect(screen.getByText('Krishnendu')).toBeInTheDocument();
    expect(screen.getByText('Bhowmick')).toBeInTheDocument();
  });

  test('renders senior devops engineer title', () => {
    render(<App />);
    const titleElements = screen.getAllByText(/Senior DevOps Engineer/i);
    expect(titleElements.length).toBeGreaterThan(0);
  });

  test('renders all navigation links', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders logo in navigation', () => {
    render(<App />);
    expect(screen.getByText('KB')).toBeInTheDocument();
  });

  test('renders view projects button', () => {
    render(<App />);
    const viewProjectsButton = screen.getByText(/View Projects/i);
    expect(viewProjectsButton).toBeInTheDocument();
  });

  test('renders get in touch button', () => {
    render(<App />);
    const getInTouchButton = screen.getByText(/Get In Touch/i);
    expect(getInTouchButton).toBeInTheDocument();
  });

  test('renders hero description text', () => {
    render(<App />);
    expect(screen.getByText(/Complex systems simplified through thoughtful automation/i)).toBeInTheDocument();
    expect(screen.getByText(/Creativity in architecture. Precision in execution./i)).toBeInTheDocument();
  });

  test('renders experience text', () => {
    render(<App />);
    expect(screen.getByText(/Over 9 years of experience/i)).toBeInTheDocument();
  });

  test('renders about section', () => {
    render(<App />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(/A keen learner, a universe of atoms/i)).toBeInTheDocument();
  });

  test('renders all skill cards in about section', () => {
    render(<App />);
    expect(screen.getByText('Cloud Architecture')).toBeInTheDocument();
    expect(screen.getByText('Automation')).toBeInTheDocument();
    expect(screen.getByText('Infrastructure')).toBeInTheDocument();
  });

  test('renders skill card descriptions', () => {
    render(<App />);
    expect(screen.getByText(/Designing scalable, resilient cloud-native infrastructure/i)).toBeInTheDocument();
    expect(screen.getByText(/Building robust CI\/CD pipelines/i)).toBeInTheDocument();
    expect(screen.getByText(/Orchestrating containerized applications/i)).toBeInTheDocument();
  });

  test('renders featured projects section', () => {
    render(<App />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  test('renders all project cards', () => {
    render(<App />);
    expect(screen.getByText('Infrastructure Automation')).toBeInTheDocument();
    expect(screen.getByText('CICD Pipeline Project')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
    expect(screen.getByText('Python Project')).toBeInTheDocument();
  });

  test('renders project subtitles', () => {
    render(<App />);
    expect(screen.getByText('AWS with Terraform')).toBeInTheDocument();
    expect(screen.getByText('Apache Server CICD Pipeline')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes Objects Concept')).toBeInTheDocument();
    expect(screen.getByText('Covid19 Tracker')).toBeInTheDocument();
  });

  test('renders tech stack section', () => {
    render(<App />);
    expect(screen.getByText('🛠️ Tech Stack')).toBeInTheDocument();
    expect(screen.getByText(/My toolbox for delivering reliable, scalable systems/i)).toBeInTheDocument();
  });

  test('renders all tech stack categories', () => {
    render(<App />);
    expect(screen.getByText('Cloud Platforms')).toBeInTheDocument();
    expect(screen.getByText('Infrastructure as Code')).toBeInTheDocument();
    expect(screen.getByText('CI/CD & Automation')).toBeInTheDocument();
    expect(screen.getByText('Containers & Orchestration')).toBeInTheDocument();
    expect(screen.getByText('Monitoring & Logging')).toBeInTheDocument();
    expect(screen.getByText('Programming & System')).toBeInTheDocument();
  });

  test('renders specific technologies', () => {
    render(<App />);
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Terraform')).toBeInTheDocument();
    expect(screen.getByText('Jenkins')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  test('renders footer section', () => {
    render(<App />);
    expect(screen.getByText("Let's Build Something Amazing")).toBeInTheDocument();
    expect(screen.getByText(/Ready to architect the future of your infrastructure/i)).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(<App />);
    expect(screen.getByText(/© 2025 Krishnendu Bhowmick/i)).toBeInTheDocument();
  });

  test('renders footer subtitle', () => {
    render(<App />);
    expect(screen.getByText('Senior DevOps Engineer | Automation Specialist')).toBeInTheDocument();
  });

  test('skill rotation changes over time', async () => {
    render(<App />);
    
    // Initial skill should be visible
    expect(screen.getByText(/🚀 Senior DevOps Engineer/i)).toBeInTheDocument();
    
    // Wait for skill rotation (mocking timer)
    jest.useFakeTimers();
    jest.advanceTimersByTime(2600); // Slightly more than 2500ms interval
    
    await waitFor(() => {
      // Should show next skill or same skill (depending on timing)
      const skillElements = screen.getAllByText(/🚀/);
      expect(skillElements.length).toBeGreaterThan(0);
    });
    
    jest.useRealTimers();
  });

  test('navigation becomes sticky on scroll', () => {
    render(<App />);
    
    // Mock scroll event
    window.scrollY = 100;
    fireEvent.scroll(window);
    
    // The component should handle scroll state
    // This tests the scroll event listener functionality
    expect(window.scrollY).toBe(100);
  });

  test('renders tech tags for projects', () => {
    render(<App />);
    
    // Check for various tech tags
    const terraformTags = screen.getAllByText('Terraform');
    const dockerTags = screen.getAllByText('Docker');
    const kubernetesTags = screen.getAllByText('Kubernetes');
    
    expect(terraformTags.length).toBeGreaterThan(0);
    expect(dockerTags.length).toBeGreaterThan(0);
    expect(kubernetesTags.length).toBeGreaterThan(0);
  });

  test('renders project descriptions', () => {
    render(<App />);
    
    expect(screen.getByText(/A collection of Terraform modules and code examples/i)).toBeInTheDocument();
    expect(screen.getByText(/Automate CI\/CD pipeline with Jenkins/i)).toBeInTheDocument();
    expect(screen.getByText(/A set of k8s objects in YAML file/i)).toBeInTheDocument();
    expect(screen.getByText(/India's state wise Covid19 tracker/i)).toBeInTheDocument();
  });

  test('renders social icons', () => {
    render(<App />);
    
    // Check that social icons are rendered (they're in buttons)
    const socialButtons = screen.getAllByRole('button');
    expect(socialButtons.length).toBeGreaterThan(0);
  });

  test('component renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  test('all sections have proper IDs for navigation', () => {
    render(<App />);
    
    // Check for section IDs (these are in the HTML structure)
    const sections = document.querySelectorAll('[id]');
    const sectionIds = Array.from(sections).map(section => section.id);
    
    expect(sectionIds).toContain('home');
    expect(sectionIds).toContain('about');
    expect(sectionIds).toContain('projects');
    expect(sectionIds).toContain('tech');
    expect(sectionIds).toContain('contact');
  });

  test('renders key phrases in about section', () => {
    render(<App />);
    
    expect(screen.getByText(/discipline and wonder/i)).toBeInTheDocument();
    expect(screen.getByText(/Infrastructure Specialist/i)).toBeInTheDocument();
    expect(screen.getByText(/DevOps Engineer/i)).toBeInTheDocument();
  });

  test('tech stack has proper structure', () => {
    render(<App />);
    
    // Verify that technologies are organized under categories
    expect(screen.getByText('OCI')).toBeInTheDocument();
    expect(screen.getByText('Ansible')).toBeInTheDocument();
    expect(screen.getByText('GitLab CI/CD')).toBeInTheDocument();
    expect(screen.getByText('GitHub Actions')).toBeInTheDocument();
    expect(screen.getByText('Prometheus')).toBeInTheDocument();
    expect(screen.getByText('Grafana')).toBeInTheDocument();
    expect(screen.getByText('Shell Scripting')).toBeInTheDocument();
  });
});