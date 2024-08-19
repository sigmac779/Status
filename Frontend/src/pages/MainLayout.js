import React from "react";
import "../styles/MainLayout.css";

import Sidebar from "../components/Sidebar";

function MainLayout({children}) {


  return (
    <div className="main__layout">
      <Sidebar
 
      ></Sidebar>
      {children} 

     
    </div>
  );
}

export default MainLayout;
