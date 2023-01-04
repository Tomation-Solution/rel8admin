import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Dues from "./components/Dues/Dues";
import Election from "./components/Election/Election";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
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
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/elections" element={<Election />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
