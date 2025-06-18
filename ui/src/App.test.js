import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElements = screen.getAllByText(/Krishnendu/i);
  expect(headerElements.length).toBeGreaterThan(0);
});

test('renders senior devops engineer title', () => {
  render(<App />);
  const titleElements = screen.getAllByText(/Senior DevOps Engineer/i);
  expect(titleElements.length).toBeGreaterThan(0);
});

test('renders navigation links', () => {
  render(<App />);
  const homeLinks = screen.getAllByText(/Home/i);
  const aboutLinks = screen.getAllByText(/About/i);
  const projectsLinks = screen.getAllByText(/Projects/i);
  
  expect(homeLinks.length).toBeGreaterThan(0);
  expect(aboutLinks.length).toBeGreaterThan(0);
  expect(projectsLinks.length).toBeGreaterThan(0);
});

test('renders view projects button', () => {
  render(<App />);
  const viewProjectsButton = screen.getByText(/View Projects/i);
  expect(viewProjectsButton).toBeInTheDocument();
});

test('renders app without crashing', () => {
  render(<App />);
  expect(document.body).toBeInTheDocument();
});