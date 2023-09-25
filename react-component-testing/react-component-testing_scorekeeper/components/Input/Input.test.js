import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";



test('renders a label associated with the input', () => {
 render(<Input (  labelText,
    placeholder,
    name,
    value,
    onChange,
    required,)/>)
});







test("calls callback on every user input", async () => {});
