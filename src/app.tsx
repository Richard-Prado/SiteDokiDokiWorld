import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Header from "./Components/Header"
import "./index.css"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
