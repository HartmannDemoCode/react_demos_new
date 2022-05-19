# Using Vite over create-react-app
source: https://vitejs.dev/guide/#scaffolding-your-first-vite-project
and: https://medium.com/codex/you-should-choose-vite-over-cra-for-react-apps-heres-why-47e2e7381d13
#### router source:
https://reactrouter.com/docs/en/v6/getting-started/tutorial

### Commands
- `npm init vite@latest my_demo --template react`
- `cd my_demo`
- `npm install`
- `npm install react-router-dom@6`
- `npm run dev`

### Demos
#### Reducer demo
The reducer hook is a more advanced verson of the useState hook. It kan be used to manage state when there are a need for more complex/conditional updates to state: reducerdemo.jsx

#### Infinite scroll
The infinite scroll option shows a way to load images gradually/ lazy loading as they are needed. It is an alternative to pagination. Uses the IntersectionObserver.