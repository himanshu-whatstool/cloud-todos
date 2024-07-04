import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainTodo, Todolist } from '../components';
import { Home } from '../components/view/home';
import { ContactUs } from '../components/view/ContactUs';

function BrowseRouter() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<ContactUs />} />
        <Route path="maintodo" element={<MainTodo />} />
        <Route path="/about" element={<Todolist />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default BrowseRouter

