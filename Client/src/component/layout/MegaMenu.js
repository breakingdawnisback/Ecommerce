import React, { useState, useEffect } from 'react';
import './MegaMenu.css';
import { menuData } from './menuData';

const MegaMenu = ({ activeMenu }) => {
  // --- FIX ---
  // 1. Hooks are now called unconditionally at the top level.
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // 2. The effect will now run safely on every render.
  useEffect(() => {
    // If a menu is active and has data, set its first item as the default sub-menu.
    if (activeMenu && menuData[activeMenu]) {
      setActiveSubMenu(menuData[activeMenu][0].title);
    } else {
      // If no menu is active, reset the sub-menu state.
      setActiveSubMenu(null);
    }
  }, [activeMenu]); // This effect re-runs whenever the activeMenu prop changes.

  // --- Conditional Logic for Rendering ---
  // If there's no active menu or no data, we return null after hooks are called.
  if (!activeMenu || !menuData[activeMenu] || !activeSubMenu) {
    // We still render a div for the transition to work correctly on exit
    return <div className="mega-menu"></div>;
  }

  const data = menuData[activeMenu];
  const currentSubMenuData = data.find(item => item.title === activeSubMenu);
  
  // Guard against rare cases where sub-menu data might not be found
  if (!currentSubMenuData) {
     return <div className="mega-menu show">Error: Submenu not found.</div>;
  }

  return (
    // The key is adding the 'show' class when it's supposed to be visible
    <div className={`mega-menu ${activeMenu ? 'show' : ''}`}>
      <div className="mega-menu-content">
        <div className="mega-menu-nav">
          <ul>
            {data.map((item) => (
              <li
                key={item.title}
                className={activeSubMenu === item.title ? 'active' : ''}
                onMouseEnter={() => setActiveSubMenu(item.title)}
              >
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mega-menu-main">
          {currentSubMenuData.type === 'promo' && (
            <div className="promo-grid">
              <h4>{activeMenu}'s Brands</h4>
              <div className="promo-grid-items">
                {currentSubMenuData.promoContent.map((promo, index) => (
                  <a href={promo.link} key={index} className="promo-card">
                    <img src={promo.imgSrc} alt="" className="promo-bg-image" />
                    <div className="promo-logo-container">
                      <img src={promo.logoSrc} alt="" className="promo-logo" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
          {currentSubMenuData.type === 'links' && (
             <div className="link-columns">
               {currentSubMenuData.subCategories.map((sub, index) => (
                 <a href={sub.link} key={index} className="mega-menu-sublink">{sub.title}</a>
               ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;