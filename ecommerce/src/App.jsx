import { Outlet } from "react-router-dom";
import Announce from "./components/Announce";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div className='App'>
      <Announce />
      <NavBar />
      <Outlet />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
