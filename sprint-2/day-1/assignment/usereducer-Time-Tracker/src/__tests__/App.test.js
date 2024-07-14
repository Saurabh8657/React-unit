import React from "react";
import {
  cleanup,
  render,
  screen,
  fireEvent,
  renderHook,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { formReducer, initialFormState } from "../reducers/formReducer";
import {
  activityReducer,
  initialActivityState,
} from "../reducers/activityReducer";
import { ActivityCard } from "../component/ActivityCard";
import { useTimer } from "../Hooks/useTimerHook";
import { act } from "react-dom/test-utils";

const formState = {
  activity: "",
  user: "",
  gender: "",
  time: 0,
};

const activityState = {
  activities: [],
};

describe("React Form Component Testing", () => {
  beforeAll(() => {
    global.score = 1;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });

  beforeEach(() => {
    cleanup();
    const defaultFormState = formReducer(initialFormState, {
      type: "not-present",
    });
    expect(defaultFormState).toStrictEqual(formState);
  });

  it("Activity reducer initialState should match with the initial state as per problem", () => {
    expect(initialFormState).toStrictEqual(formState);
    global.score += 1;
  });

  it("Form reducer initialstate should match the initial state as per problem", () => {
    expect(initialFormState).toStrictEqual(formState);
    global.score += 1;
  });

  it("Form Reducer should update on typing activity in the input box", () => {
    render(<App />);
    const activityInput = screen
      .getByTestId("activity-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(activityInput, { target: { value: "Activity-1" } });
    expect(activityInput).toHaveValue("Activity-1");

    const newState = formReducer(initialFormState, {
      type: "ACTIVITY",
      payload: "Activity-1",
    });
    expect(newState).toStrictEqual({ ...formState, activity: "Activity-1" });
    global.score += 1;
  });

  it("Form reducer should update on typing user in the input box", () => {
    render(<App />);
    const userInput = screen
      .getByTestId("user-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(userInput, { target: { value: "Aditya" } });
    expect(userInput).toHaveValue("Aditya");

    const newState = formReducer(initialFormState, {
      type: "USER",
      payload: "Aditya",
    });

    expect(newState).toStrictEqual({ ...initialFormState, user: "Aditya" });
    global.score += 1;
  });

  it("Form reducer should update on selecting gender from the options", () => {
    render(<App />);
    const selectGender = screen.getByRole("combobox");
    userEvent.selectOptions(
      selectGender,
      screen.getAllByRole("option", {
        name: "Male",
      })
    );
    expect(screen.getByRole("option", { name: "Male" }).selected).toBe(true);

    const newState = formReducer(initialFormState, {
      type: "GENDER",
      payload: "male",
    });

    expect(newState).toStrictEqual({ ...formState, gender: "male" });
    global.score += 1;
  });

  it("Form reducer should update on typing time in the input box", () => {
    render(<App />);
    const timeInput = screen
      .getByTestId("time-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(timeInput, {
      target: {
        value: 10,
      },
    });
    expect(timeInput).toHaveValue(10);

    const newState = formReducer(initialFormState, {
      type: "TIME",
      payload: 10,
    });

    expect(newState).toStrictEqual({
      ...formState,
      time: 10,
    });
    global.score += 1;
  });

  it("Form is present with proper input fields to take input of activities", () => {
    render(<App />);
    const inputForm = screen.getByTestId("input-form");
    expect(inputForm).toBeInTheDocument();

    const activityInput = screen
      .getByTestId("activity-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(activityInput, { target: { value: "Activity-1" } });
    expect(activityInput).toHaveValue("Activity-1");

    const userInput = screen
      .getByTestId("user-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(userInput, { target: { value: "Test User" } });
    expect(userInput).toHaveValue("Test User");

    const selectGender = screen.getByRole("combobox");
    userEvent.selectOptions(
      selectGender,
      screen.getAllByRole("option", {
        name: "Female",
      })
    );
    expect(screen.getByRole("option", { name: "Female" }).selected).toBe(true);

    const timeInput = screen
      .getByTestId("time-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(timeInput, {
      target: {
        value: 20,
      },
    });
    expect(timeInput).toHaveValue(20);

    global.score += 1;
  });

  it(`Activity Reducer state should update on adding activity`, () => {
    const newActivity = {
      activity: "Test-Activity",
      user: "Aditya",
      gender: "male",
      time: 20,
    };
    const newState = activityReducer(initialActivityState, {
      type: "ADD_ACTIVITY",
      payload: newActivity,
    });
    expect(newState).toStrictEqual({
      ...activityState,
      activities: [newActivity],
    });
    global.score += 1;
  });

  it("The added activities should be displayed on DOM", () => {
    render(<App />);
    jest.useFakeTimers();
    const inputForm = screen.getByTestId("input-form");
    expect(inputForm).toBeInTheDocument();

    const activityInput = screen
      .getByTestId("activity-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(activityInput, { target: { value: "Activity-1" } });
    expect(activityInput).toHaveValue("Activity-1");

    const userInput = screen
      .getByTestId("user-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(userInput, { target: { value: "Aditya" } });
    expect(userInput).toHaveValue("Aditya");

    const selectGender = screen.getByRole("combobox");
    userEvent.selectOptions(
      selectGender,
      screen.getAllByRole("option", {
        name: "Male",
      })
    );
    expect(screen.getByRole("option", { name: "Male" }).selected).toBe(true);

    const timeInput = screen
      .getByTestId("time-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(timeInput, {
      target: {
        value: 5,
      },
    });
    expect(timeInput).toHaveValue(5);

    fireEvent.submit(inputForm);

    expect(screen.getAllByTestId("activity-name")[0]).toHaveTextContent(
      "Activity-1"
    );

    expect(screen.getAllByTestId("activity-user")[0]).toHaveTextContent(
      "Aditya"
    );

    expect(screen.getAllByTestId("activity-gender")[0]).toHaveTextContent(
      "male"
    );

    expect(screen.getAllByTestId("activity-status")[0]).toHaveTextContent(
      "False"
    );

    expect(screen.getAllByTestId("activity-time")[0]).toHaveTextContent(5);

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(screen.getAllByTestId("activity-status")[0]).toHaveTextContent(
      "False"
    );
    jest.useRealTimers();
    global.score += 2;
  });

  it(`Required Proptypes should be defined for all the props in ActivityCard component`, () => {
    jest.spyOn(console, "error");
    const newActivity = {
      activity: 20,
      user: 10,
      time: "20",
    };
    render(<ActivityCard {...newActivity} />);
    expect(console.error).toBeCalledTimes(4);
    global.score += 2;
  });

  // Custom Hook

  it("should initialize with the correct time and status", () => {
    const initialTime = 10;
    const { result } = renderHook(() => useTimer(initialTime));
    expect(result.current[0]).toBe(initialTime);
    expect(result.current[1]).toBe(false);

    global.score += 1;
  });

  it("should start the timer and decrement the time every second", () => {
    const initialTime = 5;
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimer(initialTime));

    // Check initial state
    expect(result.current[0]).toBe(initialTime);
    expect(result.current[1]).toBe(false);

    // Advance time by 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Check updated state
    expect(result.current[0]).toBe(initialTime - 1);
    expect(result.current[1]).toBe(false);

    // Advance time by 4 seconds
    act(() => {
      jest.advanceTimersByTime(4000);
    });

    // Check updated state
    expect(result.current[0]).toBe(initialTime - 5);
    expect(result.current[1]).toBe(true);

    jest.useRealTimers();

    global.score += 2;
  });

  it("should end the timer when time reaches 0", () => {
    const initialTime = 3;
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimer(initialTime));

    // Check initial state
    expect(result.current[0]).toBe(initialTime);
    expect(result.current[1]).toBe(false);

    // Advance time by 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Check updated state
    expect(result.current[0]).toBe(0);
    expect(result.current[1]).toBe(true);

    jest.useRealTimers();

    global.score += 2;
  });

  it("should clear interval when component unmounts", () => {
    const initialTime = 5;
    jest.useFakeTimers();
    jest.spyOn(global, "clearInterval");

    const { result, unmount } = renderHook(() => useTimer(initialTime));

    // Check initial state
    expect(result.current[0]).toBe(initialTime);
    expect(result.current[1]).toBe(false);

    // Advance time by 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Check updated state
    expect(result.current[0]).toBe(initialTime - 3);
    expect(result.current[1]).toBe(false);

    // Unmount the component
    unmount();

    // Check that the interval is cleared
    expect(clearInterval).toHaveBeenCalled();

    jest.useRealTimers();
    global.score += 2;
  });
});
