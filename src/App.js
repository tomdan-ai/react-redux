import React from 'react';
import './App.css';
import Users from './components/Users';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersSlice from './store/users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
