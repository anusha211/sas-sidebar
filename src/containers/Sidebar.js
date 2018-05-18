import React from 'react';
import './Sidebar.css';

const Sidebar=() => (

    <div className="Sidebar">
      <nav>
        <ul>
          <li>  <button><a href='/'> Account</a> </button></li>
          <li>  <a href='/'> Home</a></li>
          <li><a href='/'> Calendar</a></li>
          <li><a href='/'> Logout</a></li>
        </ul>
      </nav>
      
    </div>
);

 export default Sidebar;