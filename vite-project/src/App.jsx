import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProjectsSection } from './components/ProjectsSection';
import ProjectDetail from "./components/ProjectDetail"; // already imported
import { Toaster } from "@/components/ui/toaster";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Toaster />
<BrowserRouter>
          <Routes>
    <Route index element={<Home />} />
    <Route path="/project/:id" element={<ProjectDetail />} /> {/* 🔄 Updated */}
    <Route path="*" element={<NotFound />} />
  </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
