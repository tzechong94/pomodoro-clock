import React from "react";

const Navigation = ({ onRouteChange, currentRoute }) => {
    if (currentRoute === 'home') {
        return  (
        <nav> 
            <div>
                <p onClick={() => onRouteChange('settings')}>Settings</p>
            </div>
        </nav>
    )
    } else {
        return  (
            <nav>
                <div>
                <p onClick={() => onRouteChange('home')}>Home</p>
                </div>
            </nav>
        )
    }
}


export default Navigation;