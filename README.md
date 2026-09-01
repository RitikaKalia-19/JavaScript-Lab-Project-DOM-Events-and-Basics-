# JavaScript Lab Project (DOM, Events, and Basics)

> This is an individual project.

## Table of Contents

- [Exercise #1: Changing Text](#exercise-1-changing-text)
- [Exercise #2: Changing Colors](#exercise-2-changing-colors)
- [Exercise #2b: Randomizing Initial Color](#exercise-2b-randomizing-initial-color)
- [Exercise #3: Changing Images](#exercise-3-changing-images)
- [Exercise #4: Formatting Text](#exercise-4-formatting-text)
- [Exercise #5: Input Check](#exercise-5-input-check)
- [Exercise #6: Content Show/Hide](#exercise-6-content-showhide)
- [Exercise #7: Simple Playlist](#exercise-7-simple-playlist)
- [Exercise #7b: Advanced Playlist](#exercise-7b-advanced-playlist)
- [Exercise #8: Color Picker](#exercise-8-color-picker)
- [Exercise #9: Labyrinth Game](#exercise-9-labyrinth-game)
- [Exercise #10: Internet Security Breach](#exercise-10-internet-security-breach)

---

## Exercise #1: Changing Text

Extend [`exercise1.html`](exercise1.html) so that:

- Moving the mouse **over** the yellow box changes its text to `"Can I help you?"`
- Moving the mouse **outside** the box changes the text back to `"Hello world!"`

![Exercise1](images/exercise1.png)

---

## Exercise #2: Changing Colors

[`exercise2.html`](exercise2.html) contains a 200x200px `div`. Write JS code that:

- Sets the initial color of the div to **blue**
- Changes the color on each click, cycling: `blue → red → green → blue → ...`

> **Constraint:** Only code inside `<script>...</script>` may be changed — no other HTML may be modified.

![Exercise2](images/exercise2.png)

---

## Exercise #2b: Randomizing Initial Color

Extend Exercise #2:

- The div's initial color should be chosen **randomly**.
- Bonus: generalize the code to work with an **array of arbitrary colors**, cycling to the next color in the array on each click and wrapping around after the last one.

---

## Exercise #3: Changing Images

The page shows a select list and a "no image" picture by default.

- When the user changes the selection, display the corresponding image.
  - Set the image's `src` to the option's value.
  - Set the image's `alt` to the option's name.

![Exercise3](images/exercise3.png)
![Exercise3/2](images/exercise3_2.png)

---

## Exercise #4: Formatting Text

Create a simple WYSIWYG text editor.

- Update the text inside the `"text"` div according to the form selections.
- Starter file: [`exercise4.html`](exercise4.html)

![Exercise4](images/exercise4.png)

---

## Exercise #5: Input Check

Given a [form](exercise5.html) with two password fields and a submit button:

- Validate the input and display an error message next to the relevant field when there's a problem:
  - Passwords must be **at least 6 characters** long.
  - The two passwords must **match**.
- Error message placeholders are already present as `div`s with class `err`.
- The submit button is **hidden by default** and should only appear once there are no errors.

![Exercise5/1](images/exercise5_1.png)
![Exercise5/2](images/exercise5_2.png)
![Exercise5/3](images/exercise5_3.png)

---

## Exercise #6: Content Show/Hide

Starter file: [`exercise6.html`](exercise6.html)

- By default, show only the article headings (set the text `div`'s `display` to `"none"` via inline CSS).
- Clicking **"show"** reveals the article body and hides the "show" link.
- Clicking **"hide"** hides the article body and re-shows the "show" link.

![Exercise6](images/exercise6.png)

---

## Exercise #7: Simple Playlist

Build a simple playlist app where users can add songs (non-empty strings) to a list.

- Starter file: [`exercise7.html`](exercise7.html)
- Stylesheet: [`exercise7.css`](exercise7.css)

![Exercise7](images/exercise7.png)

---

## Exercise #7b: Advanced Playlist

Extend Exercise #7 so songs can also be **removed**:

- Add a delete link/icon to each song.
- Clicking it removes that song from the list.

---

## Exercise #8: Color Picker

Build a color picker:

- Display colored tiles (rectangles) inside the `"colors"` div.
- When a tile is clicked:
  - Write that color's code inside the `"selected"` div.
  - Set the `"selected"` div's background to that color.
- Starter files: [`exercise8.html`](exercise8.html) and partial [`exercise8.js`](exercise8.js) (already collects the colors into an array). **Only the JS file needs edits.**

![Exercise8](images/exercise8.png)

---

## Exercise #9: Labyrinth Game

Build a game where the player navigates a character out of a labyrinth using the keyboard arrows.

Starter files: [`exercise9.html`](exercise9.html), [`labyrinth.class.js`](labyrinth.class.js), [`game.js`](game.js)

### Step 1 — Console Rendering
- The labyrinth map is a 2D array (`1` = wall, `0` = empty space).
- Implement `printConsole()` on the `Labyrinth` class to print the map to the browser console (`*` for walls, spaces for empty cells).
- In `game.js`, instantiate a `Labyrinth` object and call `printConsole()` on page load.

![Exercise9/1](images/exercise9_1.png)

### Step 2 — On-Screen Rendering
- Implement `printDisplay(id)` to draw the labyrinth inside the element with the given `id`.
- Call this from `game.js` on the `map` div instead of `printConsole()`.
- Size the parent `map` div to fit the labyrinth and give it a solid border.
- Render cells as absolutely-positioned `div`s: grey background for walls, white for empty space. Use the `CELL_SIZE` global for rectangle dimensions (remember to set the parent's `position` to non-`static`).

![Exercise9/2](images/exercise9_2.png)

### Step 3 — Character Movement
- Add constants to the class for the start and destination coordinates. The character starts at the start position.
- Display the character on the map (e.g. a distinctly colored `div` or an image), and mark the destination cell distinctly as well.
- Let the user move the character with arrow keys. On each move, check that the target cell is (a) within bounds and (b) not a wall before moving.
- Show an `alert("Congratulations!")` when the character reaches the destination.

![Exercise9/3](images/exercise9_3.png)

---

## Exercise #10: Internet Security Breach

> Browsers expose powerful features that can be abused. This project explores how sites can spy on
> users, exfiltrate sensitive data, and render the browser inoperable — from an attacker's perspective,
> for educational purposes only.

**Setup notes:**
- Use **Firefox** for this and all projects in this class.
- You are role-playing as an attacker — HTML does **not** need to pass validation.
- Unless stated otherwise, keep everything self-contained in the HTML file (no external scripts/stylesheets).

### Part 1: Denial of Service

**a. Endless Alert**
- A page that shows a JS `alert()` on load, and immediately shows a new one each time the current one is dismissed, trapping the user.
- Recovery requires force-quitting the browser (Task Manager on Windows, Force Quit on macOS).
- Note: some browsers (Opera, Chrome) mitigate this; Firefox does not.

**b. Whack-a-Mole**
- A page with a single **"Click here"** button.
- Clicking it opens an endless stream of popup **windows** (not tabs), each using a `data:` URL so no network request is needed.
- Windows should open without waiting for previously opened ones to close.
- Must work with the popup blocker enabled (default setting).

**c. Sticky Page**
- A page the user cannot navigate away from — attempts to type a new URL, use a bookmark, or search should be redirected back.
- Must work regardless of the page's actual URL.
- Hints: use an `onbeforeunload`/`onunload` handler (removing it afterward to avoid an infinite loop), and/or `setTimeout` to delay re-navigation.
- A brief loading-indicator spin is acceptable; it should not spin forever.

---

## Project Structure

```
.
├── exercise1.html
├── exercise2.html
├── exercise3.html
├── exercise4.html
├── exercise5.html
├── exercise6.html
├── exercise7.html
├── exercise7.css
├── exercise8.html
├── exercise8.js
├── exercise9.html
├── labyrinth.class.js
├── game.js
├── images/
│   ├── exercise1.png
│   ├── exercise2.png
│   ├── exercise3.png
│   ├── exercise3_2.png
│   ├── exercise4.png
│   ├── exercise5_1.png
│   ├── exercise5_2.png
│   ├── exercise5_3.png
│   ├── exercise6.png
│   ├── exercise7.png
│   ├── exercise8.png
│   ├── exercise9_1.png
│   ├── exercise9_2.png
│   └── exercise9_3.png
└── README.md
```
