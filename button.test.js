// Import the functions you want to test
const { newElement, clearElement, checkEdits } = require('./main.js'); // Replace with your actual file name

// Mock DOM elements and functions
document.querySelector = jest.fn();
localStorage.setItem = jest.fn();
localStorage.getItem = jest.fn(() => null); // Mock localStorage behavior

describe('Button Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test newElement function
  test('newElement should add a new note', () => {
    // Mock DOM elements and their properties
    const mockLi = document.createElement('li');
    document.createElement = jest.fn(() => mockLi);
    document.querySelector.mockReturnValueOnce({ value: 'Test Note' });

    // Call the function
    newElement();

    // Assertions
    expect(mockLi.appendChild).toHaveBeenCalledTimes(3); // Assuming you have 3 appends in your function
    expect(localStorage.setItem).toHaveBeenCalled(); // Assuming you save data to localStorage
  });

  // Test clearElement function
  test('clearElement should clear input', () => {
    // Mock DOM elements and their properties
    document.querySelector.mockReturnValueOnce({ value: 'Test Note' });

    // Call the function
    clearElement();

    // Assertions
    expect(document.querySelector).toHaveBeenCalledWith('#myInput');
    expect(document.querySelector().value).toBe('');
  });

  // Test checkEdits function
  test('checkEdits should populate saved notes', () => {
    // Mock localStorage data
    localStorage.getItem = jest.fn(() => 'Test Saved Notes');

    // Call the function
    checkEdits();

    // Assertions
    expect(document.querySelector).toHaveBeenCalledWith('#saved-notes');
    expect(document.querySelector().innerHTML).toBe('Test Saved Notes');
  });
});
