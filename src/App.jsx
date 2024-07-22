import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Menu from "./Components/Menu";
import AllCom from "./Components/AllCom";
import FullStackDev from "./Components/FullStackDev";
import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import Career from "./Components/Career";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<AllCom />}></Route>
          <Route
            path="/fullStackDevelopment"
            element={<FullStackDev />}
          ></Route>
          <Route path="/dataScience" element={<DataScience />}></Route>
          <Route path="/cyberSecurity" element={<CyberSecurity />}></Route>
          <Route path="/career" element={<Career />}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App