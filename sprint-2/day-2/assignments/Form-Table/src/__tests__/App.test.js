import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App.jsx";

global.score = 1;
describe("App component should render", () => {
  it("The Form and the table components are present in the DOM", () => {
    render(<App />);
    expect(screen.getByTestId("user-form")).toBeInTheDocument();
    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    global.score += 1;
  }); //1

  test("When the form Submit happens it adds a new row on the table", () => {
    render(<App />);
    const nameInput = screen.getByTestId("form-name");
    const emailInput = screen.getByTestId("form-email");
    const passwordInput = screen.getByTestId("password-input");
    const genderSelect = screen.getByTestId("form-gender");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "secret" } });
    fireEvent.change(genderSelect, { target: { value: "Male" } });

    fireEvent.click(screen.getByText("ADD"));

    const rows = screen.getAllByTestId("row");
    expect(rows.length).toBe(1);
    global.score += 1;
  }); //1

  test("Check if the text that is being appended is correct or not", () => {
    render(<App />);
    const nameInput = screen.getByTestId("form-name");
    const emailInput = screen.getByTestId("form-email");
    const passwordInput = screen.getByTestId("password-input");
    const genderSelect = screen.getByTestId("form-gender");

    fireEvent.change(nameInput, { target: { value: "Alice Johnson" } });
    fireEvent.change(emailInput, { target: { value: "alice@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "securepass" } });
    fireEvent.change(genderSelect, { target: { value: "Female" } });

    fireEvent.click(screen.getByText("ADD"));

    const nameCell = screen.getByText("Alice Johnson");
    const emailCell = screen.getByText("alice@example.com");
    const passwordCell = screen.getByText("securepass");
    const genderCell = screen.getAllByText("Female");

    expect(nameCell).toBeInTheDocument();
    expect(emailCell).toBeInTheDocument();
    expect(passwordCell).toBeInTheDocument();
    expect(genderCell[0]).toBeInTheDocument();
    global.score += 1;
  }); //1

  test('Password input toggles visibility when "Show Password" checkbox is clicked', () => {
    render(<App />);
    const passwordInput = screen.getByTestId("password-input");
    const showPasswordCheckbox = screen.getByTestId("visibility-checkbox");
    expect(passwordInput.type).toBe("password"); // Initial state
    fireEvent.click(showPasswordCheckbox);
    expect(passwordInput.type).toBe("text"); // Password should be visible
    fireEvent.click(showPasswordCheckbox);
    expect(passwordInput.type).toBe("password"); // Password should be hidden again

    global.score += 1;
  }); //1
});
afterAll(() => {
  console.log("Final Score is", global.score);
});
