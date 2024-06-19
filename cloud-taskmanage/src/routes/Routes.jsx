import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTodo from '../components/MainTodo';
import { Todolist } from '../components/Todo';

function BrowseRouter() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<MainTodo />} />
        <Route path="/about" element={<Todolist />} />
      </Routes>
    </Router>
  )
}

export default BrowseRouter

