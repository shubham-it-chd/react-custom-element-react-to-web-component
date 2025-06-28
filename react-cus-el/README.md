# React Custom Element Provider (`react-cus-el`)

This project demonstrates how to create a web component from a React component.

The main React component (`src/App.jsx`) is converted into a custom element using the `react-to-webcomponent` library. The custom element is defined in `src/main.jsx` with the tag `wc-app`.

## Development

To run this project and serve the custom element for other applications to use:

```bash
npm install
npm run dev
```

## Building

To build the custom element for production, run:

```bash
npm run build
```

This will generate the necessary JavaScript and CSS files in the `dist` folder.
