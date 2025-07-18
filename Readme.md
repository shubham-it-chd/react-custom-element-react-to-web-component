# React Custom Element: Provider and Consumer

This repository contains two projects that demonstrate how to create and consume a React component as a [Web Component (Custom Element)](https://developer.mozilla.org/en-US/docs/Web/API/Web_components).

## Projects

1.  [`react-cus-el`](./react-cus-el/): A React + Vite project that creates a custom element from a simple React component.
2.  [`react-use-cus-el`](./react-use-cus-el/): A separate React + Vite project that consumes and uses the custom element created by `react-cus-el`.

## How it Works

The `react-cus-el` project uses the `react-to-webcomponent` library to wrap a React `App` component and register it as a custom element with the tag `<my-react-app>`.

The `react-use-cus-el` project then includes the JavaScript and CSS generated by `react-cus-el` and uses the `<my-react-app>` tag directly in its own `App.jsx`, demonstrating interoperability.

## Getting Started

To run these projects, you need to run them concurrently in two separate terminal sessions.

### 1. Run the Custom Element Provider

In your first terminal:

```bash
cd react-cus-el
npm install
npm run dev
```

This will start a development server (usually on `http://localhost:5174`) that builds and serves the custom element.

### 2. Run the Custom Element Consumer

In your second terminal:

```bash
cd react-use-cus-el
npm install
npm run dev
```

This will start the consumer application (usually on `http://localhost:5173`). Open this URL in your browser, and you will see the application from `react-use-cus-el` rendering the custom element served by `react-cus-el`.

See the individual `README.md` files in each project directory for more details.
