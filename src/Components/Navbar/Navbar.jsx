import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.jpeg';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import jack_img from '../../assets/jack.png';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {

  const sidebar_toggle = (e) => {
    setSidebar((prev) => prev === false ? true : false);
  };

  const handleLogout = () => {
    window.location.href = "http://127.0.0.1:5500/animated-login-and-register-1-master/index.html?#";
  };

  const openChatbot = () => {
    window.location.href = "http://127.0.0.1:5500/AiChatBot/index.html";
  };

  const openFileUpload = () => {
    window.location.href = "http://127.0.0.1:5500/backend/File%20Upload%20in%20JavaScript/index.html";
  };

  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img src={menu_icon} alt="" className="menu-icon" onClick={sidebar_toggle} />
        <Link to='/'><img src={logo} alt="" className="logo" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        {/* ✅ Upload icon now opens the file upload page */}
        <img 
          src={upload_icon} 
          alt="" 
          style={{ cursor: 'pointer' }} 
          onClick={openFileUpload} 
        />

        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={jack_img} alt="" className="user-icon" />

        {/* Chatbot Button */}
        <button 
          style={{
            marginLeft: '10px',
            padding: '6px 12px',
            borderRadius: '6px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px'
          }}
          onClick={openChatbot}
        >
          💬 Chat
        </button>

        {/* Logout Button */}
        <button 
          style={{
            marginLeft: '10px',
            padding: '6px 12px',
            borderRadius: '6px',
            backgroundColor: '#e74c3c',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px'
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
