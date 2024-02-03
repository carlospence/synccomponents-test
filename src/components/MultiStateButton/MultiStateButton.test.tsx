import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import MultiStateButton from "./MultiStateButton";

describe("Running Test for Marbella Button", () => {

  test("Check Button Disabled", () => {
    render(<MultiStateButton  disabled/>)
    expect(screen.getByRole('button',{name:"Button marbella"})).toBeDisabled();
  });
});