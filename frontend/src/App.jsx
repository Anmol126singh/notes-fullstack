import { Route, Routes } from "react-router-dom"
import CreateNote from "./Pages/CreateNote"
import HomePage from "./Pages/HomePage"
import NoteDetail from "./Pages/NoteDetail"


function App() {

  return (
   <div className="relative h-full w-full over" data-theme = "forest">
<div className="absolute inset-0 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]"  >
</div>    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateNote />} />
      <Route path="/note/:id" element={<NoteDetail />} />
   </Routes>
     </div>
  )
}

export default App
