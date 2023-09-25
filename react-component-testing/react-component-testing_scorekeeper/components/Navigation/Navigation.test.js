import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test('renders "Play" and "History" as links', () => {
  render(<Navigation players={[]} />);
  const playLinks = screen.getAllByText('Play');
  const historyLinks = screen.getAllByText('History');

  playLinks.forEach((link) => {
    expect(link.tagName).toBe('A');
  });
  historyLinks.forEach((link) => {
    expect(link.tagName).toBe('A');
  });

  
  expect(playLinks.length).toBeGreaterThan(0);
  expect(historyLinks.length).toBeGreaterThan(0);
});





