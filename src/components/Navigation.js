import React from "react";

const Navigation = ({ onRouteChange, currentRoute }) => {
    if (currentRoute === 'home') {
        return  (
        <nav className="navigation"> 
            <p className="settings-btn settings-text" onClick={() => onRouteChange('settings')}>Settings</p>
        
        </nav>
    )
    } else {
        return  (
            <nav className="navigation">
            <p className="settings-btn settings-text" onClick={() => onRouteChange('home')}>Home</p>
            </nav>
        )
    }
}


export default Navigation;