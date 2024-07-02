import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Announce from "./routes/Announce";
import Create from "./routes/Create";
import Detail from "./routes/Detail";
import Update from "./routes/Update";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
  <div className="container">
    <Header />
    <Sidebar />
    <div className="contents">
      <Router>
        <Routes>
          <Route path={`/announce`} element={<Announce />}></Route>
          <Route path={`/announce/register`} element={<Create />}></Route> 
          <Route path={`/announce/register/:id`} element={<Update />}></Route>
          <Route path={`/announce/detail/:id`} element={<Detail />}></Route>  
        </Routes>
      </Router>
    </div>
    <Footer />
  </div>
  )
}

export default App;
