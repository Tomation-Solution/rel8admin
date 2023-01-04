import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Dues from "./components/Dues/Dues";
import Events from "./components/Events/Events";
import Members from "./components/Members/Members";
import News from "./components/News/News";
import Publications from "./components/Publications/Publications";
import Settings from "./components/Settings/Settings";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
      <SideBar />
        <Routes>
          <Route path="/" element={<DashBoard />}/>
          <Route path="/members" element={<Members />} />
          <Route path="/settings" element={<Settings />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/dues" element={<Dues />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/publications" element={<Publications />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
