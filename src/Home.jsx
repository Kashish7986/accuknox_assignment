import * as React from 'react';
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SyncIcon from '@mui/icons-material/Sync';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TemporaryDrawer from './TemporaryDrawer'; // +Add Widget
import MultipleSelectPlaceholder from './Dropmenu'; // Dropdown
import Cards from './Cards'; // Widget grid
import './cssfile/handling.css';

function Home() {
  const [options, setOptions] = useState([
    { id: 1, label: 'Cloud Accounts' },
    { id: 2, label: 'Cloud Accounts Risk Assessment' },
    { id: 3, label: 'Widget 3' },
    { id: 4, label: 'Option 4' },
    { id: 5, label: 'Option 5' },
  ]);

  const [selectedOptions, setSelectedOptions] = useState(
    JSON.parse(localStorage.getItem('selectedOptions')) ||
      options.map((option) => option.id)
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [isListOpen, setIsListOpen] = useState(false);

  /* Load saved options from localStorage */
  useEffect(() => {
    const storedOptions = localStorage.getItem('options');
    if (storedOptions) {
      try {
        setOptions(JSON.parse(storedOptions));
      } catch (err) {
        console.error('Error parsing stored options:', err);
      }
    }
  }, []);

  /* Persist data to localStorage */
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify({ options, selectedOptions }));
  }, [options, selectedOptions]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionSelect = (option) => {
    setSearchTerm(option.label);
    setIsListOpen(false);
  };

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    setIsListOpen(val.length > 0);
  };

  return (
    <div className="container1">
      {/* ---------- Header ---------- */}
      <div className="Header">
        {/* Breadcrumb (Left) */}
        <div className="para">
          <p>Home</p>
          <p>&gt;</p>
          <p className="bolder">Dashboard</p>
        </div>

        {/* Right side */}
        <div className="header-right">
          {/* Search */}
          <div className="search-bar">
            <SearchIcon className="search-icon" />
            <input
              type="search"
              className="searchtext"
              placeholder="Search Anything..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {isListOpen && (
              <ul id="list" className="list">
                {filteredOptions.map((option) => (
                  <li
                    key={option.id}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Extra input */}
          <input className="inputb" type="text" />

          {/* Dropdown arrow */}
          <div className="board_down">
            <KeyboardArrowDownIcon />
          </div>

          {/* Icons */}
          <div className="icon">
            <NotificationsNoneIcon className="icon1" />
            <AccountCircleOutlinedIcon className="icon2" />
          </div>
        </div>
      </div>

      {/* ---------- Action Bar ---------- */}
      <div className="action">
        <div className="btngrp">
          <TemporaryDrawer /> {/* +Add Widget */}
          <button className="btn1">
            <SyncIcon style={{ color: 'black' }} />
          </button>
          <button className="btn1">
            <MoreVertIcon style={{ color: 'black' }} />
          </button>
          <MultipleSelectPlaceholder />
        </div>
        <div className="heading">
          <h3>CNAPP Dashboard</h3>
          <h5>CSPM Executive Dashboard</h5>
        </div>
      </div>

      {/* ---------- Cards (Widgets) ---------- */}
      <div className="card1">
        <Cards />
      </div>
    </div>
  );
}

export default Home;
