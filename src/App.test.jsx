import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders the seeded projects", () => {
  render(<App />);
  expect(screen.getByText("Harbor Coffee Rebrand")).toBeInTheDocument();
});

test("search filters projects", async () => {
  render(<App />);
  await userEvent.type(screen.getByLabelText(/search projects/i), "tidewatch");
  expect(screen.getByText("Tidewatch App")).toBeInTheDocument();
  expect(screen.queryByText("Harbor Coffee Rebrand")).not.toBeInTheDocument();
});

test("form adds a new project", async () => {
  render(<App />);
  await userEvent.type(screen.getByLabelText("Title"), "Kite Festival Poster");
  await userEvent.type(screen.getByLabelText("Description"), "A risograph poster series.");
  await userEvent.click(screen.getByRole("button", { name: /save project/i }));
  expect(screen.getByText("Kite Festival Poster")).toBeInTheDocument();
});

test("form shows an error when required fields are empty", async () => {
  render(<App />);
  await userEvent.click(screen.getByRole("button", { name: /save project/i }));
  expect(screen.getByRole("alert")).toBeInTheDocument();
});