import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({menuOpen, setmenuOpen}) => {
  return(
    <>
    <nav>
      <NavContent setmenuOpen={setmenuOpen}/>
    </nav>
    <button className={`navBtn ${menuOpen?"newBtn":""}`} onClick={()=>setmenuOpen(!menuOpen)}>
      <AiOutlineMenu/>
    </button>
    </>
  )
};

export const HeaderPhone=({menuOpen,setmenuOpen})=>{
  return(
    <div className={`navPhone ${menuOpen?"navComes":""}`}>
      <NavContent setmenuOpen={setmenuOpen}/>
    </div>
    
  );
};
const NavContent = ({setmenuOpen}) =>(
  <>
  <h2>Raj Ranjan Srivastav</h2>
  <div>
    <a onClick={()=>setmenuOpen(false)} href="#home">Home</a>
    <a onClick={()=>setmenuOpen(false)} href="#work">Work</a>
    <a onClick={()=>setmenuOpen(false)} href="#timeline">Experience</a>
    <a onClick={()=>setmenuOpen(false)} href="#contact">Contact</a>
  </div>
  <a href="mailto:srivastavrajranjan75@gmail.com">
    <button>Email</button>
  </a>
  </>
)
export default Header
