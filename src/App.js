import Memo from "./components/Memo/Memo";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import SideEntry from "./components/SideEntry/SideEntry";
import Stage from "./components/Stage/Stage";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="App">
      {/* TODO: Format main components */}
      <NavBar />
      <SideBar />
      <Stage />
      <Memo />
      <Timeline />
      <SideEntry />
    </div>
  );
}

export default App;
