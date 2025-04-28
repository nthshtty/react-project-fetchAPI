# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Fetch and display API data (using fetch() or axios).

1. created App functional component.
2. data is state which is managaed by useState hook.
3. fecthing data is aynchronous task so made use of aync/await for fetchData function and called inside the useEffect hook.
4. fecth API used for fecthing the data and captured in fecthedData variable.
5. Error handling done using try/catch blocks.
6. Conditional rendering is used for rendering the data on UI

fetch(url, method : , hearders: {conetent-type : application/json}, data: JSON.stringify({}))
