import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainTodo, Todolist } from '../components';
import { Home } from '../components/view/home';

function BrowseRouter() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<MainTodo />} />
        <Route path="/about" element={<Todolist />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default BrowseRouter

