import React, { useEffect, useRef } from "react";
import "./header.css";

 const nav_links =[
    {
        path:"http://127.0.0.1:8000/",
        display:"Home"
    },
    {
        path:"http://127.0.0.1:8000/dietplanner",
        display:"Diet Planner"
    },
    {
        path:"http://127.0.0.1:8000/bodymass",
        display:"Body Fat Calculator"
    },
    {
        path:"http://localhost:3000",
        display:"Yoga"
    },
 ]

const Header = () => {
    const headerRef = useRef(null)
    const headerFunc = ()=>{
         if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add("sticky_header")
         }else{
            headerRef.current.classList.remove("sticky_header")
         }
    }
    useEffect(()=>{
        window.addEventListener("scroll",headerFunc)
        return ()=>window.removeEventListener("scroll",headerFunc)
    },[])

    
  return (
     <>
     <header className="header"  ref={headerRef} >
        <div className="container" >
            <div className="nav_wrapper" >
                <div className="logo">
                    {/*<div className="logo_img">
                        <img src={logo} alt="" />
                    </div>*/}
                    <h2>HEALTHYME</h2>
                </div>
                {/*=====================Navbar======================*/}
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav_links.map(item=>(
                                <li className="nav_item"><a href={item.path}>
                                {item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/*=====================Nav-Right=====================
                <div className="nav_right">
                    <button className="register_btn">Register</button>
                    <span className="mobile_menu">
                        <i class="ri-menu-line"></i>
                    </span>
                </div>*/}
            </div>
        </div>
     </header>
     </>
  )
}

export default Header;