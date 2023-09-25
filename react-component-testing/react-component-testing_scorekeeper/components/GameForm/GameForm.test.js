import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));



test('renders two input fields and a button', () => {
 
  jest.mock('next/router', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));

 
  render(<GameForm onCreateGame={jest.fn()} />);

  
  const nameOfGameInput = screen.getByLabelText('Name of game');
  const playerNamesInput = screen.getByLabelText('Player names, separated by comma');
  const createGameButton = screen.getByText('Create game');

  expect(nameOfGameInput).toBeInTheDocument();
  expect(playerNamesInput).toBeInTheDocument();
  expect(createGameButton).toBeInTheDocument();
});


test("renders a form with the accessible name 'Create a new game'", () => {});

test("submits the correct form data when every field is filled out", async () => {});

test("does not submit form if one input field is left empty", async () => {});
