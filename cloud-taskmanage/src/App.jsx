import BrowseRouter from "./routes/Routes";
import './App.css'
import { useEffect } from "react";

function App() {
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }, [])
  return (
    <section className="app_list" style={{ height: '100vh', overflowY: 'auto' }}>
      <BrowseRouter />
    </section>
  )
}

export default App




