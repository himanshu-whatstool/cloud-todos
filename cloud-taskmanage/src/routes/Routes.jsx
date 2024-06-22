import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainTodo, Todolist } from '../components';
import { Video } from '../components/view/video';

function BrowseRouter() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<MainTodo />} />
        <Route path="/about" element={<Todolist />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </Router>
  )
}

export default BrowseRouter

