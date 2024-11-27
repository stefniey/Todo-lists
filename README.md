# todo-list

## User Task Management with Dynamic Task Handling
This project is a responsive frontend application that allows users to manage their daily tasks. With features like adding, updating, and deleting tasks, it provides an intuitive interface for staying organized. The application dynamically handles tasks using a simple form and allows the user to mark tasks as completed.

## Key Features
- **Task List**: Display tasks dynamically and allow the user to interact with them.
- **Add Tasks**: Users can easily add new tasks to their to-do list.
- **Update Tasks**: Tasks can be marked as completed by checking a checkbox.
- **Delete Tasks**: Tasks can be removed from the list.
- **Dynamic Content Rendering**: Uses EJS templating to render the task list and the task status.

## Technical Details
- **Server-side Rendering with EJS**: The app uses EJS for rendering tasks dynamically from the server.
- **Frontend**: Simple HTML structure, styled using external CSS for responsive design.
- **Task Management**: Tasks are managed in-memory on the server and rendered to the client dynamically.
- **Responsive Design**: The app is optimized for mobile, tablet, and desktop screens, ensuring a smooth user experience across devices.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [Technology Stack](#technology-stack)
4. [Screenshots](#screenshots)
5. [Contributing](#contributing)
6. [License](#license)

## Project Structure
Here's an overview of the project's folder structure:

```
- app.js           # Main server file handling routes and app logic
- public/          # Contains static assets like CSS files
  - css/
    - styles.css   # Styling for the app
- views/           # EJS views for dynamic content
  - list.ejs      # The main template rendering the to-do list
```

## Getting Started

- **Prerequisites**:
  - **Node.js** (v14+ recommended)
  - **npm** or **yarn**

- **Installation**:
  - **Clone the repository**:
    ```bash
    git clone https://github.com/stefniey/todo-lists.git
    cd todo-lists
    ```

  - **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

  - **Start the development server**:
    ```bash
    npm start
    # or
    yarn start
    ```

  - **Access the application**: Open [http://localhost:500](http://localhost:500) in your browser to view the app.

## Technology Stack
- **Frontend**: HTML, CSS
- **Backend**: Node.js, Express
- **Templating**: EJS for dynamic content rendering

## Contributing
- **Fork the repository**.
- **Create a new branch** for your feature (`feature-name`).
- **Commit your changes**.
- **Push to your branch**.
- **Open a pull request**.

## License
This project is licensed under the MIT License.
