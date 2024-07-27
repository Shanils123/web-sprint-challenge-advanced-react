import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import AppFunctional from './AppFunctional';

test('if reset works correctly', async () => {
  const user = userEvent.setup()
  render(<AppFunctional />)
  const count = screen.getByText("You moved 0 times")
  const left = screen.getByText("LEFT")
  const reset = screen.getByText("reset")

  await user.click(left)
  await user.click(reset)

  expect(count).toHaveTextContent("You moved 0 times")
})

test('if left works correctly', async () => {
  const user = userEvent.setup()
  render(<AppFunctional />)
  const coordinates = screen.getByText("Coordinates (2, 2)")
  const left = screen.getByText("LEFT")
  const reset = screen.getByText("reset")

  await user.click(reset)
  await user.click(left)
  
  expect(coordinates).toHaveTextContent("Coordinates (1, 2)")
})

test('if right works correctly', async () => {
  const user = userEvent.setup()
  render(<AppFunctional />)
  const coordinates = screen.getByText("Coordinates (2, 2)")
  const right = screen.getByText("RIGHT")
  const reset = screen.getByText("reset")

  await user.click(reset)
  await user.click(right)
  
  expect(coordinates).toHaveTextContent("Coordinates (3, 2)")
})

test('if up works correctly', async () => {
  const user = userEvent.setup()
  render(<AppFunctional />)
  const coordinates = screen.getByText("Coordinates (2, 2)")
  const up = screen.getByText("UP")
  const reset = screen.getByText("reset")

  await user.click(reset)
  await user.click(up)
  
  expect(coordinates).toHaveTextContent("Coordinates (2, 1)")
})

test('if down works correctly', async () => {
  const user = userEvent.setup()
  render(<AppFunctional />)
  const coordinates = screen.getByText("Coordinates (2, 2)")
  const down = screen.getByText("DOWN")
  const reset = screen.getByText("reset")

  await user.click(reset)
  await user.click(down)
  
  expect(coordinates).toHaveTextContent("Coordinates (2, 3)")
})
