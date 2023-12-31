// import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Candidate } from "@/components/models/Candidate"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="flex ml-auto mr-auto w-[500px]">
          <Candidate />
        </div>
        <div>
          <Button variant={"destructive"}>click me</Button>
        </div>
      </div>

    </>
  )
}

export default App
