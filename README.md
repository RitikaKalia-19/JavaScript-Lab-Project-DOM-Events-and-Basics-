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

📁 [`exercise1/`](exercise1)

- Moving the mouse **over** the yellow box changes its text to `"Can I help you?"`
- Moving the mouse **outside** the box changes the text back to `"Hello world!"`

---

## Exercise #2: Changing Colors

📁 [`exercise2/exercise2a/`](exercise2/exercise2a)

A 200x200px `div` that:

- Starts **blue**
- Changes color on each click, cycling: `blue → red → green → blue → ...`

> **Constraint:** Only code inside `<script>...</script>` was changed — no other HTML was modified.

---

## Exercise #2b: Randomizing Initial Color

📁 [`exercise2/exercise2b/`](exercise2/exercise2b)

Extends Exercise #2:

- The div's initial color is chosen **randomly**.
- Generalized to work with an **array of arbitrary colors**, cycling to the next color in the array on each click and wrapping around after the last one.

---

## Exercise #3: Changing Images

📁 [`exercise3/`](exercise3)

- A select list defaults to a "no image" picture.
- Changing the selection displays the corresponding image:
  - `src` is set to the option's value.
  - `alt` is set to the option's name.

---

## Exercise #4: Formatting Text

📁 [`exercise4/`](exercise4)

A simple WYSIWYG text editor — the text inside the `"text"` div updates according to the form selections.

---

## Exercise #5: Input Check

📁 [`exercise5/`](exercise5)

A form with two password fields and a submit button:

- Input is validated, with an error message next to the relevant field when there's a problem:
  - Passwords must be **at least 6 characters** long.
  - The two passwords must **match**.
- Error placeholders are `div`s with class `err`.
- The submit button is **hidden by default** and only appears once there are no errors.

---

## Exercise #6: Content Show/Hide

📁 [`exercise6/`](exercise6)

- By default, only the article headings are shown (text `div`'s `display` set to `"none"` via inline CSS).
- Clicking **"show"** reveals the article body and hides the "show" link.
- Clicking **"hide"** hides the article body and re-shows the "show" link.

---

## Exercise #7: Simple Playlist

📁 [`exercise7/exercise7a/`](exercise7/exercise7a)

A simple playlist app where users can add songs (non-empty strings) to a list.

---

## Exercise #7b: Advanced Playlist

📁 [`exercise7/exercise7b/`](exercise7/exercise7b)

Extends Exercise #7 so songs can also be **removed**:

- Each song has a delete link/icon.
- Clicking it removes that song from the list.

---

## Exercise #8: Color Picker

📁 [`exercise8/`](exercise8)

A color picker:

- Colored tiles (rectangles) are displayed inside the `"colors"` div.
- When a tile is clicked:
  - That color's code is written inside the `"selected"` div.
  - The `"selected"` div's background is set to that color.

---

## Exercise #9: Labyrinth Game

📁 [`exercise9/`](exercise9)

A game where the player navigates a character out of a labyrinth using the keyboard arrows.

Files: [`index.html`](exercise9/index.html), [`labyrinth.class.js`](exercise9/labyrinth.class.js), [`game.js`](exercise9/game.js)

### Step 1 — Console Rendering
- The labyrinth map is a 2D array (`1` = wall, `0` = empty space).
- `printConsole()` on the `Labyrinth` class prints the map to the browser console (`*` for walls, spaces for empty cells).
- `game.js` instantiates a `Labyrinth` object and calls `printConsole()` on page load.

### Step 2 — On-Screen Rendering
- `printDisplay(id)` draws the labyrinth inside the element with the given `id`.
- Called from `game.js` on the `map` div.
- The parent `map` div is sized to fit the labyrinth, with a solid border.
- Cells are absolutely-positioned `div`s: grey background for walls, white for empty space, sized via the `CELL_SIZE` global.

### Step 3 — Character Movement
- The class defines the start and destination coordinates. The character starts at the start position.
- The character and the destination cell are each displayed distinctly on the map.
- Arrow keys move the character; each move is checked against map bounds and walls before being applied.
- Reaching the destination triggers `alert("Congratulations!")`.

---

## Exercise #10: Internet Security Breach

📁 [`exercise10/`](exercise10)

> Browsers expose powerful features that can be abused. This project explores how sites can spy on
> users, exfiltrate sensitive data, and render the browser inoperable — from an attacker's perspective,
> for educational purposes only.

**Setup notes:**
- Built and tested for **Firefox**.
- Written from an attacker's perspective — HTML does not need to pass validation.
- Self-contained in each HTML file (no external scripts/stylesheets).

### Part 1: Denial of Service

**a. Endless Alert** — 📁 [`exercise10/exercise10a/`](exercise10/exercise10a)
- Shows a JS `alert()` on load; dismissing it immediately triggers another, trapping the user.
- Recovery requires force-quitting the browser (Task Manager on Windows, Force Quit on macOS).
- Note: some browsers (Opera, Chrome) mitigate this; Firefox does not.

**b. Whack-a-Mole** — 📁 [`exercise10/exercise10b/`](exercise10/exercise10b)
- A single **"Click here"** button opens an endless stream of popup **windows** (not tabs), each using a `data:` URL so no network request is needed.
- Windows open without waiting for previously opened ones to close.
- Works with the popup blocker enabled (default setting).

**c. Sticky Page** — 📁 [`exercise10/exercise10c/`](exercise10/exercise10c)
- The user cannot navigate away — attempts to type a new URL, use a bookmark, or search redirect back.
- Works regardless of the page's actual URL.
- Uses an `onbeforeunload`/`onunload` handler (removed after firing, to avoid an infinite loop) combined with `setTimeout` to delay re-navigation.

---

## Project Structure

```
.
├── exercise1/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── exercise2/
│   ├── exercise2a/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── styles.css
│   └── exercise2b/
│       ├── index.html
│       ├── script.js
│       └── styles.css
├── exercise3/
│   ├── images/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── exercise4/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── exercise5/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── exercise6/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── exercise7/
│   ├── exercise7a/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── styles.css
│   └── exercise7b/
│       ├── index.html
│       ├── script.js
│       └── styles.css
├── exercise8/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── exercise9/
│   ├── images/
│   ├── game.js
│   ├── index.html
│   ├── labyrinth.class.js
│   └── styles.css
├── exercise10/
│   ├── exercise10a/
│   │   └── index.html
│   ├── exercise10b/
│   │   └── index.html
│   └── exercise10c/
│       └── index.html
└── README.md
```
