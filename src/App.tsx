import React from 'react';
import { RouterProvider, Routes, Route } from 'react-router-dom';
import { router } from './routes';
import Layout from './Layout';
import { MovieProvider } from './context/movie-context';


const App = () => {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;
