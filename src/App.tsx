import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <div className={"App"}>
        <Routes>
          <Route path={"/"} element={<HomePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
