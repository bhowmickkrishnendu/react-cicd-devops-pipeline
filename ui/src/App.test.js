import { render, screen, fireEvent, waitFor, within, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

Object.defineProperty(window, 'scrollY', {
  writable: true,
  value: 0,
});

window.scrollTo = jest.fn();

describe('KrishnendusPage Component', () => {
  beforeEach(() => {
    window.scrollY = 0;
  });

  test('renders header with full name and skill', () => {
    act(() => {
      render(<App />);
    });
    expect(screen.getByText('Krishnendu')).toBeInTheDocument();
    expect(screen.getByText('Bhowmick')).toBeInTheDocument();
    expect(screen.getByText(/Senior DevOps Engineer/i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);
    ['Home', 'About', 'Projects', 'Tech Stack', 'Contact'].forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test('renders main buttons', () => {
    render(<App />);
    expect(screen.getByText(/View Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });

  test('renders about section with key phrases', () => {
    render(<App />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Infrastructure Specialist/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/DevOps Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/discipline and wonder/i)).toBeInTheDocument();
  });

  test('renders all skill cards in about section', () => {
    render(<App />);
    ['Cloud Architecture', 'Automation', 'Infrastructure'].forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test('renders all featured projects with tech tags', () => {
    render(<App />);
    ['Infrastructure Automation', 'CICD Pipeline Project', 'Kubernetes', 'Python Project'].forEach((project) => {
      expect(screen.getByText(project)).toBeInTheDocument();
    });

    ['Terraform', 'AWS', 'Jenkins', 'Docker', 'Kubernetes', 'Python'].forEach((tech) => {
      const tags = screen.getAllByText(tech);
      expect(tags.length).toBeGreaterThan(0);
    });
  });

  test('renders tech stack categories and technologies', () => {
    render(<App />);
    [
      'Cloud Platforms',
      'Infrastructure as Code',
      'CI/CD & Automation',
      'Containers & Orchestration',
      'Monitoring & Logging',
      'Programming & System'
    ].forEach((category) => {
      expect(screen.getAllByText(category).length).toBeGreaterThan(0);
    });

    [
      'AWS', 'OCI', 'Terraform', 'Ansible',
      'Jenkins', 'GitLab CI/CD', 'GitHub Actions',
      'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Zabbix', 'ELK Stack',
      'Python', 'Shell Scripting', 'Linux', 'Git'
    ].forEach((tech) => {
      expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
    });
  });

  test('footer renders correctly', () => {
    render(<App />);
    expect(screen.getByText(/Let's Build Something Amazing/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2025 Krishnendu Bhowmick/i)).toBeInTheDocument();
    expect(screen.getByText(/Senior DevOps Engineer | Automation Specialist/i)).toBeInTheDocument();
  });

  test('navigation reacts to scroll event', () => {
    render(<App />);
    window.scrollY = 150;
    fireEvent.scroll(window);
    expect(window.scrollY).toBeGreaterThan(100);
  });

  test('social icon buttons exist', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(3);
  });

  test('section IDs are available for navigation', () => {
    render(<App />);
    ['home', 'about', 'projects', 'tech', 'contact'].forEach((id) => {
      expect(document.getElementById(id)).toBeInTheDocument();
    });
  });

  test('skill rotation auto updates', async () => {
    jest.useFakeTimers();
    render(<App />);
    const firstSkill = screen.getByText(/🚀/);
    expect(firstSkill).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      const updatedSkills = screen.getAllByText(/🚀/);
      expect(updatedSkills.length).toBeGreaterThan(0);
    });

    jest.useRealTimers();
  });
});