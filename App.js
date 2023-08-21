import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";  
import logo from './verizon_logo.jpg';

export const navItems = [
  {
    title: 'Dashboard',
    submenu: [
      {
        title: 'SOG Dashboard',
        url: '/seaofgreen',
        menuRouteTitle:'/seaofgreen',
        parentTitle:'Dashboard',
      },
      {
        title: 'Incident Dashboard',
        url: '/',
        menuRouteTitle:'/',
        parentTitle:'Dashboard',
      }
    ],
  },
  {
      title: 'Configuration',
      submenuType:'horizontal',
      submenu: [
        {
          title: 'Hawkeye configuration',
          parentTitle:'Configuration',
          submenu: [
            {
              title: 'Data Source',
              url: '/configuration',
              menuRouteTitle:'DataSource',
              tabData:{tab:'DataSource'},
              parentTitle:'Configuration',
            },
            {
              title: 'Application',
              url: '/configuration',
              menuRouteTitle:'Application',
              tabData:{tab:'Application'},
              parentTitle:'Configuration',
            },
            {
              title: 'Metric',
              url: '/configuration',
              tabData:{tab:'Metric'},
              menuRouteTitle:'Metric',
              parentTitle:'Configuration',
            },
            {
              title: 'Query',
              url: '/configuration',
              tabData:{tab:'Query'},
              menuRouteTitle:'Query',
              parentTitle:'Configuration',
            },
            {
              title: 'Threshold',
              url: '/configuration',
              menuRouteTitle:'Threshold',
              tabData:{tab:'Threshold'},
              parentTitle:'Configuration',
            },
            {
              title: 'Notifications',
              url: '/configuration',
              menuRouteTitle:'Notifications',
              tabData:{tab:'Notifications'},
              parentTitle:'Configuration',
            },
            {
              title: 'DC Failover',
              url: '/configuration',
              menuRouteTitle:'DcOverride',
              tabData:{tab:'DcOverride'},
              parentTitle:'Configuration',
            },
          ]
        },
        {
          title: 'SOG configuration',
          parentTitle:'Configuration',
          submenu:[
            {
              title: 'Define Section',
              url: '/sogConfiguration/sections',
              menuRouteTitle:'/sogConfiguration/sections',
              parentTitle:'Configuration',
            },
            {
              title: 'Define Channel',
              url: '/sogConfiguration/channels',
              menuRouteTitle:'/sogConfiguration/channels',
              parentTitle:'Configuration',
            },
            {
              title: 'Define Panel',
              url: '/sogConfiguration/panels',
              menuRouteTitle:'/sogConfiguration/panels',
              parentTitle:'Configuration',
            },
            {
              title: 'Configure Rules and Policies',
              url: '/rulesAndPolicyConfig/rules',
              menuRouteTitle:'/rulesAndPolicyConfig/rules',
              parentTitle:'Configuration',
            }
          ]
        }
      ],
    },
];

const SubMenuItem = ({ title, url, submenu }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      style={{
        listStyleType: 'none',
        width: '20rem', // Adjust the width as needed to accommodate 30 characters
        margin: '0.25rem 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.3)', 
        paddingTop: '0.5rem', // Add spacing above the text
        paddingBottom: '0.5rem', // Add spacing below the text
        backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.02)' : 'transparent',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={url}
        style={{
          display: 'flex',
          justifyContent: 'space-between', // Aligns the arrow to the right
          alignItems: 'center',
          fontSize: '1.2rem', // Reduced font size
          color: '#000',
          fontWeight: 'bold',
          textDecoration: 'none',
          padding: '0.25rem 0.5rem', // Reduced padding
          backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.02)' : 'transparent',
          transition: 'background-color 0.3s, color 0.3s',
          // fontWeight: isHovered ? 700 : 'normal',
        }}
      >
        <span>{title}</span>
        {submenu && <i className="fas fa-chevron-right"></i>}
      </Link>
    </li>
  );
};

const NavItem = ({ title, submenu, url, isSelected, isHovered, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      style={{
        marginRight: '1rem',
        position: 'relative',
      }}
    >
      <span
        style={{
          fontSize: '1.5rem',
          marginLeft: '1rem',
          cursor: 'pointer',
          fontWeight: 700,
          borderBottom: isSelected ? '2px solid red' : isHovered ? '2px solid white' : 'none', // Change border color based on hover and selection
          paddingBottom: '2px',
          paddingTop: '4px',
          transition: 'border-bottom 0.3s',
        }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {title}
      </span>
      {url && <Link to={url}></Link>}
      {isSelected && submenu && (
        <ul
          className="submenu-container"
          style={{
            top: 0,
            left: '100%',
            display: 'block', // Always show the submenu when it's open
          }}
        >
        </ul>
      )}
    </div>
  );
};

const Navigation = ({ navItems }) => {
  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(null);
  const [hoveredMenuItemIndex, setHoveredMenuItemIndex] = useState(null);
  const [selectedSubmenuItemIndex, setSelectedSubmenuItemIndex] = useState(null);

  const handleMenuClick = (index) => {
    setSelectedMenuItemIndex(index);
    setSelectedSubmenuItemIndex(null);
  };

  const handleSubmenuClick = (index) => {
    setSelectedSubmenuItemIndex(index);
  };

  const handleSubmenuClose = () => {
    setSelectedMenuItemIndex(null);
    setSelectedSubmenuItemIndex(null);
  };

  const handleMenuItemHover = (index) => {
    setHoveredMenuItemIndex(index);
  };

  const handleMenuItemMouseLeave = () => {
    setHoveredMenuItemIndex(null);
  };

  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        position: 'relative',
        zIndex: 1,
        // transition: 'background-color 0.3s',
      }}
    >
      <div>
       <span style={{ fontSize: '2.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" style={{ height: '100px', marginRight: '10px' }} />
          <span style={{ fontSize: '1.5rem', marginLeft: '10rem' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleMenuClick(index)}
                  style={{ position: 'relative' }}
                >
                  <NavItem
                    title={item.title}
                    submenu={item.submenu}
                    url={item.url}
                    isSelected={selectedMenuItemIndex === index}
                    isHovered={hoveredMenuItemIndex === index}
                    onClick={() => handleMenuClick(index)}
                    onMouseEnter={() => handleMenuItemHover(index)}
                    onMouseLeave={handleMenuItemMouseLeave}
                  />
                </li>
              ))}
            </ul>
          </span>
        </span>
      </div>
      {selectedMenuItemIndex !== null && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 0,
            backgroundColor: '#fff',
            padding: '1rem',
            width: '100%',
            display: 'flex',
          }}
        >
          <div
            style={{
              marginLeft: '10rem',
              marginRight: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                paddingBottom: '0.5rem',
              }}
            >
              <h2 style={{ color: '#000', marginRight: '1rem' }}>
                {navItems[selectedMenuItemIndex]?.title}
              </h2>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0,color: '#fff' }}>
              {navItems[selectedMenuItemIndex]?.submenu?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSubmenuClick(index)}
                  style={{ margin: '0.5rem 0', position: 'relative' }}
                >
                  <SubMenuItem
                    title={item.title}
                    url={item.url}
                    submenu={item.submenu}
                    onClose={handleSubmenuClose}
                  />
                </li>
              ))}
            </ul>
          </div>
          {selectedSubmenuItemIndex !== null && (
            <div
              style={{
                padding: '1rem',
                minWidth: '12rem',
                color: '#000',
                backgroundColor: '#fff',
              }}
            >
              {navItems[selectedMenuItemIndex]?.submenu[selectedSubmenuItemIndex]?.submenu?.map(
                (submenuItem, subIndex) => (
                  <SubMenuItem
                    key={subIndex}
                    title={submenuItem.title}
                    url={submenuItem.url}
                    submenu={submenuItem.submenu}
                    parentTitle={
                      submenuItem.parentTitle ||
                      navItems[selectedMenuItemIndex]?.title // Pass the current submenu's parent title
                    }
                  />
                )
              )}
            </div>
          )}
          <button
  onClick={handleSubmenuClose}
  style={{
    position: 'absolute', // Position the close button absolutely within the submenu
    top: 0, // Position at the top
    right: '1rem', // Position at the right
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // You can adjust the color and opacity
    borderRadius: '3px', // Keep the border radius
    color: '#000',
    cursor: 'pointer',
    marginLeft: 'auto', // Position the close button to the right
    marginTop: '0.5rem', // Adjust the top margin
    transition: 'background-color 0.3s',
    display: 'flex', // Ensure the button element has a display of 'flex'
    alignItems: 'center', // Align items vertically
  }}
>
  <i className="fas fa-times" style={{ fontSize: '1.5rem' }}></i>
  <span
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '10px', // Adjust the size of the square
      height: '10px', // Adjust the size of the square
      backgroundColor: 'transparent', // Set initial background color to transparent
      borderRadius: '3px', // Adjust the border radius of the square
      transition: 'background-color 0.3s',
      opacity: 0, // Initially hidden
    }}
  ></span>
</button>

        </div>
      )}
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <Navigation navItems={navItems} />
    </Router>
  );
};

export default App;
