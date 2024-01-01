// import { useState } from 'react'

// import { Button } from "@/components/ui/button"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CandidatePage from "@/pages/CandidatePage";
import { Navigation } from "@/components/Navigation";
import JobsPage from "@/pages/JobsPage";
import CompanyPage from "@/pages/CompanyPage";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className="">
          <Navigation />
        </div>
        <Routes>
          <Route path="/Candidates" element={<CandidatePage />} />
          <Route path="/Jobs" element={<JobsPage />} />
          <Route path="/Company" element={<CompanyPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
