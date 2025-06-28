# React Custom Element Consumer (`react-use-cus-el`)

This project demonstrates how to use a custom element that was created with React.

It consumes the `<my-react-app>` web component from the `react-cus-el` project.

## Development Setup

1.  **Start the provider application.** In a separate terminal, navigate to the `react-cus-el` directory and run:
    ```bash
    npm install
    npm run dev
    ```
    This will start a development server (usually on `http://localhost:5174`) that serves the custom element.

2.  **Start this application.** In this project's directory (`react-use-cus-el`), run:
    ```bash
    npm install
    npm run dev
    ```

Now, you can open the URL for this project (usually `http://localhost:5173`) to see the `react-use-cus-el` app rendering the custom element from `react-cus-el`.

## How it Works

*   `index.html` is modified to load the custom element's script and CSS directly from the `react-cus-el` development server.
*   `src/App.jsx` uses the custom element `<my-react-app>` just like a regular HTML tag.
