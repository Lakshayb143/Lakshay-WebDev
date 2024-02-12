# React

## Installation and Setup

1. First Way - create-react-app
    ```
    npx create-react-app project-name
    ```

    If you get some error by running the above command , you can use
    ```
    npx create-react-app@latest project-name
    ```

2. Second Way - Vite

  ```
  npm create vite@latest
  ```

  After that you have to answer some questions according to your project.
  Then,
  ```
  
  cd vite-project
  npm install
  npm run dev

  ```



## After completing the project , when we need to deploy

### First Run 
```
npm run build
```

Then,
```
The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

```
Find out more about deployment here:
[Link](https://create-react-app.dev/docs/deployment/)

---

## For installing the router library for the navigation
```
npm i react-router-dom@6
```