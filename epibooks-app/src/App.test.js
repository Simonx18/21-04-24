import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Rendering and filtering tests', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('Checks if the welcome message is rendered', () => {
    const welcomeHeader = screen.getByText(/welcome to epicbooks!/i)
    expect(welcomeHeader).toBeInTheDocument()
  })

  test('Counts the number of book cards', () => {
    const bookCards = screen.getAllByTestId('book-card')
    expect(bookCards).toHaveLength(150)
  })

  test('Checks if the comment input field is rendered', () => {
    const commentInput = screen.getByPlaceholderText(/search by title/i)
    expect(commentInput).toBeInTheDocument()
  })

  test("Filters the books and finds one result for the word 'arrow'", () => {
    const filterInput = screen.getByPlaceholderText(/search by title/i)
    fireEvent.change(filterInput, { target: { value: 'arrow' } })
    const filteredBooks = screen.getAllByTestId('book-card')
    expect(filteredBooks).toHaveLength(1)
  })

  test("Filters the books and finds three results for the word 'witcher'", () => {
    const filterInput = screen.getByPlaceholderText(/search by title/i)
    fireEvent.change(filterInput, { target: { value: 'witcher' } })
    const filteredBooks = screen.getAllByTestId('book-card')
    expect(filteredBooks).toHaveLength(3)
  })
})

describe('SingleBook and CommentList tests', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('Changes the border color of the book card when clicked', () => {
    const bookCards = screen.getAllByTestId('book-card')
    const firstBookCard = bookCards[0]
    fireEvent.click(firstBookCard)
    expect(firstBookCard).toHaveStyle('border: 3px solid red') // Assuming a class 'selected' is applied to the selected card
  })

  test('Restores the border color of the book card when a second book is clicked', () => {
    const bookCards = screen.getAllByTestId('book-card')
    const firstBookCard = bookCards[0]
    fireEvent.click(firstBookCard)
    const secondBookCard = bookCards[1]
    fireEvent.click(secondBookCard)
    expect(firstBookCard).not.toHaveStyle('border: 3px solid red') // Assuming a class 'selected' is applied to the selected card
  })

  test('Checks if no book comments are rendered on load', () => {
    const bookComments = screen.queryAllByTestId('single-comment')
    expect(bookComments).toHaveLength(0)
  })

  test('Renders comments when a valid book is clicked', async () => {
    const bookCards = screen.getAllByTestId('book-card')
    const firstBookCard = bookCards[0]
    fireEvent.click(firstBookCard)
    const bookComments = await screen.findAllByTestId('single-comment')
    expect(bookComments).not.toHaveLength(0)
  })
})