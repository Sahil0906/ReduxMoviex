import React from 'react';
import Home from './src/Screens/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import mockMovies from './src/mockMovies';

function addMovies(state, { movies }) {
  return movies.map(movie => ({
    Title:movie.Title,
    Poster:movie.Poster,
    imdbID:movie.imdbID
  }))
}

function moviesReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_MOVIES':
      return addMovies(state, action.payload)
    default:
      return state;
  }
}

const store = createStore(moviesReducer)


export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
)
