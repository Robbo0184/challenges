import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";



test('renders player information and two buttons', () => {
  
  const testProps = {
    name: 'John Doe',
    score: 42,
    onDecreasePlayerScore: jest.fn(),
    onIncreasePlayerScore: jest.fn(),
  };

  render(<Player {...testProps} />);

  // Assert that the player's name is rendered
  const playerNameElement = screen.getByText('John Doe');
  expect(playerNameElement).toBeInTheDocument();

  // Assert that the player's score is rendered
  const playerScoreElement = screen.getByText('42');
  expect(playerScoreElement).toBeInTheDocument();

  // Assert that the two buttons are rendered
  const decreaseButton = screen.getByLabelText('Decrease Score');
  const increaseButton = screen.getByLabelText('Increase Score');
  expect(decreaseButton).toBeInTheDocument();
  expect(increaseButton).toBeInTheDocument();
});


test("calls callbacks when increasing or decreasing score", async () => {});
