import React from 'react';
import { useSelector } from 'react-redux';
import './Adminheader.css';
export default function AdminHeader() {
  const { isAuthenticated, username } = useSelector((state) => state.user);

  return (
    <div>
      <div className="navbar1">
        <a className="Task Bender" href="/about">
          TaskBender
        </a>
        <a className="logout" href="/">
          Logout
        </a>
        {isAuthenticated && (
          <a className="profile" href="/profile">
            Profile: {username}
          </a>
        )}
      </div>
    </div>
  );
}
