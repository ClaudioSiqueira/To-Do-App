import React from 'react';

import AppHeader from '../../components/AppHeader';
import ToDoCard from '../../components/ToDoCard';

import './styles.css';

function App() {
  return (
    <>
      <AppHeader />
      <ToDoCard />
      <ToDoCard />
    </>
  );
}

export default App;