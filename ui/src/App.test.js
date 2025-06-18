import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Krishnendu/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders senior devops engineer title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Senior DevOps Engineer/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  const projectsLink = screen.getByText(/Projects/i);
  
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
});

test('renders view projects button', () => {
  render(<App />);
  const viewProjectsButton = screen.getByText(/View Projects/i);
  expect(viewProjectsButton).toBeInTheDocument();
});