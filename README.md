Here is an example of a README for the electronic voting machine project.

---

# Simulated Brazilian Electronic Voting Machine

This is a simulation project of a Brazilian electronic voting machine, developed with HTML, CSS and JavaScript. The voting machine allows the user to vote for two fictitious candidates, "Kamala Harris" (number 13) and "Donald Trump" (number 22), as well as options for blank votes and corrections. Each vote is stored in `localStorage`, and the voting result is displayed each time a new vote is confirmed.

## Functionalities

- **Numeric Keypad:** The user can enter a candidate number using the buttons 0 to 9.
- **Action Buttons:** Buttons for "Blank", "Correct" and "Confirm".
- **Candidate Display:** Displays the candidate's photo and name when entering the corresponding number.
- **Blank Vote:** Allows the user to vote blank.
- **Vote Correction:** Clears the input field so that the user can correct their vote.
- **Vote Storage:** Votes are stored in the browser's `localStorage`.
- **Results Display:** Displays the total votes for each candidate and blank votes for each confirmed vote.

## File Structure

- **index.html**: HTML structure of the ballot box.
- **style.css**: CSS styles for the ballot box interface (integrated directly into the HTML).
- **script.js**: JavaScript logic for the ballot box operation (also integrated directly into the HTML).
- **Images**: Includes the images of the candidates and a default initial image (eua.png).

## How to Use

1. **Clone the Repository**: Download the code from this repository.
2. **Image Structure**: Insert the following images into the project directory:
- `eua.png`: Initial image to be displayed on the ballot box. - `kamala.jpg`: Photo of Kamala Harris.
- `trump.jpg`: Photo of Donald Trump.
3. **Run the Project**: Open the `index.html` file in your browser.

## Step by Step for Voting

1. **Enter Candidate Number**: Use the numeric keypad on the ballot box to enter a candidate's number:
- **13** for **Kamala Harris**
- **22** for **Donald Trump**
2. **Confirm Vote**:
- If the number entered is valid, the ballot box will display the candidate's photo and name on the left side.
- If the number does not correspond to a candidate, the initial image (`eua.png`) will be displayed.
3. **Available Actions**:
- **Blank**: Vote blank, ignoring the number entered.
- **Correct**: Clear the number entered, allowing you to correct your vote. - **Confirm**: Confirms the vote and stores it in `localStorage`.
4. **Results Display**: After confirming the vote, an alert will display the updated total votes for each candidate, in addition to the blank votes.

## Code Logic

- **JavaScript**: The voting logic is controlled by JavaScript functions.
- `addNumber(num)`: Adds the entered number to the input field.
- `showCandidate()`: Displays the candidate's photo and name if the entered number matches a candidate.
- `voteBlank()`: Records a blank vote.
- `correct()`: Clears the entered number for correction.
- `confirm()`: Confirms the vote, saves it in `localStorage`, clears the field and displays the updated results.
- `displayResults(votes)`: Shows the total votes for each candidate and blank votes.

## Usage Example and Results

With each confirmed vote, the user will see an alert with the vote count for:
- **Kamala Harris**
- **Donald Trump**
- **Blank Votes**

## Future Improvements

- Implementation of an interface to restart voting and clear `localStorage`.
- Improve the interface to more accurately simulate the Brazilian ballot box.

## Screenshot

Insert a screenshot of the project here, with the images of the candidates and the ballot box keyboard.

## License

This project is developed for educational and simulation purposes.