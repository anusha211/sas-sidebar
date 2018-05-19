import React from 'react';
import './Sidebar.css';


const Sidebar=() => (

    <div className="Sidebar">
      <nav>
        <ul>
           <button> <li> <a href='/'> Account</a></li> </button>
           <button> <li> <a href='/'> Home</a></li>  </button>
           <button> <li> <a href='/'> Routine</a></li> </button> 
           <button> <li> <a href='/'> Notice</a></li> </button> 
            <body/>
           <button> <li> <a href='/'>  Logout</a> </li> </button> 
          
        </ul>
      </nav>
      
    </div>
);

 export default Sidebar;