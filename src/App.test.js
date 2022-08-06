import { render, screen } from '@testing-library/react';
import App from './App';
import MovieCard from './components/MovieCard';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test MovieCard Rating

test('MovieCard Rating', (props) => {
  render(<MovieCard />);
  const movieRating = props.movieList[1];
  expect(movieRating).toBe(8.6);
});

// Test MovieCard Year

test('MovieCard Year', (props) => {
  render(<MovieCard />);
  const movieYear = props.movieList[year]
  expect(movieYear).toBe(1997);
});