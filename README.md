# Notes CLI

A simple Command Line Interface (CLI) tool for managing notes, built with Node.js. This project allows you to create, search, list, and delete notes directly from your terminal. efficiently. Additionally, it includes a web server to visualize your notes in a browser.

This project is my implementation for the [Introduction to Node.js, v3](https://frontendmasters.com/courses/node-js-v3/) course on Frontend Masters.

## Features

- **Create Notes**: Add new notes with optional tags.
- **List Notes**: View all your saved notes.
- **Search**: Find notes by content using keywords.
- **Manage**: Delete specific notes by ID or clear all notes.
- **Web View**: Launch a local web server to view your notes in a nice HTML format.

## Installation

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd notes-node-cli
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Link the package** (Optional, to use the `note` command globally):
    ```bash
    npm link
    ```
    _If you don't link it, you can run commands using `node index.js <command>`._

## Usage

If you used `npm link`, you can use the `note` command. Otherwise, replace `note` with `node index.js` in the examples below.

### Create a New Note

```bash
note new "My first note"
# With tags
note new "Buy groceries" --tags "personal,shopping"
```

### List All Notes

```bash
note all
```

### Find Notes

Search for notes containing specific text:

```bash
note find "groceries"
```

### Remove a Note

Delete a note by its ID (ID is shown when listing/finding notes):

```bash
note remove 1707123456789
```

### Clear All Notes

Delete all notes from the database:

```bash
note clean
```

### Start Web Server

Launch a local website to view your notes:

```bash
note web
# Specify a custom port (default is 3001)
note web 4000
```

## Technologies Used

- **Node.js**: Runtime environment.
- **Yargs**: For building interactive command-line tools.
- **Jest**: For testing.
- **Open**: To open apps like browsers.

## Acknowledgements

- Course: [Introduction to Node.js, v3](https://frontendmasters.com/courses/node-js-v3/) by Scott Moss on Frontend Masters.
- [View Certificate](https://static.frontendmasters.com/ud/c/72af83ad2d/ehyaBEyiou/node-js-v3.pdf)
