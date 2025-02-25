import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest"; // Ensure `expect` is imported
import App from "../App";

test('render Vite + React text', () => {
  render(<App />);
  
  // Adjust this text to match exactly what is in your App component
  const linkElement = screen.getByText(/Vite \+ React/i); 

  expect(linkElement).toBeInTheDocument();
});
