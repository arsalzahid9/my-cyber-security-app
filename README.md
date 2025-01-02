<<<<<<< HEAD
# React + TypeScript + Vite
=======
# My Vite Project
>>>>>>> ac23a9c72c7f010e27ff0c6d25b9f6b0c0db6512

This is a simple project bootstrapped with [Vite]([https://vitejs.dev/](https://my-cyber-security-app-git-main-arsal-zahids-projects.vercel.app/)).

## Available Scripts
Before run the project locally use command

### `npm install`

In the project directory, you can run:

### `npm run dev`

Starts the development server. You can access the application at `http://localhost:5173/`.

### `npm run build`

Builds the application for production. The build artifacts will be stored in the `dist` directory.

## Challenges Faced

<<<<<<< HEAD
export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
* **Swiper Integration:** 
    - Encountered issues with integrating the Swiper library, particularly during the build process. 
    - Locally, the Swiper functionality worked correctly, but upon building for production or deploying to Vercel, errors related to missing Swiper modules occurred. 
    - Resolved the issue by carefully reviewing import paths, ensuring correct Swiper CSS module imports, and verifying the Swiper library version compatibility.
>>>>>>> ac23a9c72c7f010e27ff0c6d25b9f6b0c0db6512
