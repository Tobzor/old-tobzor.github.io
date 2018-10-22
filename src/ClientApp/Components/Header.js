import React, { Component } from "react";

import profileimg from "../../assets/profile_img.png";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={profileimg} alt="profile" className="profile-image" />
            </div>
        );
    }
}

export default Header;