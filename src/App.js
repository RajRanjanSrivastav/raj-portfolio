import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
function App() {
  const [menuOpen,setmenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <div className="App">
      <HeaderPhone menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Home/>
      <Work/>
      <Timeline/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
